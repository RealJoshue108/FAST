const new_fast = [
 {
    principle: {
      handle: "FAST Checklist",
      text:
        "If technology allows visual rendering of content",
      num: "Vis.1",
    },
    guidelines: [
      {
        id: "defined-way-for-non-visual-rendering",
        num: "V.1.1",
        handle: "There is a defined way for a non-visual rendering to be created.",
        text:
          "Content is frequently authored with visual rendering the primary consideration. Some technologies, such as image formats, explicitly focus on visual rendering. Some users are not able to access visual content, and must use other forms of the content, such as text or audio.",
        successcriteria: [
          {
            id: "defined-way-for-non-visual-rendering",
            num: "V.1.1",
            handle: " ",
            text:
              "Content that is well-structured allows automated conversion into alternate formats, or content can provide explicit non-visual alternatives. Image and video technologies can and should provide support for automated transformation or for alternative versions as appropriate. Other technologies that are not as explicitly visual but that are likely to be rendered visually, such as text formats and often structured data, need to ensure that non-visual rendering can be as easily achieved as visual rendering.",
            level:
              " ",
          },
        ],
      },
      {
        id: "content-resized",
        handle: "Content can be resized.",
        text:
          "Many users need content to be displayed larger than the default, not just because of un-sharp vision but also to mitigate other visual perception difficulties such as difficulty separating foreground from background.",
        num: "V.1.2",
        successcriteria: [
          {
            id: "content-resized",
            num: "V.1.2",
            handle: " ",
            text:
              " Depending on device and situation, content can also be displayed smaller than the author expects, so needs to be resizeable even if the intended default size is suitable.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 1",
                text:
                  "Technologies should provide features to allow user resize, without experiencing problems such as pixelation, clipping, excessive scrolling, etc. Support for resizing therefore requires a variety of features to be enabled by the technology.",
              },
            ],
          },
        ],
      },
      {
        id: "luminosity-hue",
        handle: "Luminosity and hue contrast can adapt to user requirements.",
        text:
          "Users with color vision deficits and other visual impairments have more difficulty separating certain foreground from background colors than average.",
        num: "V.1.3",
        successcriteria: [
          {
            id: "luminosity-hue",
            num: "V.1.3",
            handle: " ",
            text:
              "The WCAG 2.0 luminosity contrast ratio describes a way to calculate this contrast, but sometimes even content that passes the guidelines is insufficient.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 2",
                text:
                  " Technologies should provide ways to obtain increase or customized contrast, e.g., via a high contrast mode.",
              },
            ],
          },
        ],
      },
      {
        id: "text-presentation",
        handle: "Text presentation attributes can be changed.",
        text:
          " Some users with visual impairments and learning disabilities find that customizing text presentation improves their ability to distinguish letters, track lines, etc.",
        num: "V.1.4",
        successcriteria: [
          {
            id: "text-presentation",
            num: "V.1.4",
            handle: " ",
            text:
              "Technologies should provide features allowing users to customize typeface, font weight, font style, line / word / letter spacing, margins, line length, justification.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 3",
                text:
                  "Here is some extra info about this checkpoint.",
              },
            ],
          },
        ],
      },
      {
        id: "presentation-of-pointers",
        handle: "Visual presentation of pointers and cursors can be adjusted.",
        text:
          " Sometimes pointer and cursor indicators are difficult for users to distinguish and locate, and incessant animation, even simple blinking, can be excessively distracting for some users.",
        num: "V.1.5",
        successcriteria: [
          {
            id: "presentation-of-pointers",
            num: "V.1.5",
            handle: " ",
            text:
              "Technologies that define pointer and cursor indicators should provide features for user to customize size, color, and animation.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 4", 
                text:
                  "Here is some extra info about this checkpoint.",
              },
            ],
          },
        ],
      },
      {
        id: "presentation-readable",
        handle: "Changing content presentation does not render it unreadable.",
        text:
          "Many accessibility requirements come down to allowing users to customize presentation. When presentation is changed in a way the author or designer did not anticipate, unexpected side effects often appear that create new problems.",
        num: "V.1.6",
        successcriteria: [
          {
            id: "presentation-readable",
            num: "V.1.6",
            handle: " ",
            text:
              "A frequent situation is when content is resized but the region for the content is not, causing the content to be clipped. Another is when regions resize but do not reposition, making it difficult to use the content at the new scale.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 5",
                text:
                  " Change of font attributes sometimes leads to a similar problem, such as when users change to a heavier font but the space allocated for characters does not increase. Technologies should provide features to ensure that change of display attributes does not create unintended side effects.",
              },
            ],
          },
        ],
      },
      {
        id: "blink-flash",
        handle: "Technology does not allow blinking or flashing of content, or provides a feature for users to quickly turn it off or permanently disable it.",
        text:
          " Technologies should not provide features that allow authors to create content that blinks (which can be excessively distracting) or flashes (which can be medically disastrous).",
        num: "V.1.7",
        successcriteria: [
          {
            id: "blink-flash",
            num: "V.1.7",
            handle: " ",
            text:
              "However, technologies that provide general animation features (even simple ones) may be unable to rule out author usages that create these effects. It is important for such technologies to provide a feature for users to stop animation, or prevent it until requested.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 6",
                text:
                  "More complex technologies should also provide means to mark potentially problematic content, warn users who have opted into the warning, and give users the option to skip or suppress problematic regions of content.",
              },
            ],
          },
        ],
      },
      {
        id: "nav-order",
        handle: "It is possible to make navigation order correspond to the visual presentation.",
        text:
          "Flexible display mechanisms can cause content to appear in unpredicted locations.",
        num: "V.1.8",
        successcriteria: [
          {
            id: "nav-order",
            num: "V.1.8",
            handle: " ",
            text:
              "This is often a good feature as it allows optimization of display. However, the navigation order of such content sometimes does not match the perceived order, and users have difficulty using linear (i.e., keyboard-based) navigation effectively.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 7",
                text:
                  " However, the navigation order of such content sometimes does not match the perceived order, and users have difficulty using linear (i.e., keyboard-based) navigation effectively. Technologies should provide features to ensure when the visual order of content changes, the interaction order changes to match.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    principle: {
      handle: "FAST Checklist",
      text:
        "If technology provides author control over color",
      num: "Color.2",
    },
    guidelines: [
      {
        id: "mechanism-users-override-colors",
        num: "Color.2.1",
        handle: "There is a mechanism for users to override colors of text and user interface components.",
        text:
          "Custom color settings benefits not only users with visual perception impairments, but also users who can be distracted by certain colors or combinations.",
        successcriteria: [
          {
            id: "mechanism-users-override-colors",
            num: "Color.2.1",
            handle: " ",
            text:
              "Technologies should provide features to allow users to set their own colors or contrast for text (including background) and standard user interface components.",
            level:
              " ",
          },
        ],
      },
      {
        id: "content-resized",
        handle: "Content can be resized.",
        text:
          "There is a feature for authors to define semantically available \"color classes\" that users can easily map to custom colors, and give preference to this vs. coloring objects individually.",
        num: "Color.2.2",
        successcriteria: [
          {
            id: "content-resized",
            num: "Color.2.2",
            handle: " ",
            text:
              "Allowing user override of author design is most effective when the technology provides rich semantics for content, on which author or default colors are based, that can be easily recolored in a meaningful manner.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 8",
                text:
                  "Technologies should define semantics, or a way for authors to define and communicate the semantics they use, to allow most effective recoloring with minimal advance knowledge of site implementation.",
              },
            ],
          },
        ],
      },
      {
        id: "color-schemata",
        handle: "There is a feature for users to choose color schemata that work for them.",
        text:
          "Content authors are frequently concerned with branding, and want to ensure that the color scheme of content communicates the brand.",
        num: "Color.2.3",
        successcriteria: [
          {
            id: "color-schemata",
            num: "Color.2.3",
            handle: " ",
            text:
              "But when the color scheme makes content inaccessible to users this goal can be counter-productive.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 9",
                text:
                  " Technologies can increase author control and user accessibility by providing a way for authors to define multiple color schemes, allowing more accessible schemes still to partake in the branding process, and allowing users to choose from among available schemes.",
              },
            ],
          },
        ],
      },
      {
        id: "report-color",
        handle: "The foreground and background color of an object can be reported to the user via AT.",
        text:
          " Experienced color of content is frequently the way users refer to it; for instance in \"redlined\" text people may say \"find my edits in red\". ",
        num: "Color.2.4",
        successcriteria: [
          {
            id: "report-color",
            num: "Color.2.4",
            handle: " ",
            text:
              "Users of assistive technologies who cannot perceive the color directly therefore still have a need to know the color in order to interact with others.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 10",
                text:
                  "Therefore, technologies should define a way for foreground and background color to be reported to assistive technologies and easily searched.",
              },
            ],
          },
        ],
      },
      {
        id: "set-color-seperately",
        handle: "There are ways to set foreground and background colors separately for all objects.",
        text:
          "Color contrast problems often arise when the foreground color of one object is overlaid onto the (foreground or background) color of another object, resulting in an unintended contrast.",
        num: "Color.2.5",
        successcriteria: [
          {
            id: "set-color-seperately",
            num: "Color.2.5",
            handle: " ",
            text:
              "It is therefore important for technologies to allow both the foreground and background color of objects to be set to reasonable values and avoid this overlay problem.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 11",
                text:
                  "WCAG Technique related to this checkpoint G18 'Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text's.",
              },
            ],
          },
        ],
      },
      {
        id: "compositing-rules",
        handle: "When color compositing rules are not clearly designed, unexpected color contrast can occur.",
        text:
          "Many accessibility requirements come down to allowing users to customize presentation. When presentation is changed in a way the author or designer did not anticipate, unexpected side effects often appear that create new problems.",
        num: "Color.2.6",
        successcriteria: [
          {
            id: "compositing-rules",
            num: "Color.2.6",
            handle: " ",
            text:
              " The most frequent problem is when aliasing of edges causes visual artifacts, which in the case of text with its narrow strokes can significantly impact perception.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 12",
                text:
                  " Impacts of borders, shadows, and transparency can also lead to inaccessible contrast. Therefore technologies should specify compositing rules very precisely.",
              },
            ],
          },
        ],
      },
    ],
  },
{
    principle: {
      handle: "FAST Checklist",
      text:
        "If technology provides features to accept user input.",
      num: "Input.1",
    },
    guidelines: [
      {
        id: "mechanism-users-label-input",
        num: "Input.1.1",
        handle: "There is a mechanism to label user input controls in an unambiguous and clear manner.",
        text:
          "When collecting user input, users must know what input is required for each control.",
        successcriteria: [
          {
            id: "mechanism-users-label-input",
            num: "Input.1.1",
            handle: " ",
            text:
              "Often this is made evident by visual context, but this does not help non-visual users or users of alternate visual presentations such as magnification. When labels are provided, if they are not programmatically associated with the control, users may not be able to find the correct label. Therefore it is important for technologies to provide ways to associate labels with their controls.",
            level:
              " ",
          },
        ],
      },
      {
        id: "extended-help",
        handle: "Authors can associate extended help information with a control.",
        text:
          "When authors request user input that may require special assistance, such as details of the input format required or how to find an account number on a bill, they may provide extended help in addition to the label.",
        num: "Input.1.2",
        successcriteria: [
          {
            id: "extended-help",
            num: "Input.1.2",
            handle: " ",
            text:
              "Even if this is positioned near the control, some users may not reliably find it. Therefore technologies should provide a way for authors to explicitly attach extended help (including links to extended help) directly to the control.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 13",
                text:
                  "Here is some more about this FAST checkpoint.",
              },
            ],
          },
        ],
      },
      {
        id: "input-error-association",
        handle: "If a user inputs data that is not accepted by the system, a report of the issue is made and the user given an opportunity to correct the input.",
        text:
          "Such error messages are frequently provided at the top of the form, from where it can be difficult for the user to locate the control that needs input corrected.",
        num: "Input.1.3",
        successcriteria: [
          {
            id: "input-error-association",
            num: "Input.1.3",
            handle: " ",
            text:
              "Even if the error message is positioned closer to the control, it can be difficult to find the correct control. Therefore, much like labels and help content, technologies need to provide a way to associate error messages directly with the control to which they apply.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 14",
                text:
                  "For more on accessible error messaging and error recovery, see WCAG.",
              },
            ],
          },
        ],
      },
      {
        id: "reporting-mechanism",
        handle: "There is a mechanism to report and set the state or value of controls programmatically.",
        text:
          "While much user input is collected using platform input services, some users use assistive technologies that work better when interacting programmatically with the content directly, effectively in an alternate user interface.",
        num: "Input.1.4",
        successcriteria: [
          {
            id: "reporting-mechanism",
            num: "Input.1.4",
            handle: " ",
            text:
              "For this to work, technologies need to provide a means for assistive technologies to get and set the nature, state, and value of input controls.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 15",
                text:
                  "See more about accessible input controls.",
              },
            ],
          },
        ],
      },
      {
        id: "multiple-inputs",
        handle: "Authors can address multiple types of input hardware (keyboard, pointing device, touch screen, voice recognition, etc.), or the technology supports hardware-agnostic input methods.",
        text:
          "A basic tenet of accessibility is that users should be able to user input and output hardware that is optimal for them.",
        num: "Input.1.5",
        successcriteria: [
          {
            id: "multiple-inputs",
            num: "Input.1.5",
            handle: " ",
            text:
              "Some use alternate versions of familiar hardware, such as keyboard-compatible and pointing devices, while others use less widespread types of hardware, such as voice recognition, single-switch devices, Braille displays, etc. ",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 16",
                text:
                  "Technologies should design content input and output methods to be agnostic to the specific hardware used, and provide application programming interfaces for supported hardware types such as keyboard and pointer so other hardware can effectively interact. Technologies should also emphasize the most hardware-neutral form of authoring feasible via more abstract events, and when providing hardware-specific features ensure that multiple types of hardware can be addressed.",
              },
            ],
          },
        ],
      },
      {
        id: "agnostic-input",
        handle: "Some user input depends on specific physical characteristics of users.",
        text:
          " For instance, early touch screens required users to have a physical, not a prosthetic, finger, and fingerprint readers also require users to have a fingerprint. Some users do not have the ability to interact with such devices.",
        num: "Input.1.6",
        successcriteria: [
          {
            id: "agnostic-input",
            num: "Input.1.6",
            handle: " ",
            text:
              "Technologies should not require specific user characteristics, and should provide alternate ways to accomplish tasks if such features are provided.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 17",
                text:
                  "See more for device independence and personalisation of inputs.",
              },
           ],
          },
        ],
      },
      {
        id: "meaningful-order",
        handle: "Authors can ensure a \"meaningful\" order of controls exists regardless of presentation.",
        text:
          "Much like the issue of navigation order deviating from display order mentioned above, control order is another frequent source of confusion for users when presentation has been customized.",
        num: "Input.1.6",
        successcriteria: [
          {
            id: "meaningful-order",
            num: "Input.1.6",
            handle: " ",
            text:
              "Technologies should provide ways for authors to define the intended order of user input controls.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 18",
                text:
                  "See more for the inportance of meaningful order.",
             },
           ],
          },
        ],
      },
    ],
  },
{
    principle: {
      handle: "FAST Checklist",
      text:
        "If technology provides user interaction features",
      num: "Interaction.1",
    },
    guidelines: [
      {
        id: "expose-object-type-to-a11y-api",
        num: "Interaction.1.1",
        handle: "For every user interface object type, the \"type\" of object can be exposed as a role to accessibility APIs",
        text:
          "A major way some users with disabilities access content is via assistive technologies, which provide various supplemental supports for interaction.",
        successcriteria: [
          {
            id: "expose-object-type-to-a11y-api",
            num: "Interaction.1.1",
            handle: " ",
            text:
              "Many assistive technologies interact with content primarily via accessibility APIs, which contain an abstract model of the content that includes information about each object. The \"type\" of an object is important for users to know how to use it, which is typically exposed to accessibility APIs as a \"role\". Technologies should ensure features have a defined type and, if necessary, document accessibility API mappings for the several APIs in use.",
            level:
              " ",
          },
        ],
      },
      {
        id: "provide-accessible-name",
        handle: "For every user interface object type, there is a clearly defined mechanism for authors to provide and / or user agents determines the \"accessible name\" for accessibility APIs.",
        text:
          "Accessibility APIs provide an \"accessible name\" for each object, which labels it for the user. The accessible name is frequently the label for a form control or the text alternative for an object.",
        num: "Interaction.1.2",
        successcriteria: [
          {
            id: "provide-accessible-name",
            num: "Interaction.1.2",
            handle: " ",
            text:
              "Technologies should define how the accessible name for each object type can be determined, and provide features to allow authors to set the accessible name.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 19",
                text:
                  "Here is some more about this FAST checkpoint.",
              },
            ],
          },
        ],
      },
      {
        id: "expose-states-props",
        handle: "For user interface objects that can have states, properties, or values, authors can set these and these can be exposed to accessibility APIs.",
        text:
          "Along with the role, many objects require information about properties, states, and values to be fully usable. ",
        num: "Interaction.1.3",
        successcriteria: [
          {
            id: "expose-states-props",
            num: "Interaction.1.3",
            handle: " ",
            text:
              " Properties are generally specific to object types and refine the type of object; states are also specific to object type and provide information about a changeable condition such as checked status of a checkbox or visibility status of an object. All objects have values as well, which is often the text content but can be from another source, such as the user input in a form control.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 20",
                text:
                  "Technologies should define ways for user agents to expose and authors to set properties, states, and values in accessibility APIs that are relevant to full understanding of and interaction with the object type.",
              },
            ],
          },
        ],
      },
      {
        id: "imperative-mechanism",
        handle: "When providing imperative mechanisms to implement technology features (e.g., scripts), authors can expose accessibility information to accessibility APIs.",
        text:
          "Declarative technologies provide structured semantic helping authors to define complete models for objects that can be exposed to accessibility APIs.",
        num: "Interaction.1.4",
        successcriteria: [
          {
            id: "imperative-mechanism",
            num: "Interaction.1.4",
            handle: " ",
            text:
              "Imperative technologies give more freedom to the author but provide less built-in accessibility semantics, and sometimes do not provide a way to address accessibility APIs at all.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 15",
                text:
                  "Technologies that use imperative mechanisms to author content need to provide full interfaces to accessibility APIs so authors can set the complete object model.",
              },
            ],
          },
        ],
      },
      {
        id: "help-widget",
        handle: "User can obtain help information about the widget.",
        text:
          "Especially with novel widgets, users sometimes need context-specific help to learn how to use the widget effectively.",
        num: "Interaction.1.5",
        successcriteria: [
          {
            id: "help-widget",
            num: "Interaction.1.5",
            handle: " ",
            text:
              "This information is only useful if users can easily find it. Therefore, technologies should provide a mechanism for help information to be directly associated with and reachable from the control.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 16",
                text:
                  "Technologies should design content input and output methods to be agnostic to the specific hardware used, and provide application programming interfaces for supported hardware types such as keyboard and pointer so other hardware can effectively interact. Technologies should also emphasize the most hardware-neutral form of authoring feasible via more abstract events, and when providing hardware-specific features ensure that multiple types of hardware can be addressed.",
              },
            ],
          },
        ],
      },
    ],
},
{
    principle: {
      handle: "FAST Checklist",
      text:
        "If technology provides defines document semantics",
      num: "Semantics.1",
    },
    guidelines: [
      {
        id: "authors-title",
        num: "Semantics.1.1",
        handle: "Authors can title Web pages",
        text:
          "Web content is classically exposed on \"pages\", each of which contains a different chunk of content. ",
        successcriteria: [
          {
            id: "authors-title",
            num: "Semantics.1.1",
            handle: " ",
            text:
              "To help users easily identify their location in a set of pages, and navigate to the correct page, each pages should have a title that is effectively metadata. Technologies should provide ways for authors to create unique titles for each page.",
            level:
              " ",
          },
        ],
      },
      {
        id: "title-sections",
        handle: "Authors can title sections of content.",
        text:
          "Web content is frequently divided into multiple sections, each of which has a distinct topic.",
        num: "Semantics.1.2",
        successcriteria: [
          {
            id: "title-sections",
            num: "Semantics.1.2",
            handle: " ",
            text:
              "Users navigate among these sections to find the content most relevant to their purpose, which is especially important for users of assistive technology that don't provide a two-dimensional view of the content.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 17",
                text:
                  "Technologies should provide a mechanism for authors to provide section titles to help users navigate and identify their location.",
              },
            ],
          },
        ],
      },
      {
        id: "support-understanding-of-abbreviations-idioms",
        handle: "Authors can support understanding of abbreviations / acronyms / initialisms, idioms, jargon, etc.",
        text:
          "Abbreviations, acronyms, initialisms, idioms, and jargon comprise usages of content that may not be familiar to all users, so it can be helpful for authors to provide supplemental information about meaning.",
        num: "Semantics.1.3",
        successcriteria: [
          {
            id: "support-understanding-of-abbreviations-idioms",
            num: "Semantics.1.3",
            handle: " ",
            text:
              "Abbreviations, acronyms, and initialisms are also often frequently pronounced different from their spelling, their special nature may not be obvious from pronunciation alone.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 18",
                text:
                  "Therefore technologies should allow authors to provide pronunciation and meaning guidance for these language features.",
              },
            ],
          },
        ],
      },
      {
        id: "support-pronunciation",
        handle: "Authors can support correct machine pronunciation of ambiguously spelled terms (e.g., in the phrase \"I am content with this content\" there are different correct pronunciations of the lexeme \"content\")",
        text:
          "Many languages have lexical features that can be pronounced different ways and that carry different meanings.",
        num: "Semantics.1.4",
        successcriteria: [
          {
            id: "support-pronunciation",
            num: "Semantics.1.4",
            handle: " ",
            text:
              "Context generally clarifies intent, but this can be less effective when assistive technologies use default pronunciations.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 19",
                text:
                  "Therefore technologies should provide features to allow authors to clarify pronunciation intent when needed.",
              },
            ],
          },
        ],
      },
      {
        id: "authors-identify-regions",
        handle: "Authors can identify regions of content, particularly the \"main\" region.",
        text:
          "Users of some assistive technologies experience content in a linear fashion, which can make it hard to find intended content that is located after several blocks of less relevant content such as navigation and sidebars.",
        num: "Semantics.1.5",
        successcriteria: [
          {
            id: "authors-identify-regions",
            num: "Semantics.1.5",
            handle: " ",
            text:
              "Other users have difficulty making sense of the page design due to complexity or the effects of magnification. Supporting users to find relevant content quickly is important to effective use, and the best way to do this is to provide ways to identify regions of content easily. This can be done via headings but region type semantics is also particularly helpful. The main content region is the most important for users to find quickly, but other regions such as navigation, headers, footers, sidebars, and subsections are also important.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 20",
                text:
                  "Technologies should provide features to allow authors to identify content regions.",
              },
            ],
          },
        ],
      },
      {
        id: "use-declarative-mechanisms",
        handle: "Declarative mechanisms (that have accessibility semantics pre-defined in the spec) are used to implement technology features whenever possible.",
        text:
          "Declarative technologies create sets of pre-defined semantics that authors use to structure content. Because the semantics are well-defined, they can be broadly supported across the entire tool chain, including by assistive technologies.",
        num: "Semantics.1.6",
        successcriteria: [
          {
            id: "use-declarative-mechanisms",
            num: "Semantics.1.6",
            handle: " ",
            text:
              "Imperative technologies, by contrast, don't define semantics in advance, which allows creation of new forms of content but requires authors to implement all aspects of the user experience, including accessibility aspects that are frequently overlooked.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 21",
                text:
                  "For this reason, technologies should provide declarative semantics for known feature types.",
              },
           ],
          },
        ],
      },
      {
        id: "express-relationships",
        handle: "There are unambiguous ways to express relationships between units of content, such as object nesting, ID referencing, etc.",
        text:
          "Providing an accessible user experience sometimes requires tools to combine the features of or support rapid navigation between multiple related objects.",
        num: "Semantics.1.7",
        successcriteria: [
          {
            id: "express-relationships",
            num: "Semantics.1.7",
            handle: " ",
            text:
              "Technologies should provide ways for authors to define these relationships clearly and unambiguously.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 22",
                text:
                  "See more for the importance expressing relationships.",
              },
           ],
          },
        ],
      },
      {
        id: "prefer-structural-semantics",
        handle: "Prefer structural semantics to presentational semantics.",
        text:
          "Prefer structural semantics to presentational semantics.",
        num: "Semantics.1.8",
        successcriteria: [
          {
            id: "prefer-structural-semantics",
            num: "Semantics.1.8",
            handle: " ",
            text:
              "Authors frequently use presentation to convey structure, yet when taken out of context this presentation is not meaningful to all users.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 23",
                text:
                  "Technologies should emphasize structural semantics over presentational semantics, and support styling on the basis of structure rather than inferring structure on the basis of style.",
              },
           ],
          },
        ],
      },
      {
        id: "mapping-relationships",
        handle: "When providing presentational semantics, they can be easily mapped to structural semantics, e.g., to support restyling or meaningful exposure to accessibility APIs.",
        text:
          "If technologies do provide presentational semantics, they should define clear mappings to existing structural semantics.",
        num: "Semantics.1.9",
        successcriteria: [
          {
            id: "mapping-relationships",
            num: "Semantics.1.9",
            handle: " ",
            text:
              "This will allow users to interact with content on the basis of implied structure.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 24",
                text:
                  "See more for the importance of mapping presentational semantics to structural relationships.",
              },
           ],
          },
        ],
      },
      {
        id: "support-authoring-use-cases",
        handle: "Support a comprehensive set of authoring use cases to minimize the need for alternative content. (e.g., don't make authors resort to text in images to get the style they want).",
        text:
          "Many accessibility problems in web content arise from authors attempting to work around limitations of the content language and using the technology in a way that it was not intended.",
        num: "Semantics.1.10",
        successcriteria: [
          {
            id: "support-authoring-use-cases",
            num: "Semantics.1.10",
            handle: " ",
            text:
              "Technologies should provide rich feature sets that allows authors to accomplish their goals without resort to inaccessible usages.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 25",
                text:
                  "See more for the importance of authoring use cases.",
              },
           ],
          },
        ],
      },
      {
        id: "semantics-allow-location",
        handle: "Semantics allow precise and replicable location information in the document to be determined.",
        text:
          "Finding a given location in a document is important for a variety of use cases.",
        num: "Semantics.1.11",
        successcriteria: [
          {
            id: "semantics-allow-location",
            num: "Semantics.1.11",
            handle: " ",
            text:
              " Users of some assistive technologies require the tool to navigate to the location for them and may be confused if the location is merely approximate.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 26",
                text:
                  "Technologies should enable precise location finding, not only by supporting unique IDs but by structuring the language such that unambiguous and replicable selectors can be used and shared.",
              },
           ],
          },
        ],
      },
      {
        id: "meaning-presentation",
        handle: "Semantics exist to convey meaning that is commonly conveyed via presentation.",
        text:
          "Meaning is conveyed by a variety of presentational attributes.",
        num: "Semantics.1.12",
        successcriteria: [
          {
            id: "meaning-presentation",
            num: "Semantics.1.12",
            handle: " ",
            text:
              " Separated blocks of text represent paragraphs, indented text represents quotes, short enlarged text indicates headings, bold text conveys emphasis, relative size indicates relative importance, etc.",
            level: " ",
            details: [
              {
                type: "note",
                handle: "Note 27",
                text:
                  "Technologies should define structural semantics for such features.",
              },
           ],
          },
        ],
      },
    ],
  },
];

export default new_fast;