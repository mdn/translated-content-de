---
title: Arbeiten mit der Cookies-API
slug: Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API
l10n:
  sourceCommit: b16d05494dd1252531451ebc3e995ea0f2a9007b
---

{{AddonSidebar}}

Mit der Cookies-API haben Ihre Erweiterungen Zugriff auf ähnliche Funktionen wie Websites zum Speichern und Lesen von Cookies. Die Funktionen der API ermöglichen es Erweiterungen, Informationen auf einer site-spezifischen Basis zu speichern. Wie wir im Beispiel sehen werden, könnten Sie beispielsweise die Wahl eines Benutzers für die Hintergrundfarbe einer Website speichern. Wenn der Benutzer die Website erneut besucht, kann Ihre Erweiterung die Fähigkeit der API nutzen, Details über Cookies zu erhalten und sie auszulesen, um die Wahl des Benutzers wiederherzustellen und auf die Website anzuwenden.

> [!NOTE]
> Das Verhalten von Cookies kann mit der {{WebExtAPIRef("privacy.websites")}}-Eigenschaft `cookieConfig` gesteuert werden. Diese Eigenschaft steuert, ob und wie Cookies angenommen werden oder ob alle Cookies als Sitzungs-Cookies behandelt werden.

## Berechtigungen

Um die Cookies-API zu nutzen, müssen Sie sowohl die Berechtigung `"cookies"` als auch [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Protokolle, Domains oder Websites anfordern, auf die Sie zugreifen möchten, oder `"<all_urls>"` verwenden, um auf jedes Protokoll und jede Domain zuzugreifen. Die Art und Weise, wie Sie Ihre Host-Berechtigungszeichenfolge definieren, beeinflusst die Fähigkeit Ihrer Erweiterung, Cookies zu lesen, zu schreiben und zu löschen.

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
      <td><p>Nicht sicher</p></td>
      <td><p>Sicher</p></td>
      <td><p>Nicht sicher</p></td>
    </tr>
    <tr>
      <td>
        <p><code>"http://*.example.com/"</code></p>
      </td>
      <td><p>Nein</p></td>
      <td><p>Haupt- und Subdomains, mit beliebigem Pfad</p></td>
      <td><p>Haupt- und Subdomains, mit beliebigem Pfad</p></td>
      <td><p>Haupt- und Subdomains, mit beliebigem Pfad</p></td>
    </tr>
    <tr>
      <td>
        <p><code>"https://www.example.com/"</code></p>
      </td>
      <td>
        <p>www.example.com oder .example.com mit beliebigem Pfad, aber keine Subdomains</p>
      </td>
      <td>
        <p>www.example.com oder .example.com mit beliebigem Pfad, aber keine Subdomains</p>
      </td>
      <td>
        <p>www.example.com oder .example.com mit beliebigem Pfad, aber keine Subdomains</p>
      </td>
      <td>
        <p>www.example.com oder .example.com mit beliebigem Pfad, aber keine Subdomains</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>"*://*.example.com/"</code></p>
      </td>
      <td><p>Haupt- und Subdomains, mit beliebigem Pfad</p></td>
      <td><p>Haupt- und Subdomains, mit beliebigem Pfad</p></td>
      <td><p>Haupt- und Subdomains, mit beliebigem Pfad</p></td>
      <td><p>Haupt- und Subdomains, mit beliebigem Pfad</p></td>
    </tr>
    <tr>
      <td>
        <p><code>"&#x3C;all_urls>"</code></p>
      </td>
      <td><p>Jede Domain mit beliebigem Pfad</p></td>
      <td><p>Jede Domain mit beliebigem Pfad</p></td>
      <td><p>Jede Domain mit beliebigem Pfad</p></td>
      <td><p>Jede Domain mit beliebigem Pfad</p></td>
    </tr>
  </tbody>
</table>

## Cookie-Speicher

Firefox stellt drei Arten von Cookie-Speichern bereit:

- Den Standard-Speicher, der Cookies aus dem normalen Browsing speichert.
- Speicher für den privaten Browsing-Modus, der Cookies speichert, die während einer privaten Browsing-Sitzung erstellt wurden. Diese Speicher und alle darin enthaltenen Cookies werden entfernt, wenn das zugehörige private Browsing-Fenster geschlossen wird.

  > [!NOTE]
  > Nur sichtbar, wenn {{WebExtAPIRef("extension.isAllowedIncognitoAccess()")}} true zurückgibt. Safari unterstützt keinen Zugriff auf private Cookies.

- Container-Tab-Speicher, die Cookies für jede kontextuelle Identität in Firefox speichern. Kontextuelle Identitäten ermöglichen es einem Benutzer, mehrere Identitäten innerhalb eines Browserfensters zu verwalten. Dies ist nützlich, wenn Sie beispielsweise ein Firmen- und ein privates E-Mail-Konto bei Gmail haben. Mit kontextuellen Identitäten können Sie einen Tab für eine persönliche Identität und einen zweiten Tab für eine geschäftliche Identität öffnen. Jeder Tab kann sich dann mit einem anderen Benutzernamen bei Google Mail anmelden, und die beiden Konten können nebeneinander verwendet werden. Für weitere Informationen siehe [Security/Contextual Identity Project/Containers](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers) im Mozilla-Wiki.

Sie können herausfinden, welche Cookie-Speicher verfügbar sind, indem Sie {{WebExtAPIRef("cookies.getAllCookieStores")}} verwenden, das ein Objekt mit der ID jedes Cookie-Speichers und einer Liste der ID der Tabs zurückgibt, die jeden Cookie-Speicher verwenden.

## Beispiel durchgehen

Das Beispiel der Erweiterung [cookie-bg-picker](https://github.com/mdn/webextensions-examples/tree/main/cookie-bg-picker) ermöglicht es dem Benutzer, eine Farbe und ein Symbol auszuwählen, die auf den Hintergrund der Webseiten einer Site angewendet werden. Diese Auswahl wird auf einer site-spezifischen Basis mit {{WebExtAPIRef("cookies.set")}} gespeichert. Wenn eine Seite von der Site geöffnet wird, liest {{WebExtAPIRef("cookies.get")}} frühere Auswahlen, und die Erweiterung wendet sie auf die Webseite an. Eine Reset-Option entfernt das Hintergrundsymbol und die Farbe von der Site sowie das Cookie, wobei {{WebExtAPIRef("cookies.remove")}} verwendet wird. Sie nutzt auch {{WebExtAPIRef("cookies.onChanged")}}, um Änderungen an Cookies zu verfolgen und Details der Änderung an die Konsole zu senden.

Dieses Video zeigt die Erweiterung in Aktion:

{{EmbedYouTube("_rlp3eYqEMA")}}

Dieses Beispiel verwendet auch die Tabs- und Runtime-APIs, aber wir werden diese Funktionen nur am Rande besprechen.

### manifest.json

Das Schlüsselmerkmal der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/manifest.json) Datei im Zusammenhang mit der Verwendung der Cookies-API ist die Berechtigungsanfrage:

```json
  "permissions": [
      "tabs",
      "cookies",
      "<all_urls>"
],
```

Hier fordert die Erweiterung die Berechtigung an, die Cookies-API (`"cookies"`) mit allen Websites (`"<all_urls>"`) zu verwenden. Dies ermöglicht es der Erweiterung, die Auswahl des Hintergrundfarbensymbols für jede Website zu speichern.

### Skripte—bgpicker.js

Die Benutzeroberfläche der Erweiterung verwendet einen Toolbar-Button ({{WebExtAPIRef("browserAction")}}), der mit [bgpicker.html](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.html) implementiert ist, der [bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js) aufruft. Zusammen ermöglichen diese dem Benutzer, das Symbol auszuwählen und die Farbe einzugeben, die sie als Hintergrund der Site anwenden möchten. Sie bieten auch die Möglichkeit, diese Einstellungen zu löschen.

[bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js) verarbeitet die Auswahl eines Symbols oder die Eingabe einer Farbe für den Hintergrund in separaten Funktionen.

Um mit den Symbol-Schaltflächen umzugehen, sammelt das Skript zunächst alle Klassennamen, die für die Schaltflächen in der HTML-Datei verwendet werden:

```js
let bgBtns = document.querySelectorAll(".bg-container button");
```

Dann durchläuft es alle Schaltflächen, weist ihnen ihr Bild zu und erstellt einen onclick-Listener für jede Schaltfläche:

```js
for (let i = 0; i < bgBtns.length; i++) {
  let imgName = bgBtns[i].getAttribute("class");
  let bgImg = "url('images/" + imgName + ".png')";
  bgBtns[i].style.backgroundImage = bgImg;

  bgBtns[i].onclick = (e) => {
```

Wenn eine Schaltfläche geklickt wird, ruft ihre entsprechende Listener-Funktion den Klassennamen der Schaltfläche und dann den Symbolpfad ab, den sie an das Inhalts-Skript der Seite ([updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js)) mittels einer Nachricht übergibt. Das Inhalts-Skript wendet dann das Symbol auf den Hintergrund der Webseite an. In der Zwischenzeit speichert [bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js) die Details des auf den Hintergrund angewendeten Symbols in einem Cookie:

```js
cookieVal.image = fullURL;
browser.cookies.set({
  url: tabs[0].url,
  name: "bgpicker",
  value: JSON.stringify(cookieVal),
});
```

Die Farbeinstellung wird auf ähnliche Weise verarbeitet, wobei ein Listener im Farbeingabefeld ausgelöst wird. Wenn eine Farbe eingegeben wird, wird der aktive Tab entdeckt und die Farbwahl-Details mittels einer Nachricht an das Inhalts-Skript der Seite gesendet, um auf den Webseitenshintergrund angewendet zu werden. Dann wird die Farbwahl dem Cookie hinzugefügt:

```js
cookieVal.color = currColor;
browser.cookies.set({
  url: tabs[0].url,
  name: "bgpicker",
  value: JSON.stringify(cookieVal),
});
```

Wenn der Benutzer die Zurücksetzen-Schaltfläche klickt, die der Variable reset zugewiesen wurde:

```js
let reset = document.querySelector(".color-reset button");
```

Sucht `reset.onclick` zunächst den aktiven Tab. Dann übergibt es, unter Verwendung der Tab-ID, eine Nachricht an das Inhalts-Skript der Seite ([updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js)), um das Symbol und die Farbe von der Seite zu entfernen. Die Funktion löscht dann die Cookie-Werte (damit die alten Werte nicht weitergetragen und auf ein Cookie geschrieben werden, das für eine neue Symbol- oder Farbauswahl auf derselben Seite erstellt wurde), bevor das Cookie entfernt wird:

```js
cookieVal = { image: "", color: "" };
browser.cookies.remove({
  url: tabs[0].url,
  name: "bgpicker",
});
```

Außerdem, damit Sie sehen können, was mit den Cookies passiert, gibt das Skript alle Änderungen an Cookies in der Konsole aus:

```js
browser.cookies.onChanged.addListener((changeInfo) => {
  console.log(`Cookie changed:\n
    * Cookie: ${JSON.stringify(changeInfo.cookie)}\n
    * Cause: ${changeInfo.cause}\n
    * Removed: ${changeInfo.removed}`);
});
```

### Skripte—background.js

Ein Hintergrund-Skript ([background.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/background_scripts/background.js)) sorgt dafür, dass der Benutzer in einer früheren Sitzung möglicherweise ein Hintergrundsymbol und eine Hintergrundfarbe für die Website ausgewählt hat. Das Skript hört auf Änderungen am aktiven Tab, entweder wenn der Benutzer zwischen Tabs wechselt oder die URL der in dem Tab angezeigten Seite ändert. Wenn eines dieser Ereignisse eintritt, wird `cookieUpdate()` aufgerufen. `cookieUpdate()` verwendet seinerseits `getActiveTab()`, um die aktive Tab-ID zu erhalten. Die Funktion kann dann überprüfen, ob ein Cookie für die Erweiterung existiert, unter Verwendung der URL des Tabs:

```js
let gettingCookies = browser.cookies.get({
  url: tabs[0].url,
  name: "bgpicker",
});
```

Wenn das Cookie `"bgpicker"` für die Website existiert, werden die Details des vorher ausgewählten Symbols und der Farbe abgerufen und mittels Nachrichten an das Inhalts-Skript [updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js) übergeben:

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

Zusätzlich zu den bisher erwähnten APIs bietet die Cookies-API auch {{WebExtAPIRef("cookies.getAll")}}. Diese Funktion nimmt das Detailobjekt, um Filter für die ausgewählten Cookies anzugeben, und gibt ein Array von {{WebExtAPIRef("cookies.Cookie")}}-Objekten zurück, die den Filterkriterien entsprechen.

## Mehr erfahren

Wenn Sie mehr über die Cookies-API erfahren möchten, sehen Sie sich folgende Ressourcen an:

- [Cookies API Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies).
- [List-cookies](https://github.com/mdn/webextensions-examples/tree/main/list-cookies) Beispiel.
