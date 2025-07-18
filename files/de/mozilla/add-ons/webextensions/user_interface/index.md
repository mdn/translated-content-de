---
title: Benutzeroberfläche
slug: Mozilla/Add-ons/WebExtensions/user_interface
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Erweiterungen, die WebExtension-APIs nutzen, bieten mehrere Möglichkeiten der Benutzeroberfläche, damit ihre Funktionalität dem Benutzer zur Verfügung gestellt werden kann. Eine Übersicht dieser Optionen wird unten bereitgestellt, mit einer detaillierteren Einführung zu jeder Benutzeroberflächenoption in diesem Abschnitt.

> [!NOTE]
> Für Ratschläge zur Nutzung dieser UI-Komponenten zur Erstellung eines großartigen Benutzererlebnisses in Ihrer Erweiterung, lesen Sie bitte den Artikel [Best Practices für Benutzererfahrung](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/).

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
          >Symbolleisten-Schaltfläche</a
        >
        (Browseraktion)
      </td>
      <td>
        Eine Schaltfläche in der Browser-Symbolleiste, die ein Ereignis an die
        Erweiterung sendet, wenn darauf geklickt wird. Standardmäßig ist die Schaltfläche in allen Tabs sichtbar.
      </td>
      <td>
        <img
          alt="Beispiel für eine Symbolschaltfläche (Browseraktion)."
          src="browser-action.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        Symbolleisten-Schaltfläche mit einem
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups"
          >Popup</a
        >
      </td>
      <td>
        Ein Popup an einer Schaltfläche in der Browser-Symbolleiste, das geöffnet wird, wenn die Schaltfläche angeklickt wird. Das Popup wird in einem HTML-Dokument definiert, das die Benutzerinteraktion behandelt.
      </td>
      <td>
        <img
          alt="Beispiel des Pop-ups an einer Symbolleistenschaltfläche"
          src="popup-shadow.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions"
          >Adressleisten-Schaltfläche</a
        >
        (Seitenaktion)
      </td>
      <td>
        Eine Schaltfläche in der Adressleiste des Browsers, die ein Ereignis an die Erweiterung sendet, wenn darauf geklickt wird. Standardmäßig ist die Schaltfläche in allen Tabs verborgen.
      </td>
      <td>
        <img
          alt="Beispiel einer Adressleisten-Schaltfläche (Seitenaktion)"
          src="address_bar_button.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        Adressleisten-Schaltfläche mit einem
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups"
          >Popup</a
        >
      </td>
      <td>
        Ein Popup an einer Schaltfläche in der Adressleiste des Browsers, das geöffnet wird, wenn die Schaltfläche angeklickt wird. Das Popup wird in einem HTML-Dokument definiert, das die Benutzerinteraktion behandelt.
      </td>
      <td>
        <img
          alt="Beispiel eines Popups an der Adressleisten-Schaltfläche"
          src="page_action_popup.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items"
          >Kontextmenüelement</a
        >
      </td>
      <td>
        Menüpunkte, Kontrollkästchen und Optionsfelder in einem oder mehreren Kontextmenüs des Browsers. Menüs können auch durch Hinzufügen von Trennlinien strukturiert werden. Wenn Menüpunkte angeklickt werden, wird ein Ereignis an die Erweiterung gesendet.
      </td>
      <td>
        <img
          alt="Beispiel von Kontextmenüelementen, die durch eine WebExtension hinzugefügt wurden, aus dem Kontextmenü-Demo-Beispiel"
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
          Ein HTML-Dokument, das neben einer Webseite angezeigt wird, mit der Möglichkeit für einzigartige Inhalte pro Seite. Die Seitenleiste wird beim Installieren der Erweiterung geöffnet und folgt dann der Sichtbarkeitsauswahl des Benutzers für die Seitenleiste. Benutzerinteraktionen innerhalb der Seitenleiste werden durch ihr HTML-Dokument behandelt.
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
        Eine Seite, die es ermöglicht, Präferenzen für Ihre Erweiterung zu definieren, die Ihre Benutzer ändern können. Der Benutzer kann auf diese Seite über den Add-ons-Manager des Browsers zugreifen.
      </td>
      <td>
        <img
          alt="Beispiel der auf der Optionsseite hinzugefügten Inhalte im Beispiel der Lieblingsfarben."
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
        Verwenden Sie in Ihrer Erweiterung enthaltene Webseiten, um Formulare, Hilfe oder andere erforderliche Inhalte bereitzustellen, innerhalb von Fenstern oder Tabs.
      </td>
      <td>
        <img
          alt="Beispiel einer einfachen gebündelten Seite, die als abgetrenntes Panel angezeigt wird."
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
        Kurzlebige Benachrichtigungen, die dem Benutzer über den Benachrichtigungsmechanismus des zugrunde liegenden Betriebssystems angezeigt werden. Ein Ereignis wird an die Erweiterung gesendet, wenn der Benutzer auf eine Benachrichtigung klickt oder wenn eine Benachrichtigung geschlossen wird (entweder automatisch oder auf Wunsch des Benutzers).
      </td>
      <td>
        <img
          alt="Beispiel einer durch eine Erweiterung ausgelösten Systembenachrichtigung"
          src="notify-shadowed.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Omnibox"
          >Adressleistenvorschlag</a
        >
      </td>
      <td>
        Bieten Sie benutzerdefinierte Adressleistenvorschläge an, wenn der Benutzer ein Schlüsselwort eingibt.
      </td>
      <td>
        <img
          alt="Beispiel, das das Ergebnis der Anpassung der Adressleistenvorschläge durch das firefox_code_search WebExtension zeigt."
          src="omnibox_example_small.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels"
          >Entwicklertools-Panel</a
        >
      </td>
      <td>
        Ein Tab mit einem zugeordneten HTML-Dokument, das in den Entwicklertools des Browsers angezeigt wird.
      </td>
      <td>
        <img
          alt="Beispiel eines benutzerdefinierten Panels in den Entwicklertools."
          src="developer_panel_tab.png"
        />
      </td>
    </tr>
  </tbody>
</table>

Die folgenden Anleitungen bieten Schritt-für-Schritt-Anleitungen zur Erstellung einiger dieser Benutzeroberflächenoptionen:

- [Barrierefreiheitsrichtlinien](https://extensionworkshop.com/documentation/develop/build-an-accessible-extension/)
- [Hinzufügen einer Schaltfläche zur Symbolleiste](/de/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)
- [Browserstile](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
- [Erweiterung der Entwicklertools](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)
- [Implementierung einer Einstellungsseite](/de/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page)
