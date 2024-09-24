---
title: Benutzeroberfläche
slug: Mozilla/Add-ons/WebExtensions/user_interface
l10n:
  sourceCommit: 5ce43ee5d0cf8f54ac07a2c3bc60fd9f77bcfcbf
---

{{AddonSidebar}}

Erweiterungen, die WebExtension-APIs verwenden, bieten mehrere Benutzeroberflächenoptionen, damit ihre Funktionalität dem Benutzer verfügbar gemacht werden kann. Eine Zusammenfassung dieser Optionen finden Sie unten, mit einer ausführlicheren Einführung zu jeder Benutzeroberflächenoption in diesem Abschnitt.

> [!NOTE]
> Für Ratschläge zur Verwendung dieser UI-Komponenten, um eine großartige Benutzererfahrung in Ihrer Erweiterung zu schaffen, lesen Sie bitte den Artikel zu den [Best Practices der Benutzererfahrung](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/).

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">UI-Option</th>
      <th scope="col">Beschreibung</th>
      <th scope="col">Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button"
          >Toolbar-Button</a
        >
        (Browseraktion)
      </td>
      <td>
        Ein Button in der Browser-Toolbar, der beim Klicken ein Ereignis an die
        Erweiterung sendet. Standardmäßig ist der Button in allen Tabs sichtbar.
      </td>
      <td>
        <img
          alt="Beispiel, das einen Toolbar-Button (Browseraktion) zeigt."
          src="browser-action.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        Toolbar-Button mit einem
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups"
          >Popup</a
        >
      </td>
      <td>
        Ein Popup auf einem Button in der Browser-Toolbar, das geöffnet wird, wenn der Button
        geklickt wird. Das Popup ist in einem HTML-Dokument definiert, das die Benutzerinteraktion
        verarbeitet.
      </td>
      <td>
        <img
          alt="Beispiel des Pop-ups auf einem Toolbar-Button"
          src="popup-shadow.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions"
          >Adressleisten-Button</a
        >
        (Seitenaktion)
      </td>
      <td>
        Ein Button in der Adressleiste des Browsers, der beim Klicken ein Ereignis an die
        Erweiterung sendet. Standardmäßig ist der Button in allen Tabs verborgen.
      </td>
      <td>
        <img
          alt="Beispiel, das einen Adressleisten-Button (Seitenaktion) zeigt"
          src="address_bar_button.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        Adressleisten-Button mit einem
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups"
          >Popup</a
        >
      </td>
      <td>
        Ein Popup auf einem Button in der Adressleiste des Browsers, das geöffnet wird, wenn der
        Button geklickt wird. Das Popup ist in einem HTML-Dokument definiert, das die
        Benutzerinteraktion verarbeitet.
      </td>
      <td>
        <img
          alt="Beispiel eines Popups auf dem Adressleisten-Button"
          src="page_action_popup.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items"
          >Kontextmenü-Eintrag</a
        >
      </td>
      <td>
        Menüeinträge, Kontrollkästchen und Optionsfelder in einem oder mehreren
        Kontextmenüs des Browsers. Zudem können Menüs durch das Hinzufügen von
        Trennlinien strukturiert werden. Wenn Menüeinträge angeklickt werden, wird ein Ereignis
        an die Erweiterung gesendet.
      </td>
      <td>
        <img
          alt="Beispiel von Kontextmenü-Einträgen, die von einer WebExtension hinzugefügt wurden, aus dem Kontextmenü-Demo-Beispiel"
          src="context_menu_example.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars"
          >Seitenleiste</a
        >
      </td>
      <td>
        <p>
          Ein HTML-Dokument, das neben einer Webseite angezeigt wird, mit der Möglichkeit für
          einzigartigen Inhalt pro Seite. Die Seitenleiste wird geöffnet, wenn die
          Erweiterung installiert ist, und berücksichtigt dann die
          Sichtbarkeitsauswahl des Benutzers für die Seitenleiste. Die Benutzerinteraktion innerhalb
          der Seitenleiste wird durch ihr HTML-Dokument verarbeitet.
        </p>
      </td>
      <td><img alt="Beispiel einer Seitenleiste" src="bookmarks-sidebar.png" /></td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages"
          >Optionsseite</a
        >
      </td>
      <td>
        Eine Seite, die es Ihnen ermöglicht, Präferenzen für Ihre Erweiterung zu definieren, die
        Ihre Benutzer ändern können. Der Benutzer kann auf diese Seite über den Add-ons-Manager
        des Browsers zugreifen.
      </td>
      <td>
        <img
          alt="Beispiel, das den Optionsseiteninhalt zeigt, der im Beispiel der Lieblingsfarben hinzugefügt wurde."
          src="options_page.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages"
          >Erweiterungsseite</a
        >
      </td>
      <td>
        Verwenden Sie in Ihrer Erweiterung enthaltene Webseiten, um Formulare, Hilfe oder
        jeglichen anderen benötigten Inhalt innerhalb von Fenstern oder Tabs bereitzustellen.
      </td>
      <td>
        <img
          alt="Beispiel einer einfachen gebündelten Seite, die als separates Panel angezeigt wird."
          src="bundled_page_as_panel_small.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Notifications"
          >Benachrichtigung</a
        >
      </td>
      <td>
        Vorübergehende Benachrichtigungen, die dem Benutzer über den
        Benachrichtigungsmechanismus des zugrunde liegenden Betriebssystems angezeigt werden. Sendet
        ein Ereignis an die Erweiterung, wenn der Benutzer auf eine Benachrichtigung klickt oder wenn
        eine Benachrichtigung schließt (entweder automatisch oder auf Wunsch des Benutzers).
      </td>
      <td>
        <img
          alt="Beispiel einer von einer Erweiterung ausgelösten Systembenachrichtigung"
          src="notify-shadowed.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Omnibox"
          >Adressleisten-Vorschlag</a
        >
      </td>
      <td>
        Bieten Sie benutzerdefinierte Vorschläge für die Adressleiste an, wenn der Benutzer ein
        Schlüsselwort eingibt.
      </td>
      <td>
        <img
          alt="Beispiel, das das Ergebnis der Anpassung der Adressleistensuche durch die firefox_code_search WebExtension zeigt."
          src="omnibox_example_small.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels"
          >Entwicklerwerkzeuge-Panel</a
        >
      </td>
      <td>
        Ein Tab mit einem zugeordneten HTML-Dokument, das in den Entwicklerwerkzeugen des Browsers
        angezeigt wird.
      </td>
      <td>
        <img
          alt="Beispiel eines benutzerdefinierten Panels in den Entwicklerwerkzeugen."
          src="developer_panel_tab.png"
        />
      </td>
    </tr>
  </tbody>
</table>

Die folgenden Anleitungen bieten Schritt-für-Schritt-Anleitungen zur Erstellung einiger dieser Benutzeroberflächenoptionen:

- [Richtlinien zur Barrierefreiheit](https://extensionworkshop.com/documentation/develop/build-an-accessible-extension/)
- [Hinzufügen eines Buttons zur Toolbar](/de/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)
- [Browserstile](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
- [Erweiterung der Entwicklerwerkzeuge](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)
- [Erstellen einer Einstellungsseite](/de/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page)
