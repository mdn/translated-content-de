---
title: Arbeiten mit der Cookies-API
slug: Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Mit der Cookies-API haben Ihre Erweiterungen Zugriff auf Funktionen, die ähnlich wie die von Websites zum Speichern und Lesen von Cookies verwendet werden. Die Funktionen der API ermöglichen es Erweiterungen, Informationen auf einer Seite-zu-Seite-Basis zu speichern. So könnten Sie, wie im Beispiel gezeigt, Details zur Hintergrundfarbauswahl eines Benutzers für eine Website speichern. Wenn der Benutzer die Website besucht, kann Ihre Erweiterung die Möglichkeit der API nutzen, Details über Cookies abzurufen und sie zu lesen, um die Auswahl des Benutzers wiederherzustellen und auf die Website anzuwenden.

> [!NOTE]
> Das Verhalten von Cookies kann mit der {{WebExtAPIRef("privacy.websites")}} `cookieConfig`-Eigenschaft gesteuert werden. Diese Eigenschaft steuert, ob und wie Cookies akzeptiert werden oder ob alle Cookies als Sitzungscookies behandelt werden.

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
      <td><p>Beliebige Domain mit beliebigem Pfad</p></td>
      <td><p>Beliebige Domain mit beliebigem Pfad</p></td>
      <td><p>Beliebige Domain mit beliebigem Pfad</p></td>
      <td><p>Beliebige Domain mit beliebigem Pfad</p></td>
    </tr>
  </tbody>
</table>

## Cookie-Speicher

Firefox bietet drei Arten von Cookie-Speichern:

- Den Standard-Speicher, der Cookies aus dem normalen Surfen speichert.
- Speicher für den privaten Surfmodus, der Cookies speichert, die während einer privaten Browsersitzung erstellt wurden. Diese Speicher und alle darin enthaltenen Cookies werden entfernt, wenn das zugehörige private Browserfenster geschlossen wird.

  > [!NOTE]
  > Nur sichtbar, wenn {{WebExtAPIRef("extension.isAllowedIncognitoAccess()")}} wahr zurückgibt. Safari unterstützt keinen Zugriff auf private Cookies.

- Container-Tab-Speicher, die Cookies für jede kontextuelle Identität in Firefox speichern. Kontextuelle Identitäten ermöglichen es einem Benutzer, mehrere Identitäten in einem Browserfenster zu pflegen. Dies ist nützlich, wenn Sie z. B. ein geschäftliches und ein privates E-Mail-Konto bei Gmail haben. Mit kontextuellen Identitäten können Sie ein Tab gegen eine persönliche Identität und ein weiteres Tab gegen eine geschäftliche Identität öffnen. Jedes Tab kann sich dann mit einem anderen Benutzernamen bei Google Mail anmelden, und beide Konten können nebeneinander verwendet werden. Weitere Informationen finden Sie unter [Security/Contextual Identity Project/Containers](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers) im Mozilla-Wiki.

Sie können herausfinden, welche Cookie-Speicher verfügbar sind, indem Sie {{WebExtAPIRef("cookies.getAllCookieStores")}} verwenden, das ein Objekt zurückgibt, das die ID jedes Cookie-Speichers und eine Liste der IDs der Tabs enthält, die jeden Cookie-Speicher verwenden.

## Beispiel-Durchlauf

Die Beispiel-Erweiterung [cookie-bg-picker](https://github.com/mdn/webextensions-examples/tree/main/cookie-bg-picker) ermöglicht es ihrem Benutzer, eine Farbe und ein Symbol auszuwählen, die auf den Hintergrund der Websites einer Seite angewendet werden. Diese Auswahl wird anhand {{WebExtAPIRef("cookies.set")}} gespeichert. Wenn eine Seite von der Website geöffnet wird, liest {{WebExtAPIRef("cookies.get")}} eine frühere Auswahl, und die Erweiterung wendet sie auf die Webseite an. Eine Rücksetzmöglichkeit entfernt das Hintergrundsymbol und die -farbe von der Website sowie das Cookie, indem sie {{WebExtAPIRef("cookies.remove")}} verwendet. Außerdem wird {{WebExtAPIRef("cookies.onChanged")}} genutzt, um Änderungen an Cookies zu überwachen und Details der Änderung an die Konsole zu senden.

Dieses Video zeigt die Erweiterung in Aktion:

{{EmbedYouTube("_rlp3eYqEMA")}}

Dieses Beispiel verwendet auch die Tabs- und Runtime-APIs, wir werden diese Funktionen jedoch nur am Rande diskutieren.

### manifest.json

Das Hauptmerkmal der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/manifest.json)-Datei in Bezug auf die Verwendung der Cookies-API ist die Berechtigungsanforderung:

```json
  "permissions": [
      "tabs",
      "cookies",
      "<all_urls>"
],
```

Hier fordert die Erweiterung die Erlaubnis an, die Cookies-API (`"cookies"`) mit allen Websites (`"<all_urls>"`) zu verwenden. Dies ermöglicht es der Erweiterung, die Hintergrundfarben-Symbolauswahl für jede Website zu speichern.

### Scripte—bgpicker.js

Das UI der Erweiterung verwendet eine Symbolleistenschaltfläche ({{WebExtAPIRef("browserAction")}}), die mit [bgpicker.html](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.html) implementiert ist und [bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js) aufruft. Diese ermöglichen es dem Benutzer, das Symbol auszuwählen und die Farbe einzugeben, die sie als Hintergrund der Seite anwenden möchten. Sie bieten auch die Möglichkeit, diese Einstellungen zu löschen.

[bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js) verarbeitet die Auswahl von Symbolen oder die Eingabe einer Farbe für den Hintergrund in separaten Funktionen.

Um die Symbolschaltflächen zu verarbeiten, sammelt das Skript zunächst alle Klassennamen, die für die Schaltflächen im HTML-Dokument verwendet werden:

```js
let bgBtns = document.querySelectorAll(".bg-container button");
```

Dann werden alle Schaltflächen durchlaufen, ihnen wird ihr Bild zugewiesen und ein onclick-Listener für jede Schaltfläche erstellt:

```js
for (let i = 0; i < bgBtns.length; i++) {
  let imgName = bgBtns[i].getAttribute('class');
  let bgImg = 'url(\'images/' + imgName + '.png\')';
  bgBtns[i].style.backgroundImage = bgImg;

  bgBtns[i].onclick = (e) => {
```

Wenn eine Schaltfläche geklickt wird, ermittelt die zugehörige Listener-Funktion den Klassennamen der Schaltfläche und dann den Symbolpfad, den sie mit einer Nachricht an das Inhaltskript der Seite ([updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js)) übergibt. Das Inhaltskript wendet dann das Symbol auf den Hintergrund der Webseite an. Unterdessen speichert [bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js) die Details des auf den Hintergrund angewendeten Symbols in einem Cookie:

```js
cookieVal.image = fullURL;
browser.cookies.set({
  url: tabs[0].url,
  name: "bgpicker",
  value: JSON.stringify(cookieVal),
});
```

Die Farbauswahl wird auf ähnliche Weise behandelt, ausgelöst durch einen Listener im Farbeingabefeld. Wenn eine Farbe eingegeben wird, wird der aktive Tab entdeckt und die Farbwahldetails werden mit einer Nachricht an das Inhaltskript der Seite gesendet, um auf den Hintergrund der Webseite angewendet zu werden. Anschließend wird die Farbauswahl zum Cookie hinzugefügt:

```js
    cookieVal.color = currColor;
    browser.cookies.set({
    url: tabs[0].url,
    name: "bgpicker",
    value: JSON.stringify(cookieVal)
```

Wenn der Benutzer die Rücksetzschaltfläche klickt, die der Variable reset zugeordnet wurde:

```js
let reset = document.querySelector(".color-reset button");
```

`reset.onclick` findet zuerst den aktiven Tab. Dann wird mit der ID des Tabs eine Nachricht an das Inhaltskript der Seite ([updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js)) weitergegeben, um das Symbol und die Farbe von der Seite zu entfernen. Die Funktion löscht dann die Cookie-Werte (damit die alten Werte nicht übertragen und auf ein Cookie geschrieben werden, das für eine neue Symbol- oder Farbauswahl auf derselben Seite erstellt wurde), bevor das Cookie entfernt wird:

```js
    cookieVal = { image : '',
                  color : '' };
    browser.cookies.remove({
    url: tabs[0].url,
    name: "bgpicker"
```

Außerdem, damit Sie sehen können, was mit den Cookies vor sich geht, meldet das Skript alle Änderungen an Cookies in der Konsole:

```js
browser.cookies.onChanged.addListener((changeInfo) => {
  console.log(`Cookie changed:\n
    * Cookie: ${JSON.stringify(changeInfo.cookie)}\n
    * Cause: ${changeInfo.cause}\n
    * Removed: ${changeInfo.removed}`);
});
```

### Scripte—background.js

Ein Hintergrundskript ([background.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/background_scripts/background.js)) bietet die Möglichkeit, dass der Benutzer in einer früheren Sitzung ein Hintergrundsymbol und eine Farbe für die Website ausgewählt hat. Das Skript hört auf Änderungen im aktiven Tab, entweder wenn der Benutzer zwischen Tabs wechselt oder die URL der im Tab angezeigten Seite ändert. Wenn eines dieser Ereignisse eintritt, wird `cookieUpdate()` aufgerufen. `cookieUpdate()` verwendet dann `getActiveTab()`, um die ID des aktiven Tabs abzurufen. Die Funktion kann dann überprüfen, ob ein Cookie für die Erweiterung existiert, indem sie die URL des Tabs verwendet:

```js
let gettingCookies = browser.cookies.get({
  url: tabs[0].url,
  name: "bgpicker",
});
```

Wenn das `"bgpicker"`-Cookie für die Website existiert, werden die Details des Symbols und der Farbe, die zuvor ausgewählt wurden, abgerufen und an das Inhaltskript [updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js) mittels Nachrichten übergeben:

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

Zusätzlich zu den bisher erwähnten APIs bietet die Cookies-API auch {{WebExtAPIRef("cookies.getAll")}}. Diese Funktion nimmt das Detailobjekt, um Filter für die ausgewählten Cookies anzugeben, und gibt ein Array von {{WebExtAPIRef("cookies.Cookie")}}-Objekten zurück, die den Filterkriterien entsprechen.

## Mehr erfahren

Wenn Sie mehr über die Cookies-API erfahren möchten, schauen Sie sich folgende Ressourcen an:

- [Cookies-API-Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies).
- [List-cookies](https://github.com/mdn/webextensions-examples/tree/main/list-cookies) Beispiel.
