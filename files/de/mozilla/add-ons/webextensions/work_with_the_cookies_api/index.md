---
title: Arbeiten mit der Cookies API
slug: Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{AddonSidebar}}

Mit der Cookies-API haben Ihre Erweiterungen Zugriff auf Fähigkeiten, die denen ähneln, die von Websites zum Speichern und Lesen von Cookies verwendet werden. Die Funktionen der API ermöglichen es Erweiterungen, Informationen auf einer Webseite-bei-Webseite-Basis zu speichern. So könnten Sie, wie wir im Beispiel sehen werden, Details zur Auswahl einer Hintergrundfarbe eines Benutzers für eine Seite speichern. Dann, wenn der Benutzer die Seite erneut besucht, kann Ihre Erweiterung die Fähigkeit der API nutzen, Details zu Cookies abzurufen und sie zu lesen, um die Auswahl des Benutzers wiederherzustellen und sie auf die Website anzuwenden.

> [!NOTE]
> Das Verhalten von Cookies kann mit der {{WebExtAPIRef("privacy.websites")}} `cookieConfig` Eigenschaft gesteuert werden. Diese Eigenschaft kontrolliert, ob und wie Cookies akzeptiert werden oder ob alle Cookies als Sitzungscookies behandelt werden.

## Berechtigungen

