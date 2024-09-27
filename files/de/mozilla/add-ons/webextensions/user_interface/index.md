---
title: Benutzeroberfläche
slug: Mozilla/Add-ons/WebExtensions/user_interface
l10n:
  sourceCommit: 5ce43ee5d0cf8f54ac07a2c3bc60fd9f77bcfcbf
---

{{AddonSidebar}}

Erweiterungen, die WebExtension-APIs verwenden, bieten verschiedene Benutzeroberflächen-Optionen, damit deren Funktionalität den Benutzern zur Verfügung gestellt werden kann. Eine Zusammenfassung dieser Optionen wird unten bereitgestellt, mit einer detaillierteren Einführung zu jeder Benutzeroberflächen-Option in diesem Abschnitt.

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
        (browser action)
      </td>
      <td>
        Eine Schaltfläche auf der Browser-Symbolleiste, die ein Ereignis an die Erweiterung sendet, wenn sie angeklickt wird. Standardmäßig ist die Schaltfläche in allen Tabs sichtbar.
      </td>
      <td>
        <img
          alt="Beispiel einer Symbolleisten-Schaltfläche (browser action)."
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
        Ein Popup auf einer Schaltfläche in der Browser-Symbolleiste, das sich öffnet, wenn die Schaltfläche angeklickt wird. Das Popup wird in einem HTML-Dokument definiert, das die Benutzerinteraktion verarbeitet.
      </td>
      <td>
        <img
          alt="Beispiel eines Pop-ups auf einer Symbolleisten-Schaltfläche"
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
        (page action)
      </td>
      <td>
        Eine Schaltfläche in der Browser-Adressleiste, die ein Ereignis an die Erweiterung sendet, wenn sie angeklickt wird. Standardmäßig ist die Schaltfläche in allen Tabs verborgen.
      </td>
      <td>
        <img
          alt="Beispiel einer Adressleisten-Schaltfläche (page action)"
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
        Ein Popup auf einer Schaltfläche in der Browser-Adressleiste, das sich öffnet, wenn die Schaltfläche angeklickt wird. Das Popup wird in einem HTML-Dokument definiert, das die Benutzerinteraktion verarbeitet.
      </td>
      <td>
        <img
          alt="Beispiel eines Pop-ups auf der Adressleisten-Schaltfläche"
          src="page_action_popup.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items"
          >Kontextmenüeintrag</a
        >
      </td>
      <td>
        Menüeinträge, Kontrollkästchen und Optionsfelder in einem oder mehreren Kontextmenüs des Browsers. Menüs können auch durch Trennlinien strukturiert werden. Wenn Menüeinträge angeklickt werden, wird ein Ereignis an die Erweiterung gesendet.
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
          Ein HTML-Dokument, das neben einer Webseite angezeigt wird, mit der Option für einzigartigen Inhalt pro Seite. Die Seitenleiste wird geöffnet, wenn die Erweiterung installiert wird und befolgt dann die Sichtbarkeitseinstellungen der Benutzer. Die Benutzerinteraktion innerhalb der Seitenleiste wird durch das HTML-Dokument verarbeitet.
        </p>
      </td>
      <td><img alt="Beispiel einer Seitenleiste" src="bookmarks-sidebar.png" /></td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages"
          >Einstellungsseite</a
        >
      </td>
      <td>
        Eine Seite, auf der Sie Präferenzen für Ihre Erweiterung definieren können, die Ihre Benutzer ändern können. Der Benutzer kann auf diese Seite über den Add-ons-Manager des Browsers zugreifen.
      </td>
      <td>
        <img
          alt="Beispiel des Inhalts der Einstellungen-Seite, hinzugefügt im Beispiel für Lieblingsfarben."
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
        Verwenden Sie Webseiten, die in Ihrer Erweiterung enthalten sind, um Formulare, Hilfe oder andere benötigte Inhalte innerhalb von Fenstern oder Tabs bereitzustellen.
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
        Temporäre Benachrichtigungen, die dem Benutzer über den Benachrichtigungsmechanismus des zugrundeliegenden Betriebssystems angezeigt werden. Sendet ein Ereignis an die Erweiterung, wenn der Benutzer auf eine Benachrichtigung klickt oder wenn eine Benachrichtigung geschlossen wird (entweder automatisch oder auf Wunsch des Benutzers).
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
          >Adressleisten-Vorschlag</a
        >
      </td>
      <td>
        Bieten Sie benutzerdefinierte Adressleiste-Vorschläge an, wenn der Benutzer ein Schlüsselwort eingibt.
      </td>
      <td>
        <img
          alt="Beispiel, das das Ergebnis der Anpassung der Adressleisten-Vorschläge durch die WebExtension firefox_code_search zeigt."
          src="omnibox_example_small.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels"
          >Entwicklerwerkzeug-Panel</a
        >
      </td>
      <td>
        Ein Tab mit einem zugeordneten HTML-Dokument, das in den Entwicklerwerkzeugen des Browsers angezeigt wird.
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

Die folgenden Anleitungen bieten schrittweise Anweisungen zum Erstellen einiger dieser Benutzeroberflächen-Optionen:

- [Richtlinien zur Barrierefreiheit](https://extensionworkshop.com/documentation/develop/build-an-accessible-extension/)
- [Eine Schaltfläche zur Symbolleiste hinzufügen](/de/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)
- [Browserstile](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
- [Die Entwicklerwerkzeuge erweitern](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)
- [Eine Einstellungsseite implementieren](/de/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page)
