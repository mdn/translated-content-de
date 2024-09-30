---
title: Arbeiten mit der Cookies-API
slug: Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Mit der Cookies-API haben Ihre Erweiterungen Zugriff auf Funktionen, die ähnlich denen sind, die von Websites zum Speichern und Lesen von Cookies verwendet werden. Die Funktionen der API ermöglichen es Erweiterungen, Informationen auf Basis einzelner Websites zu speichern. Wie wir im Beispiel sehen werden, könnten Sie Details zur Farbwahl eines Nutzers für eine Website speichern. Wenn der Nutzer die Website erneut besucht, kann Ihre Erweiterung die Funktion der API nutzen, um Informationen über die Cookies abzurufen und auszulesen, um die Wahl des Nutzers wiederherzustellen und auf die Website anzuwenden.

> [!NOTE]
> Das Verhalten von Cookies kann mithilfe der {{WebExtAPIRef("privacy.websites")}} `cookieConfig` Eigenschaft gesteuert werden. Diese Eigenschaft kontrolliert, ob und wie Cookies akzeptiert werden oder ob alle Cookies als Session-Cookies behandelt werden.

## Berechtigungen

Um die Cookies-API zu verwenden, müssen Sie sowohl die Berechtigung `"cookies"` als auch [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Protokolle, Domains oder Websites anfordern, auf die Sie zugreifen möchten, oder `"<all_urls>"` verwenden, um auf beliebige Protokolle und Domains zuzugreifen. Die Art und Weise, wie Sie Ihre Host-Berechtigungszeichenfolge definieren, beeinflusst die Fähigkeit Ihrer Erweiterung, Cookies zu lesen, zu schreiben und zu löschen.

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
      <td rowspan="2"><p>Host-Berechtigungszeichenfolge</p></td>
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

## Cookie-Speicher

Firefox bietet drei Arten von Cookie-Speichern:

- Der Standard-Speicher, der Cookies aus dem normalen Browsen speichert.
- Privat-Browsing-Modus-Speicher, der Cookies speichert, die während einer privaten Browsing-Sitzung erstellt wurden. Diese Speicher und alle darin enthaltenen Cookies werden entfernt, wenn das zugehörige private Browsing-Fenster geschlossen wird.

  > [!NOTE]
  > Nur sichtbar, wenn {{WebExtAPIRef("extension.isAllowedIncognitoAccess()")}} true zurückgibt. Safari unterstützt keinen Zugriff auf private Cookies.

- Container-Tab-Speicher, der Cookies für jede kontextuelle Identität in Firefox speichert. Kontextuelle Identitäten ermöglichen es einem Nutzer, mehrere Identitäten in einem Browserfenster zu verwalten. Das ist nützlich, wenn Sie z.B. ein geschäftliches und persönliches E-Mail-Konto bei Gmail haben. Mit kontextuellen Identitäten können Sie ein Tab mit einer persönlichen Identität und ein weiteres mit einer geschäftlichen Identität öffnen. Jedes Tab kann sich dann mit einem anderen Benutzernamen bei Google Mail anmelden, und die beiden Konten können nebeneinander genutzt werden. Weitere Informationen finden Sie im Mozilla-Wiki unter [Security/Contextual Identity Project/Containers](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers).

Sie können herausfinden, welche Cookie-Speicher verfügbar sind, indem Sie {{WebExtAPIRef("cookies.getAllCookieStores")}} verwenden, das ein Objekt mit der ID jedes Cookie-Speichers und einer Liste der IDs der Tabs zurückgibt, die jeden Cookie-Speicher verwenden.

## Beispiel-Durchführung

Die Beispielerweiterung [cookie-bg-picker](https://github.com/mdn/webextensions-examples/tree/main/cookie-bg-picker) erlaubt es ihrem Benutzer, eine Farbe und ein Symbol zu wählen, die auf den Hintergrund der Webseiten einer Website angewendet werden. Diese Entscheidungen werden pro Website mit {{WebExtAPIRef("cookies.set")}} gespeichert. Wenn eine Seite von der Website geöffnet wird, liest {{WebExtAPIRef("cookies.get")}} frühere Entscheidungen aus, und die Erweiterung wendet sie auf die Webseite an. Eine Zurücksetzungsoption entfernt das Hintergrundsymbol und die Farbe von der Website sowie den Cookie, indem {{WebExtAPIRef("cookies.remove")}} verwendet wird. Außerdem wird {{WebExtAPIRef("cookies.onChanged")}} verwendet, um Änderungen an Cookies zu überwachen und Details der Änderung an die Konsole zu senden.

Dieses Video zeigt die Erweiterung in Aktion:

{{EmbedYouTube("_rlp3eYqEMA")}}

Dieses Beispiel verwendet auch die Tabs- und Runtime-APIs, aber wir werden diese Funktionen nur nebenbei ansprechen.

### manifest.json

Das Schlüsselmerkmal der Datei [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/manifest.json) in Bezug auf die Verwendung der Cookies-API ist die Berechtigungsanfrage:

```json
  "permissions": [
      "tabs",
      "cookies",
      "<all_urls>"
],
```

Hier bittet die Erweiterung um Erlaubnis, die Cookies-API (`"cookies"`) mit allen Websites (`"<all_urls>"`) zu verwenden. Dies ermöglicht es der Erweiterung, die Wahl des Hintergrundfarben-Symbols für jede Website zu speichern.

### Skripte—bgpicker.js

Die Benutzeroberfläche der Erweiterung verwendet eine Toolbar-Schaltfläche ({{WebExtAPIRef("browserAction")}}), implementiert mit [bgpicker.html](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.html), die [bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js) aufruft. Zusammen ermöglichen diese es dem Benutzer, das Symbol auszuwählen und die Farbe einzugeben, die er als Hintergrund der Website anwenden möchte. Sie bieten auch die Möglichkeit, diese Einstellungen zu löschen.

[bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js) verarbeitet die Auswahl des Symbols oder die Eingabe einer Farbe für den Hintergrund in separaten Funktionen.

Um mit den Symbolschaltflächen umzugehen, sammelt das Skript zunächst alle im HTML-Datei verwendeten Klassennamen für die Schaltflächen:

```js
let bgBtns = document.querySelectorAll(".bg-container button");
```

Dann durchläuft es alle Schaltflächen, weist ihnen ihr Bild zu und erstellt einen onclick-Listener für jede Schaltfläche:

```js
for (let i = 0; i < bgBtns.length; i++) {
  let imgName = bgBtns[i].getAttribute('class');
  let bgImg = 'url(\'images/' + imgName + '.png\')';
  bgBtns[i].style.backgroundImage = bgImg;

  bgBtns[i].onclick = (e) => {
```

Wenn eine Schaltfläche geklickt wird, erhält ihre zugehörige Listener-Funktion den Klassennamen der Schaltfläche und dann den Symbolpfad, den sie dem Content-Skript der Seite ([updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js)) mit einer Nachricht übergibt. Das Inhaltskript wendet das Symbol dann auf den Hintergrund der Webseite an. Währenddessen speichert [bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js) die Details des Symbols, das auf den Hintergrund angewendet wurde, in einem Cookie:

```js
cookieVal.image = fullURL;
browser.cookies.set({
  url: tabs[0].url,
  name: "bgpicker",
  value: JSON.stringify(cookieVal),
});
```

Die Farbeinstellung wird auf ähnliche Weise behandelt, ausgelöst durch einen Listener im Farbeingabefeld. Wenn eine Farbe eingegeben wird, wird der aktive Tab entdeckt und die Farbauswahldetails mit einer Nachricht an das Inhaltskript der Seite gesendet, um auf den Webseitengrund angewendet zu werden. Dann wird die Farbauswahl dem Cookie hinzugefügt:

```js
    cookieVal.color = currColor;
    browser.cookies.set({
    url: tabs[0].url,
    name: "bgpicker",
    value: JSON.stringify(cookieVal)
```

Wenn der Benutzer auf die Zurücksetzen-Schaltfläche klickt, die der Variable reset zugewiesen wurde:

```js
let reset = document.querySelector(".color-reset button");
```

`reset.onclick` findet zuerst den aktiven Tab. Dann verwendet es die ID des Tabs, um dem Inhaltskript der Seite ([updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js)) eine Nachricht zu senden, um das Symbol und die Farbe von der Seite zu entfernen. Die Funktion löscht dann die Cookie-Werte (damit die alten Werte nicht mitgeführt und auf ein Cookie geschrieben werden, das für eine neue Symbol- oder Farbauswahl auf derselben Seite erstellt wurde), bevor sie das Cookie entfernt:

```js
    cookieVal = { image : '',
                  color : '' };
    browser.cookies.remove({
    url: tabs[0].url,
    name: "bgpicker"
```

Ebenfalls, damit Sie sehen können, was mit den Cookies passiert, berichten das Skript über alle Cookie-Änderungen in der Konsole:

```js
browser.cookies.onChanged.addListener((changeInfo) => {
  console.log(`Cookie changed:\n
    * Cookie: ${JSON.stringify(changeInfo.cookie)}\n
    * Cause: ${changeInfo.cause}\n
    * Removed: ${changeInfo.removed}`);
});
```

### Skripte—background.js

Ein Hintergrundskript ([background.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/background_scripts/background.js)) bietet die Möglichkeit, dass der Benutzer in einer früheren Sitzung ein Hintergrundsymbol und eine Farbe für die Website ausgewählt hat. Das Skript lauscht auf Änderungen im aktiven Tab, sei es das Wechseln zwischen Tabs durch den Benutzer oder das Ändern der URL der im Tab angezeigten Seite. Wenn eines dieser Ereignisse eintritt, wird `cookieUpdate()` aufgerufen. `cookieUpdate()` verwendet seinerseits `getActiveTab()`, um die ID des aktiven Tabs zu erhalten. Die Funktion kann dann überprüfen, ob ein Cookie für die Erweiterung basierend auf der URL des Tabs existiert:

```js
let gettingCookies = browser.cookies.get({
  url: tabs[0].url,
  name: "bgpicker",
});
```

Wenn das `"bgpicker"`-Cookie für die Website existiert, werden die Details des zuvor ausgewählten Symbols und der Farbe abgerufen und mit Nachrichten an das Inhaltskript [updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js) übergeben:

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

Zusätzlich zu den bisher erwähnten APIs bietet die Cookies-API auch {{WebExtAPIRef("cookies.getAll")}}. Diese Funktion nimmt das Details-Objekt, um Filter für die ausgewählten Cookies anzugeben und gibt ein Array von {{WebExtAPIRef("cookies.Cookie")}} Objekten zurück, die den Filterkriterien entsprechen.

## Mehr erfahren

Wenn Sie mehr über die Cookies-API erfahren möchten, sehen Sie sich folgende Ressourcen an:

- [Cookies API-Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies).
- Beispiel [List-cookies](https://github.com/mdn/webextensions-examples/tree/main/list-cookies).
