---
title: Benutzeroberfläche
slug: Mozilla/Add-ons/WebExtensions/user_interface
l10n:
  sourceCommit: 3116241f515352d336d2edb460cebfe99d43aea7
---

Erweiterungen, die WebExtension APIs verwenden, stehen mehrere Optionen für die Benutzeroberfläche zur Verfügung, um ihre Funktionen für Benutzer zugänglich zu machen. Die folgende Tabelle gibt einen Überblick über diese Optionen und stellt jede davon kurz vor.

> [!NOTE]
> Hinweise dazu, wie Sie mit diesen UI-Komponenten eine gute Benutzererfahrung für Ihre Erweiterung schaffen, finden Sie im Artikel [Best Practices für die Benutzererfahrung](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/).

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
          >Symbolleistenschaltfläche</a
        >
        (browser action)
      </td>
      <td>
        Eine Schaltfläche, die Benutzer an die Browser-Symbolleiste anheften können und die beim Anklicken ein Ereignis an die
        Erweiterung sendet. Standardmäßig ist die Schaltfläche in allen Tabs sichtbar.
      </td>
      <td>
        <img alt="Beispiel für eine Symbolleistenschaltfläche (browser action)." src="browser-action.png" />
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
        Ein Popup zu einer Schaltfläche, die Benutzer an die Browser-Symbolleiste anheften können. Es öffnet sich, wenn die
        Schaltfläche angeklickt wird. Das Popup wird in einem HTML-Dokument definiert, das die Benutzerinteraktion
        verarbeitet.
      </td>
      <td>
        <img alt="Beispiel für ein Popup zu einer Symbolleistenschaltfläche" src="popup-shadow.png" />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions"
          >Schaltfläche in der Adressleiste</a
        >
        (page action)
      </td>
      <td>
        Eine Schaltfläche in der Adressleiste des Browsers, die beim Anklicken ein Ereignis an die
        Erweiterung sendet. Standardmäßig ist die Schaltfläche in allen Tabs ausgeblendet.
      </td>
      <td>
        <img alt="Beispiel für eine Schaltfläche in der Adressleiste (page action)" src="address_bar_button.png" />
      </td>
    </tr>
    <tr>
      <td>
        Schaltfläche in der Adressleiste mit einem
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups"
          >Popup</a
        >
      </td>
      <td>
        Ein Popup zu einer Schaltfläche in der Adressleiste des Browsers, das sich öffnet, wenn die
        Schaltfläche angeklickt wird. Das Popup wird in einem HTML-Dokument definiert, das
        die Benutzerinteraktion verarbeitet.
      </td>
      <td>
        <img alt="Beispiel für ein Popup zu einer Schaltfläche in der Adressleiste" src="page_action_popup.png" />
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
        Menüeinträge, Kontrollkästchen und Optionsfelder in einem oder mehreren
        Kontextmenüs des Browsers. Menüs können außerdem durch Trennlinien strukturiert werden.
        Wenn Menüeinträge angeklickt werden, wird ein Ereignis an die Erweiterung gesendet.
      </td>
      <td>
        <img alt="Beispiel für Kontextmenüeinträge aus dem Beispiel menu-demo" src="context_menu_example.png" />
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
          Ein HTML-Dokument, das neben einer Webseite angezeigt wird und für jede Seite
          unterschiedliche Inhalte bereitstellen kann. Die Seitenleiste wird bei der Installation
          der Erweiterung geöffnet. Danach richtet sich ihre Sichtbarkeit nach der Auswahl der Benutzer.
          Benutzerinteraktionen innerhalb der Seitenleiste werden von ihrem HTML-Dokument verarbeitet.
        </p>
      </td>
      <td>
        <img alt="Beispiel für eine Seitenleiste aus dem Beispiel annotate-page" src="bookmarks-sidebar.png" />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages"
          >Optionsseite</a
        >
      </td>
      <td>
        Eine Seite, auf der Sie Einstellungen für Ihre Erweiterung festlegen können,
        die Benutzer ändern können. Benutzer können über die Add-on-Verwaltung des Browsers
        auf diese Seite zugreifen.
      </td>
      <td>
        <img alt="Beispiel für den Inhalt einer Optionsseite aus dem Beispiel favourite-colour in der Add-on-Verwaltung von Firefox." src="options_page.png" />
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
        Verwenden Sie Webseiten, die in Ihrer Erweiterung enthalten sind, um Formulare,
        Hilfetexte oder andere benötigte Inhalte in Fenstern oder Tabs bereitzustellen.
      </td>
      <td>
        <img alt="Beispiel für eine einfache mitgelieferte Seite, die als eigenständiges Panel angezeigt wird." src="bundled_page_as_panel_small.png" />
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
        Vorübergehende Benachrichtigungen, die Benutzern über den Benachrichtigungsmechanismus
        des zugrunde liegenden Betriebssystems angezeigt werden. Beim Anklicken einer Benachrichtigung
        oder wenn sie geschlossen wird – automatisch oder auf Wunsch der Benutzer – wird ein Ereignis
        an die Erweiterung gesendet.
      </td>
      <td>
        <img alt="Beispiel für eine von einer Erweiterung ausgelöste Systembenachrichtigung unter macOS" src="notify-shadowed.png" />
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
        Bieten Sie eigene Vorschläge in der Adressleiste an, wenn Benutzer ein Schlüsselwort eingeben.
      </td>
      <td>
        <img alt="Beispiel für Adressleistenvorschläge aus dem Beispiel firefox-code-search." src="omnibox_example_small.png" />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels"
          >Panel in den Entwicklerwerkzeugen</a
        >
      </td>
      <td>
        Ein Tab mit einem zugehörigen HTML-Dokument, der in den Entwicklerwerkzeugen
        des Browsers angezeigt wird.
      </td>
      <td>
        <img alt="Beispiel für ein benutzerdefiniertes Panel namens My Panel in den Firefox-Entwicklerwerkzeugen." src="developer_panel_tab.png" />
      </td>
    </tr>
  </tbody>
</table>

Die folgenden Anleitungen zeigen Schritt für Schritt, wie Sie einige dieser Optionen für die Benutzeroberfläche erstellen:

- [Richtlinien zur Barrierefreiheit](https://extensionworkshop.com/documentation/develop/build-an-accessible-extension/)
- [Eine Schaltfläche zur Symbolleiste hinzufügen](/de/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)
- [Browser-Stile](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
- [Die Entwicklerwerkzeuge erweitern](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)
- [Eine Einstellungsseite implementieren](/de/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page)
