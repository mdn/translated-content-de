---
title: Arbeiten mit der Cookies-API
slug: Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API
l10n:
  sourceCommit: 7348ad4bf0fa7351041e9a3661c8a2bd2659d6e5
---

Mit der Cookies-API haben Ihre Erweiterungen Zugang zu Funktionen, die mit denen vergleichbar sind, die von Websites verwendet werden, um Cookies zu speichern und zu lesen. Die Funktionen der API ermöglichen es Erweiterungen, Informationen websitespezifisch zu speichern. So könnten Sie, wie wir im Beispiel sehen werden, die Auswahl der Hintergrundfarbe eines Nutzers für eine Website speichern. Wenn der Nutzer die Seite erneut besucht, kann Ihre Erweiterung die Fähigkeit der API nutzen, um Informationen über Cookies abzurufen und sie zu lesen, um die Auswahl des Nutzers wiederherzustellen und auf der Website anzuwenden.

> [!NOTE]
> Das Verhalten von Cookies kann über die {{WebExtAPIRef("privacy.websites")}} `cookieConfig` Eigenschaft gesteuert werden. Diese Eigenschaft steuert, ob und wie Cookies akzeptiert werden oder ob alle Cookies als Sitzungscookies behandelt werden.

## Berechtigungen

Um die Cookies-API zu verwenden, müssen Sie sowohl die Berechtigung `"cookies"` als auch [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Protokolle, Domains oder Websites anfordern, auf die Sie zugreifen oder `<all_urls>` verwenden möchten, um auf jedes Protokoll und jede Domain zuzugreifen. Die Art und Weise, wie Sie Ihren Host-Berechtigungs-String definieren, wirkt sich auf die Fähigkeit Ihrer Erweiterung aus, Cookies zu lesen, zu schreiben und zu löschen.

<table>
  <colgroup>
    <col />
    <col />
    <col />
    <col />
    <col />
  </colgroup>
  <tbody>
    <tr>
      <td rowspan="2"><p>Host-Berechtigung String</p></td>
      <td colspan="2"><p>Lesen</p></td>
      <td colspan="2"><p>Schreiben/Löschen</p></td>
    </tr>
    <tr>
      <td><p>Sicher</p></td>
      <td><p>Nicht-sicher</p></td>
      <td><p>Sicher</p></td>
      <td><p>Nicht-sicher</p></td>
    </tr>
    <tr>
      <td>
        <p><code>"http://*.example.com/"</code></p>
      </td>
      <td><p>Nein</p></td>
      <td><p>Haupt- und Subdomains, mit jedem Pfad</p></td>
      <td><p>Haupt- und Subdomains, mit jedem Pfad</p></td>
      <td><p>Haupt- und Subdomains, mit jedem Pfad</p></td>
    </tr>
    <tr>
      <td>
        <p><code>"https://www.example.com/"</code></p>
      </td>
      <td>
        <p>www.example.com oder .example.com mit jedem Pfad, aber keine Subdomains</p>
      </td>
      <td>
        <p>www.example.com oder .example.com mit jedem Pfad, aber keine Subdomains</p>
      </td>
      <td>
        <p>www.example.com oder .example.com mit jedem Pfad, aber keine Subdomains</p>
      </td>
      <td>
        <p>www.example.com oder .example.com mit jedem Pfad, aber keine Subdomains</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>"*://*.example.com/"</code></p>
      </td>
      <td><p>Haupt- und Subdomains, mit jedem Pfad</p></td>
      <td><p>Haupt- und Subdomains, mit jedem Pfad</p></td>
      <td><p>Haupt- und Subdomains, mit jedem Pfad</p></td>
      <td><p>Haupt- und Subdomains, mit jedem Pfad</p></td>
    </tr>
    <tr>
      <td>
        <p><code>"&#x3C;all_urls>"</code></p>
      </td>
      <td><p>Jede Domain mit jedem Pfad</p></td>
      <td><p>Jede Domain mit jedem Pfad</p></td>
      <td><p>Jede Domain mit jedem Pfad</p></td>
      <td><p>Jede Domain mit jedem Pfad</p></td>
    </tr>
  </tbody>
</table>

## Cookie-Stores

Firefox stellt drei Arten von Cookie-Stores bereit:

- Den Standardstore, der Cookies vom normalen Surfen speichert.
- Private Browsing Mode Stores, die Cookies speichern, die während einer privaten Browsersitzung erstellt wurden. Diese Stores und alle enthaltenen Cookies werden entfernt, wenn das zugehörige private Browserfenster geschlossen wird.

  > [!NOTE]
  > Nur sichtbar, wenn {{WebExtAPIRef("extension.isAllowedIncognitoAccess()")}} true zurückgibt. Safari unterstützt keinen Zugriff auf private Cookies.

- Container-Tab-Stores, die Cookies für jede kontextuelle Identität in Firefox speichern. Kontextuelle Identitäten ermöglichen es einem Nutzer, mehrere Identitäten innerhalb eines Browserfensters zu verwalten. Dies ist nützlich, wenn Sie beispielsweise sowohl ein Unternehmens- als auch ein persönliches E-Mail-Konto bei Gmail haben. Mit kontextuellen Identitäten können Sie einen Tab für eine persönliche Identität und einen zweiten für eine geschäftliche Identität öffnen. Jeder Tab kann dann mit einem anderen Benutzernamen bei Google Mail angemeldet werden, und die beiden Konten können nebeneinander verwendet werden. Weitere Informationen finden Sie im [Security/Contextual Identity Project/Containers](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers) im Mozilla-Wiki.

Sie können herausfinden, welche Cookie-Stores verfügbar sind, indem Sie {{WebExtAPIRef("cookies.getAllCookieStores")}} verwenden, das ein Objekt zurückgibt, das die ID jedes Cookie-Stores und eine Liste der IDs der Tabs enthält, die jeden Cookie-Store verwenden.

## Beispiel-Durchlauf

Die Beispiel-Erweiterung [cookie-bg-picker](https://github.com/mdn/webextensions-examples/tree/main/cookie-bg-picker) ermöglicht es dem Nutzer, eine Farbe und ein Symbol auszuwählen, die auf den Hintergrund der Webseiten einer Website angewendet werden. Diese Entscheidungen werden websitespezifisch mit {{WebExtAPIRef("cookies.set")}} gespeichert. Wenn eine Seite der Website geöffnet wird, liest {{WebExtAPIRef("cookies.get")}} frühere Entscheidungen, und die Erweiterung wendet diese auf die Webseite an. Eine Reset-Option entfernt das Hintergrundsymbol und die Farbe von der Website sowie das Cookie, indem {{WebExtAPIRef("cookies.remove")}} verwendet wird. Es wird auch {{WebExtAPIRef("cookies.onChanged")}} verwendet, um auf Änderungen der Cookies zu lauschen und Details der Änderung in der Konsole auszugeben.

Dieses Video zeigt die Erweiterung in Aktion:

{{EmbedYouTube("_rlp3eYqEMA")}}

Dieses Beispiel verwendet auch die Tabs- und Runtime-APIs, aber wir werden diese Funktionen nur am Rande besprechen.

### manifest.json

Die Hauptfunktion der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/manifest.json) Datei in Bezug auf die Verwendung der Cookies-API ist der Berechtigungsantrag:

```json
  "permissions": [
      "tabs",
      "cookies",
      "<all_urls>"
],
```

Hier bittet die Erweiterung um Erlaubnis, die Cookies-API (`"cookies"`) mit allen Websites (`"<all_urls>"`) zu verwenden. Dies ermöglicht der Erweiterung, die Auswahl des Hintergrundsymbols für jede Website zu speichern.

### Skripte—bgpicker.js

Die Benutzeroberfläche der Erweiterung verwendet eine Symbolleistenschaltfläche ({{WebExtAPIRef("browserAction")}}), die mit [bgpicker.html](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.html) implementiert ist und [bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js) aufruft. Zusammen ermöglichen sie es dem Nutzer, das Symbol auszuwählen und die Farbe einzugeben, die als Hintergrund der Website angewendet werden sollen. Sie bieten auch die Möglichkeit, diese Einstellungen zu löschen.

[bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js) behandelt die Auswahl des Symbols oder die Eingabe einer Farbe für den Hintergrund in separaten Funktionen.

Um die Symbolschaltflächen zu verwalten, sammelt das Skript zuerst alle Klassennamen, die für die Schaltflächen in der HTML-Datei verwendet werden. Dann durchläuft es alle Schaltflächen und weist ihnen ihr Bild zu und erstellt einen `onclick`-Listener für jede Schaltfläche:

```js
const bgBtns = document.querySelectorAll(".bg-container button");

for (const btn of bgBtns) {
  const imgName = btn.getAttribute("class");
  btn.style.backgroundImage = `url('images/${imgName}.png')`;

  btn.onclick = (e) => {
    // ...
  };
}
```

Wenn eine Schaltfläche angeklickt wird, ruft die zugehörige Listener-Funktion den Klassennamen der Schaltfläche und den Pfad des Symbols ab, den sie über eine Nachricht an das Inhaltsskript der Seite ([updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js)) übergibt. Das Inhaltsskript wendet dann das Symbol auf den Hintergrund der Webseite an. In der Zwischenzeit speichert [bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js) die Details des auf den Hintergrund angewendeten Symbols in einem Cookie:

```js
cookieVal.image = fullURL;
browser.cookies.set({
  url: tabs[0].url,
  name: "bgpicker",
  value: JSON.stringify(cookieVal),
});
```

Die Farbauswahl wird auf ähnliche Weise behandelt, durch einen Listener im Farbeingabefeld ausgelöst. Wenn eine Farbe eingegeben wird, wird der aktive Tab ermittelt und die Farbauswahldetails werden mittels einer Nachricht an das Inhaltsskript der Seite gesendet, um sie auf den Webseitenhintergrund anzuwenden. Dann wird die Farbauswahl dem Cookie hinzugefügt:

```js
cookieVal.color = currColor;
browser.cookies.set({
  url: tabs[0].url,
  name: "bgpicker",
  value: JSON.stringify(cookieVal),
});
```

Wenn der Nutzer auf die Reset-Schaltfläche klickt, die der Variablen "reset" zugewiesen wurde:

```js
let reset = document.querySelector(".color-reset button");
```

Sucht `reset.onclick` zuerst den aktiven Tab. Dann wird mit der ID des Tabs eine Nachricht an das Inhaltsskript der Seite ([updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js)) gesendet, um das Symbol und die Farbe von der Seite zu entfernen. Die Funktion löscht dann die Cookie-Werte (so dass die alten Werte nicht übernommen und in ein Cookie geschrieben werden, das für eine neue Symbol- oder Farbauswahl auf derselben Seite erstellt wurde), bevor das Cookie entfernt wird:

```js
cookieVal = { image: "", color: "" };
browser.cookies.remove({
  url: tabs[0].url,
  name: "bgpicker",
});
```

Außerdem, damit Sie sehen können, was mit den Cookies vor sich geht, berichtet das Skript über alle Änderungen der Cookies in der Konsole:

```js
browser.cookies.onChanged.addListener((changeInfo) => {
  console.log(`Cookie changed:\n
    * Cookie: ${JSON.stringify(changeInfo.cookie)}\n
    * Cause: ${changeInfo.cause}\n
    * Removed: ${changeInfo.removed}`);
});
```

### Skripte—background.js

Ein Hintergrundskript ([background.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/background_scripts/background.js)) bietet die Möglichkeit, dass der Nutzer in einer früheren Sitzung ein Hintergrundsymbol und eine Farbe für die Website ausgewählt hat. Das Skript lauscht auf Änderungen im aktiven Tab, entweder wenn der Nutzer zwischen Tabs wechselt oder die URL der im Tab angezeigten Seite ändert. Wenn eines dieser Ereignisse eintritt, wird `cookieUpdate()` aufgerufen. `cookieUpdate()` verwendet dann `getActiveTab()`, um die ID des aktiven Tabs zu erhalten. Die Funktion kann dann überprüfen, ob ein Cookie für die Erweiterung existiert, unter Verwendung der URL des Tabs:

```js
let gettingCookies = browser.cookies.get({
  url: tabs[0].url,
  name: "bgpicker",
});
```

Wenn das `"bgpicker"`-Cookie für die Website existiert, werden die Details des zuvor ausgewählten Symbols und der Farbe abgerufen und mittels Nachrichten an das Inhaltsskript [updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js) übermittelt:

```js
gettingCookies.then((cookie) => {
  if (cookie) {
    let cookieVal = JSON.parse(cookie.value);
    browser.tabs.sendMessage(tabs[0].id, { image: cookieVal.image });
    browser.tabs.sendMessage(tabs[0].id, { color: cookieVal.color });
  }
});
```

## Andere Funktionen

Zusätzlich zu den bisher erwähnten APIs bietet die Cookies-API auch {{WebExtAPIRef("cookies.getAll")}}. Diese Funktion nimmt das Detailobjekt, um Filter für die ausgewählten Cookies zu spezifizieren, und gibt ein Array von {{WebExtAPIRef("cookies.Cookie")}}-Objekten zurück, die die Filterkriterien erfüllen.

## Mehr erfahren

Wenn Sie mehr über die Cookies-API erfahren möchten, schauen Sie sich folgende Links an:

- [Cookies API Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies).
- [List-cookies](https://github.com/mdn/webextensions-examples/tree/main/list-cookies) Beispiel.