Um die Cookies-API zu verwenden, müssen Sie sowohl die Berechtigung `"cookies"` als auch [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Protokolle, Domains oder Websites anfordern, auf die Sie zugreifen möchten, oder `"<all_urls>"` verwenden, um auf jedes Protokoll und jede Domain zuzugreifen. Die Art und Weise, wie Sie Ihre Host-Berechtigungszeichenfolge definieren, beeinflusst die Fähigkeit Ihrer Erweiterung, Cookies zu lesen, zu schreiben und zu löschen.

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
      <td><p>Unsicher</p></td>
      <td><p>Sicher</p></td>
      <td><p>Unsicher</p></td>
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

Firefox bietet drei Arten von Cookie-Stores:

- Der Standard-Store, der Cookies aus dem normalen Browsen speichert.
- Stores für den privaten Modus, die Cookies speichern, die während einer privaten Browsersitzung erstellt wurden. Diese Stores und alle enthaltenen Cookies werden entfernt, wenn das dazugehörige private Browserfenster geschlossen wird.

  > [!NOTE]
  > Nur sichtbar, wenn {{WebExtAPIRef("extension.isAllowedIncognitoAccess()")}} true ergibt. Safari unterstützt keinen Zugriff auf private Cookies.

- Stores für Container-Tabs, die Cookies für jede kontextuelle Identität in Firefox speichern. Kontextuelle Identitäten ermöglichen es einem Benutzer, mehrere Identitäten innerhalb eines Browserfensters zu verwalten. Dies ist nützlich, wenn Sie zum Beispiel ein Geschäfts- und ein privates E-Mail-Konto auf Gmail haben. Mit kontextuellen Identitäten können Sie einen Tab für eine persönliche Identität und einen zweiten Tab für eine geschäftliche Identität öffnen. Jeder Tab kann sich dann mit einem anderen Benutzernamen bei Google Mail anmelden, und die beiden Konten können nebeneinander verwendet werden. Weitere Informationen finden Sie im [Security/Contextual Identity Project/Containers](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers) im Mozilla-Wiki.

Sie können herausfinden, welche Cookie-Stores verfügbar sind, indem Sie {{WebExtAPIRef("cookies.getAllCookieStores")}} verwenden, das ein Objekt mit der ID jedes Cookie-Stores und einer Liste der IDs der Tabs, die jeden Cookie-Store verwenden, zurückgibt.

## Beispielanleitung

Die Beispielerweiterung [cookie-bg-picker](https://github.com/mdn/webextensions-examples/tree/main/cookie-bg-picker) ermöglicht es ihren Benutzern, eine Farbe und ein Symbol auszuwählen, die auf den Hintergrund von Webseiten einer Seite angewendet werden. Diese Auswahlmöglichkeiten werden auf Basis der Seite mithilfe von {{WebExtAPIRef("cookies.set")}} gespeichert. Wenn eine Seite der Site geöffnet wird, liest {{WebExtAPIRef("cookies.get")}} alle früheren Auswahlmöglichkeiten und die Erweiterung wendet sie auf die Webseite an. Eine Zurücksetzoption entfernt das Hintergrundsymbol und die Farbe von der Site sowie das Cookie durch die Verwendung von {{WebExtAPIRef("cookies.remove")}}. Es wird auch {{WebExtAPIRef("cookies.onChanged")}} verwendet, um Änderungen an Cookies zu überwachen und Details der Änderung an die Konsole zu senden.

Dieses Video zeigt die Erweiterung in Aktion:

{{EmbedYouTube("_rlp3eYqEMA")}}

Dieses Beispiel verwendet auch die APIs Tabs und Runtime, aber wir werden diese Funktionen nur beiläufig besprechen.

### manifest.json

Das Schlüsselelement der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/manifest.json) Datei in Bezug auf die Verwendung der Cookies API ist die Berechtigungsanforderung:

```json
  "permissions": [
      "tabs",
      "cookies",
      "<all_urls>"
],
```

Hier beantragt die Erweiterung die Erlaubnis, die Cookies-API (`"cookies"`) mit allen Websites (`"<all_urls>"`) zu verwenden. Dies ermöglicht es der Erweiterung, die Hintergrundfarbenauswahl eines Symbols für jede Website zu speichern.

### Skripte—bgpicker.js

Die Benutzeroberfläche der Erweiterung verwendet eine Toolbar-Taste ({{WebExtAPIRef("browserAction")}}), die mit [bgpicker.html](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.html) implementiert ist und [bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js) aufruft. Zusammen ermöglichen diese dem Benutzer, das Symbol auszuwählen und die Farbe einzugeben, die er als Hintergrund der Seite anwenden möchte. Sie bieten auch die Möglichkeit, diese Einstellungen zu löschen.

[bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js) behandelt die Auswahl eines Symbols oder die Eingabe einer Farbe für den Hintergrund in separaten Funktionen.

Um die Symbolschaltflächen zu verwalten, sammelt das Skript zunächst alle Klassennamen, die für die Schaltflächen im HTML-Dokument verwendet werden:

```js
let bgBtns = document.querySelectorAll(".bg-container button");
```

Anschließend durchläuft es alle Schaltflächen, weist ihnen ihr Bild zu und erstellt einen onclick-Listener für jede Schaltfläche:

```js
for (let i = 0; i < bgBtns.length; i++) {
  let imgName = bgBtns[i].getAttribute("class");
  let bgImg = `url('images/${imgName}.png')`;
  bgBtns[i].style.backgroundImage = bgImg;

  bgBtns[i].onclick = (e) => {
```

Wenn eine Schaltfläche geklickt wird, holt sich die zugehörige Listener-Funktion den Klassennamen der Schaltfläche und dann den Symbolpfad, den sie mit einer Nachricht an das Inhalts-Skript der Seite ([updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js)) übergibt. Das Inhalts-Skript wendet dann das Symbol auf den Hintergrund der Webseite an. Währenddessen speichert [bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js) die Details des auf den Hintergrund angewendeten Symbols in einem Cookie:

```js
cookieVal.image = fullURL;
browser.cookies.set({
  url: tabs[0].url,
  name: "bgpicker",
  value: JSON.stringify(cookieVal),
});
```

Die Farbeinstellung wird auf ähnliche Weise behandelt, ausgelöst durch einen Listener im Farbeingabefeld. Wenn eine Farbe eingegeben wird, wird der aktive Tab entdeckt und die Farbauswahl mit einer Nachricht an das Inhalts-Skript der Seite gesendet, um auf den Hintergrund der Webseite angewendet zu werden. Dann wird die Farbauswahl dem Cookie hinzugefügt:

```js
cookieVal.color = currColor;
browser.cookies.set({
  url: tabs[0].url,
  name: "bgpicker",
  value: JSON.stringify(cookieVal),
});
```

Wenn der Benutzer auf die Schaltfläche zum Zurücksetzen klickt, die der Variablen `reset` zugewiesen wurde:

```js
let reset = document.querySelector(".color-reset button");
```

findet `reset.onclick` zuerst den aktiven Tab. Dann, unter Verwendung der Tab-ID, wird eine Nachricht an das Inhalts-Skript der Seite ([updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js)) gesendet, um das Symbol und die Farbe von der Seite zu entfernen. Die Funktion löscht dann die Cookie-Werte (damit die alten Werte nicht weitergeführt und auf ein für eine neue Symbol- oder Farbauswahl auf derselben Seite erstelltes Cookie geschrieben werden), bevor sie das Cookie entfernt:

```js
cookieVal = { image: "", color: "" };
browser.cookies.remove({
  url: tabs[0].url,
  name: "bgpicker",
});
```

Auch damit Sie sehen können, was mit den Cookies passiert, berichtet das Skript über alle Änderungen an Cookies in der Konsole:

```js
browser.cookies.onChanged.addListener((changeInfo) => {
  console.log(`Cookie changed:\n
    * Cookie: ${JSON.stringify(changeInfo.cookie)}\n
    * Cause: ${changeInfo.cause}\n
    * Removed: ${changeInfo.removed}`);
});
```

### Skripte—background.js

Ein Hintergrundskript ([background.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/background_scripts/background.js)) bietet die Möglichkeit, dass der Benutzer in einer früheren Sitzung ein Hintergrundsymbol und eine Farbe für die Website ausgewählt hat. Das Skript hört auf Änderungen im aktiven Tab, entweder wenn der Benutzer zwischen Tabs wechselt oder wenn die URL der im Tab angezeigten Seite geändert wird. Wenn eines dieser Ereignisse eintritt, wird `cookieUpdate()` aufgerufen. `cookieUpdate()` verwendet wiederum `getActiveTab()`, um die ID des aktiven Tabs zu erhalten. Die Funktion kann dann überprüfen, ob für die Erweiterung ein Cookie existiert, indem die URL des Tabs verwendet wird:

```js
let gettingCookies = browser.cookies.get({
  url: tabs[0].url,
  name: "bgpicker",
});
```

Wenn das `"bgpicker"`-Cookie für die Website existiert, werden die Details des zuvor ausgewählten Symbols und der Farbe abgerufen und über Nachrichten an das Inhalts-Skript [updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js) übergeben:

```js
gettingCookies.then((cookie) => {
  if (cookie) {
    let cookieVal = JSON.parse(cookie.value);
    browser.tabs.sendMessage(tabs[0].id, { image: cookieVal.image });
    browser.tabs.sendMessage(tabs[0].id, { color: cookieVal.color });
  }
});
```

## Weitere Funktionen

Zusätzlich zu den bisher erwähnten APIs bietet die Cookies-API auch {{WebExtAPIRef("cookies.getAll")}}. Diese Funktion nimmt das Details-Objekt, um Filter für die ausgewählten Cookies anzugeben, und gibt ein Array von {{WebExtAPIRef("cookies.Cookie")}} Objekten zurück, die den Filterkriterien entsprechen.

## Mehr erfahren

Wenn Sie mehr über die Cookies-API erfahren möchten, schauen Sie sich folgende Ressourcen an:

- [Cookies API Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies).
- [List-cookies](https://github.com/mdn/webextensions-examples/tree/main/list-cookies) Beispiel.
