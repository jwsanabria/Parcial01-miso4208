Feature: Add podcast
  AN an user I WANT TO add a podcast TO hear my best podcasts

  Scenario Outline: Add a podcast searchin FYYD
    When I swipe left
    Then I touch the "Add Podcast" text
    Then I press the "SEARCH FYYD" button
    Then I enter text <podcastName> into field with id "search_src_text"
    Then I press the enter button
    Then I wait for 5 seconds    
    Then I touch the <podcastShortName> text
    Then I press the "SUBSCRIBE" button
    Then I press the "OPEN PODCAST" button
    Then I wait for <podcastShortName> to appear

    Examples:
      | podcastName         | podcastShortName                          |
      | "Studio 3"          | "JW: La Atalaya (ed. estudio) (wS MP3)"   |

  Scenario Outline: Add a podcast from GPODDER.NET
    When I swipe left
    Then I touch the "Add Podcast" text
    Then I press the "BROWSE GPODDER.NET" button
    Then I touch the <podcastName> text
    Then I press the "SUBSCRIBE" button
    Then I press the "OPEN PODCAST" button
    Then I wait for <podcastShortName> to appear

    Examples:
      | podcastName         | podcastShortName |
      | "Linux Outlaws"     | "Linux Outlaws"  |

  Scenario Outline: Add a podcast from iTunes
    When I swipe left
    Then I touch the "Add Podcast" text
    Then I press the "SEARCH ITUNES" button
    Then I touch the <podcastName> text
    Then I press the "SUBSCRIBE" button
    Then I press the "OPEN PODCAST" button
    Then I wait for <podcastShortName> to appear

    Examples:
      | podcastName         | podcastShortName |
      | "Invisibilia - NPR" | "Invisibilia"    |