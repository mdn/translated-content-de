---
title: Arbeiten mit der Cookies API
slug: Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Mit der Cookies API haben Ihre Erweiterungen Zugriff auf Fähigkeiten, die ähnlich denen sind, die von Websites zum Speichern und Lesen von Cookies verwendet werden. Die Funktionen der API ermöglichen es den Erweiterungen, Informationen auf einer site-spezifischen Basis zu speichern. So können Sie, wie wir im Beispiel sehen werden, die Details der Hintergrundfarbenauswahl eines Benutzers für eine Website speichern. Wenn der Benutzer die Website erneut besucht, kann Ihre Erweiterung die Fähigkeit der API nutzen, um Details zu Cookies zu erhalten und zu lesen, um die Wahl des Benutzers wiederherzustellen und auf die Website anzuwenden.

> [!NOTE]
> Das Verhalten von Cookies kann mit der {{WebExtAPIRef("privacy.websites")}} `cookieConfig`-Eigenschaft gesteuert werden. Diese Eigenschaft kontrolliert, ob und wie Cookies akzeptiert werden oder ob alle Cookies als Sitzungscookies behandelt werden.

## Berechtigungen

Um die Cookies API zu verwenden, müssen Sie sowohl die `"cookies"`-Erlaubnis als auch [Host-Erlaubnisse](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Protokolle, Domains oder Websites, auf die Sie zugreifen möchten, anfordern, oder `"<all_urls>"` verwenden, um auf jedes Protokoll und jede Domain zuzugreifen. Die Art und Weise, wie Sie Ihre Host-Erlaubniszeichenfolge definieren, beeinflusst die Fähigkeit Ihrer Erweiterung, Cookies zu lesen, zu schreiben und zu löschen.

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
      <td><p>Beliebige Domain mit beliebigem Pfad</p></td>
      <td><p>Beliebige Domain mit beliebigem Pfad</p></td>
      <td><p>Beliebige Domain mit beliebigem Pfad</p></td>
      <td><p>Beliebige Domain mit beliebigem Pfad</p></td>
    </tr>
  </tbody>
</table>

## Cookie-Speicher

Firefox bietet drei Arten von Cookie-Speicher:

- Den Standardspeicher, der Cookies aus dem normalen Browsen speichert.
- Speicher im privaten Browsing-Modus, der Cookies speichert, die während einer privaten Browsing-Sitzung erstellt wurden. Diese Speicher und alle enthaltenen Cookies werden entfernt, wenn das zugehörige private Browsing-Fenster geschlossen wird.

  > [!NOTE]
  > Nur sichtbar, wenn {{WebExtAPIRef("extension.isAllowedIncognitoAccess()")}} wahr zurückgibt. Safari unterstützt keinen Zugriff auf private Cookies.

- Speicher für Container-Tabs, die Cookies für jede kontextuelle Identität in Firefox speichern. Kontextuelle Identitäten ermöglichen es einem Benutzer, mehrere Identitäten innerhalb eines Browserfensters zu pflegen. Dies ist nützlich, wenn Sie z.B. ein Firmen- und ein persönliches E-Mail-Konto bei Gmail haben. Mit kontextuellen Identitäten können Sie einen Tab mit einer persönlichen Identität öffnen und einen zweiten Tab mit einer geschäftlichen Identität. Jeder Tab kann sich dann mit einem anderen Benutzernamen bei Google Mail anmelden, und die beiden Konten können nebeneinander verwendet werden. Weitere Informationen finden Sie im Mozilla-Wiki unter [Security/Contextual Identity Project/Containers](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers).

Sie können herausfinden, welche Cookie-Speicher verfügbar sind, indem Sie {{WebExtAPIRef("cookies.getAllCookieStores")}} verwenden, das ein Objekt mit der ID jedes Cookie-Speichers und einer Liste der IDs der Tabs, die jeden Cookie-Speicher verwenden, zurückgibt.

## Beispiel-Durchgang

Die Beispiel-Erweiterung [cookie-bg-picker](https://github.com/mdn/webextensions-examples/tree/main/cookie-bg-picker) ermöglicht es dem Benutzer, eine Farbe und ein Symbol auszuwählen, die auf den Hintergrund der Webseiten einer Site angewendet werden. Diese Auswahl wird pro Site gespeichert, indem {{WebExtAPIRef("cookies.set")}} verwendet wird. Wenn eine Seite der Site geöffnet wird, liest {{WebExtAPIRef("cookies.get")}} eine frühere Auswahl, und die Erweiterung wendet sie auf die Webseite an. Eine Reset-Option entfernt das Hintergrundsymbol und die Farbe von der Site sowie das Cookie, indem {{WebExtAPIRef("cookies.remove")}} verwendet wird. Es wird auch {{WebExtAPIRef("cookies.onChanged")}} verwendet, um auf Änderungen an Cookies zu hören und Details der Änderung an die Konsole zu senden.

Dieses Video zeigt die Erweiterung in Aktion:

{{EmbedYouTube("_rlp3eYqEMA")}}

Dieses Beispiel verwendet auch die Tabs und Runtime APIs, aber wir werden diese Funktionen nur am Rande besprechen.

### manifest.json

Das zentrale Merkmal der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/manifest.json)-Datei im Zusammenhang mit der Verwendung der Cookies API ist die Berechtigungsanfrage:

```json
  "permissions": [
      "tabs",
      "cookies",
      "<all_urls>"
],
```

Hier beantragt die Erweiterung die Berechtigung, die Cookies API (`"cookies"`) mit allen Websites (`"<all_urls>"`) zu verwenden. Dies ermöglicht der Erweiterung, die Wahl des Hintergrundfarbensymbols für jede Website zu speichern.

### Scripts—bgpicker.js

Die Benutzeroberfläche der Erweiterung verwendet eine Toolbar-Schaltfläche ({{WebExtAPIRef("browserAction")}}), die mit [bgpicker.html](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.html) implementiert ist und [bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js) aufruft. Zusammen ermöglichen sie dem Benutzer, das Symbol auszuwählen und die Farbe einzugeben, die sie als Hintergrund der Site anwenden möchten. Sie bieten auch die Option, diese Einstellungen zu löschen.

[bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js) behandelt die Auswahl des Symbols oder die Eingabe einer Farbe für den Hintergrund in separaten Funktionen.

Um die Symbolschaltflächen zu behandeln, sammelt das Script zuerst alle Klassennamen, die für die Schaltflächen in der HTML-Datei verwendet werden:

```js
let bgBtns = document.querySelectorAll(".bg-container button");
```

Es geht dann alle Schaltflächen durch und weist ihnen ihr Bild zu und erstellt einen onclick-Listener für jede Schaltfläche:

```js
for (let i = 0; i < bgBtns.length; i++) {
  let imgName = bgBtns[i].getAttribute('class');
  let bgImg = 'url(\'images/' + imgName + '.png\')';
  bgBtns[i].style.backgroundImage = bgImg;

  bgBtns[i].onclick = (e) => {
```

Wenn eine Schaltfläche geklickt wird, erhält ihre entsprechende Listener-Funktion den Schaltflächennamen und anschließend den Symbolpfad, den sie dem Inhaltsscript der Seite ([updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js)) mit einer Nachricht übergibt. Das Inhaltsscript wendet dann das Symbol auf den Hintergrund der Webseite an. In der Zwischenzeit speichert [bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js) die Details des auf den Hintergrund angewendeten Symbols in einem Cookie:

```js
cookieVal.image = fullURL;
browser.cookies.set({
  url: tabs[0].url,
  name: "bgpicker",
  value: JSON.stringify(cookieVal),
});
```

Die Farbeinstellung wird auf ähnliche Weise gehandhabt, ausgelöst durch einen Listener auf das Farbeingabefeld. Wenn eine Farbe eingegeben wird, wird der aktive Tab ermittelt und die Farbauswahldetails über eine Nachricht an das Inhaltsscript der Seite gesendet, damit sie auf den Hintergrund der Webseite angewendet werden. Dann wird die Farbauswahl dem Cookie hinzugefügt:

```js
    cookieVal.color = currColor;
    browser.cookies.set({
    url: tabs[0].url,
    name: "bgpicker",
    value: JSON.stringify(cookieVal)
```

Wenn der Benutzer die Reset-Schaltfläche klickt, die der Variable reset zugewiesen wurde:

```js
let reset = document.querySelector(".color-reset button");
```

`reset.onclick` findet zuerst den aktiven Tab. Dann sendet es, unter Verwendung der Tab-ID, eine Nachricht an das Inhaltsscript der Seite ([updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js)), um es dazu zu bringen, das Symbol und die Farbe von der Seite zu entfernen. Die Funktion löscht dann die Cookie-Werte (damit die alten Werte nicht vorwärts getragen und auf ein Cookie geschrieben werden, das für eine neue Symbol- oder Farbauswahl auf derselben Seite erstellt wurde), bevor das Cookie entfernt wird:

```js
    cookieVal = { image : '',
                  color : '' };
    browser.cookies.remove({
    url: tabs[0].url,
    name: "bgpicker"
```

Außerdem, damit Sie sehen können, was mit den Cookies passiert, berichtet das Script über alle Änderungen an Cookies in der Konsole:

```js
browser.cookies.onChanged.addListener((changeInfo) => {
  console.log(`Cookie changed:\n
    * Cookie: ${JSON.stringify(changeInfo.cookie)}\n
    * Cause: ${changeInfo.cause}\n
    * Removed: ${changeInfo.removed}`);
});
```

### Scripts—background.js

Ein Hintergrundscript ([background.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/background_scripts/background.js)) bietet die Möglichkeit, dass der Benutzer ein Hintergrundsymbol und eine Farbe für die Website in einer früheren Sitzung gewählt hat. Das Script hört auf Änderungen im aktiven Tab, entweder wenn der Benutzer zwischen Tabs wechselt oder die URL der im Tab angezeigten Seite ändert. Wenn eines dieser Ereignisse eintritt, wird `cookieUpdate()` aufgerufen. `cookieUpdate()` verwendet wiederum `getActiveTab()`, um die ID des aktiven Tabs zu erhalten. Die Funktion kann dann überprüfen, ob ein Cookie für die Erweiterung existiert, indem die URL des Tabs verwendet wird:

```js
let gettingCookies = browser.cookies.get({
  url: tabs[0].url,
  name: "bgpicker",
});
```

Wenn das "bgpicker"-Cookie für die Website existiert, werden die Details des zuvor ausgewählten Symbols und der Farbe abgerufen und über Nachrichten an das Inhaltsscript [updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js) übergeben:

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

Zusätzlich zu den bereits erwähnten APIs bietet die Cookies API auch {{WebExtAPIRef("cookies.getAll")}}. Diese Funktion nimmt das Detailobjekt, um Filter für die ausgewählten Cookies zu spezifizieren, und gibt ein Array von {{WebExtAPIRef("cookies.Cookie")}}-Objekten zurück, die den Filterkriterien entsprechen.

## Weitere Informationen

Wenn Sie mehr über die Cookies API erfahren möchten, schauen Sie sich folgendes an:

- [Cookies API Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies).
- [List-cookies](https://github.com/mdn/webextensions-examples/tree/main/list-cookies) Beispiel.
