---
title: Benutzeroberfläche
slug: Mozilla/Add-ons/WebExtensions/user_interface
l10n:
  sourceCommit: 5ce43ee5d0cf8f54ac07a2c3bc60fd9f77bcfcbf
---

{{AddonSidebar}}

Erweiterungen, die WebExtension-APIs verwenden, bieten verschiedene Benutzeroberflächenoptionen, damit deren Funktionalität dem Benutzer zur Verfügung gestellt werden kann. Eine Zusammenfassung dieser Optionen finden Sie unten, mit einer detaillierteren Einführung zu jeder Benutzeroberflächenoption in diesem Abschnitt.

> [!NOTE]
> Für Ratschläge zur Verwendung dieser UI-Komponenten, um ein großartiges Benutzererlebnis in Ihrer Erweiterung zu schaffen, lesen Sie bitte den Artikel [Best Practices für Benutzererfahrung](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/).

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
        Eine Schaltfläche in der Browser-Symbolleiste, die beim Anklicken ein Ereignis an die Erweiterung sendet. Standardmäßig ist die Schaltfläche in allen Tabs sichtbar.
      </td>
      <td>
        <img
          alt="Beispiel einer Symbolleistenschaltfläche (Browseraktion)."
          src="browser-action.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        Symbolleistenschaltfläche mit einem
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups"
          >Popup</a
        >
      </td>
      <td>
        Ein Popup auf einer Schaltfläche in der Browser-Symbolleiste, das sich öffnet, wenn die Schaltfläche angeklickt wird. Das Popup wird in einem HTML-Dokument definiert, das die Benutzerinteraktion handhabt.
      </td>
      <td>
        <img
          alt="Beispiel eines Popups auf einer Symbolleistenschaltfläche"
          src="popup-shadow.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions"
          >Adressleistenschaltfläche</a
        >
        (Seitenaktion)
      </td>
      <td>
        Eine Schaltfläche in der Browser-Adressleiste, die beim Anklicken ein Ereignis an die Erweiterung sendet. Standardmäßig ist die Schaltfläche in allen Tabs versteckt.
      </td>
      <td>
        <img
          alt="Beispiel einer Adressleistenschaltfläche (Seitenaktion)"
          src="address_bar_button.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        Adressleistenschaltfläche mit einem
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups"
          >Popup</a
        >
      </td>
      <td>
        Ein Popup auf einer Schaltfläche in der Browser-Adressleiste, das sich öffnet, wenn die Schaltfläche angeklickt wird. Das Popup wird in einem HTML-Dokument definiert, das die Benutzerinteraktion handhabt.
      </td>
      <td>
        <img
          alt="Beispiel eines Popups auf der Adressleistenschaltfläche"
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
        Menüeinträge, Kontrollkästchen und Optionsfelder in einem oder mehreren Kontextmenüs des Browsers. Auch können Menüs durch das Hinzufügen von Trennzeichen strukturiert werden. Wenn Menüeinträge angeklickt werden, wird ein Ereignis an die Erweiterung gesendet.
      </td>
      <td>
        <img
          alt="Beispiel von Kontextmenüeinträgen, die von einer WebExtension hinzugefügt wurden, aus dem Kontextmenü-Demo-Beispiel"
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
          Ein HTML-Dokument, das neben einer Webseite angezeigt wird, mit der Option für einzigartige Inhalte pro Seite. Die Seitenleiste wird geöffnet, wenn die Erweiterung installiert ist, und folgt dann der Sichtbarkeitsauswahl des Benutzers für die Seitenleiste. Die Benutzerinteraktion innerhalb der Seitenleiste wird durch das HTML-Dokument gehandhabt.
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
        Eine Seite, die es Ihnen ermöglicht, Einstellungen für Ihre Erweiterung zu definieren, die Ihre Benutzer ändern können. Der Benutzer kann auf diese Seite über den Add-ons-Manager des Browsers zugreifen.
      </td>
      <td>
        <img
          alt="Beispiel, das den auf der Optionsseite hinzugefügten Inhalt im Beispiel der Lieblingsfarben zeigt."
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
        Verwenden Sie Webseiten, die in Ihrer Erweiterung enthalten sind, um Formulare, Hilfe oder andere erforderliche Inhalte innerhalb von Fenstern oder Tabs bereitzustellen.
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
        Vorübergehende Benachrichtigungen, die dem Benutzer über den Benachrichtigungsmechanismus des zugrunde liegenden Betriebssystems angezeigt werden. Ein Ereignis wird an die Erweiterung gesendet, wenn der Benutzer eine Benachrichtigung anklickt oder wenn eine Benachrichtigung geschlossen wird (entweder automatisch oder auf Anfrage des Benutzers).
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
          >Adressleisten-Vorschläge</a
        >
      </td>
      <td>
        Bieten Sie benutzerdefinierte Adressleisten-Vorschläge an, wenn der Benutzer ein Schlüsselwort eingibt.
      </td>
      <td>
        <img
          alt="Beispiel, das das Ergebnis der Anpassung der Adressleisten-Vorschläge durch die firefox_code_search-WebExtension zeigt."
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
        Ein Tab mit einem zugehörigen HTML-Dokument, das in den Entwicklerwerkzeugen des Browsers angezeigt wird.
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

Die folgenden Anleitungen bieten eine Schritt-für-Schritt-Anleitung zur Erstellung einiger dieser Benutzeroberflächenoptionen:

- [Richtlinien zur Barrierefreiheit](https://extensionworkshop.com/documentation/develop/build-an-accessible-extension/)
- [Schaltfläche zur Symbolleiste hinzufügen](/de/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)
- [Browserstile](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
- [Erweiterung der Entwicklerwerkzeuge](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)
- [Implementierung einer Einstellungsseite](/de/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page)
