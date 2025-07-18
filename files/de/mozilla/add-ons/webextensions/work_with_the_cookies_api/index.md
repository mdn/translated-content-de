---
title: Arbeiten mit der Cookies-API
slug: Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Mit der Cookies-API haben Ihre Erweiterungen Zugriff auf Funktionen, die denen ähneln, die von Websites verwendet werden, um Cookies zu speichern und zu lesen. Die Funktionen der API geben Erweiterungen die Möglichkeit, Informationen basisweise für jede Website zu speichern. Wie wir im Beispiel sehen werden, könnten Sie die Details der Wahl einer Hintergrundfarbe eines Benutzers für eine Website speichern. Wenn der Benutzer die Website erneut besucht, kann Ihre Erweiterung die Fähigkeit der API nutzen, Details über Cookies zu erhalten und sie zu lesen, um die Wahl des Benutzers wiederherzustellen und auf die Website anzuwenden.

> [!NOTE]
> Das Verhalten von Cookies kann über die {{WebExtAPIRef("privacy.websites")}}-Eigenschaft `cookieConfig` gesteuert werden. Diese Eigenschaft steuert, ob und wie Cookies akzeptiert oder ob alle Cookies als Sitzungscookies behandelt werden.

## Berechtigungen

Um die Cookies-API zu verwenden, müssen Sie sowohl die Berechtigung `"cookies"` als auch [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Protokolle, Domains oder Websites anfordern, auf die Sie zugreifen möchten, oder `"<all_urls>"` verwenden, um auf jedes Protokoll und jede Domain zuzugreifen. Die Art und Weise, wie Sie Ihren Host-Berechtigungsstring definieren, beeinflusst die Fähigkeit Ihrer Erweiterung, Cookies zu lesen, zu schreiben und zu löschen.

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
      <td rowspan="2"><p>Host-Berechtigungsstring</p></td>
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
      <td><p>Jede Domain mit jedem Pfad</p></td>
      <td><p>Jede Domain mit jedem Pfad</p></td>
      <td><p>Jede Domain mit jedem Pfad</p></td>
      <td><p>Jede Domain mit jedem Pfad</p></td>
    </tr>
  </tbody>
</table>

## Cookiestores

Firefox bietet drei Arten von Cookiestores:

- Der Standardstore, der Cookies aus normalem Browsing speichert.
- Stores für den privaten Modus, die Cookies speichern, die während einer Sitzung im privaten Modus erstellt wurden. Diese Stores und alle Cookies, die sie enthalten, werden entfernt, wenn das zugehörige Fenster im privaten Modus geschlossen wird.

  > [!NOTE]
  > Nur sichtbar, wenn {{WebExtAPIRef("extension.isAllowedIncognitoAccess()")}} wahr zurückgibt. Safari unterstützt keinen Zugriff auf private Cookies.

- Container-Tab-Stores, die Cookies für jede kontextuelle Identität in Firefox speichern. Kontextuelle Identitäten ermöglichen es einem Benutzer, mehrere Identitäten in einem Browserfenster zu verwalten. Dies ist nützlich, wenn Sie beispielsweise ein Geschäfts- und ein privates E-Mail-Konto bei Gmail haben. Mit kontextuellen Identitäten können Sie einen Tab mit einer persönlichen Identität öffnen und einen zweiten Tab mit einer geschäftlichen Identität. Jeder Tab kann sich dann mit einem anderen Benutzernamen bei Google Mail anmelden, und die beiden Konten können nebeneinander verwendet werden. Weitere Informationen finden Sie im [Security/Contextual Identity Project/Containers](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers) in der Mozilla-Wiki.

Sie können herausfinden, welche Cookiestores verfügbar sind, indem Sie {{WebExtAPIRef("cookies.getAllCookieStores")}} verwenden, das ein Objekt zurückgibt, das die ID jedes Cookiestores und eine Liste der IDs der Tabs enthält, die jeden Cookiestore verwenden.

## Beispiel-Durchführung

Die Beispielerweiterung [cookie-bg-picker](https://github.com/mdn/webextensions-examples/tree/main/cookie-bg-picker) ermöglicht es ihrem Benutzer, eine Farbe und ein Symbol auszuwählen, die auf den Hintergrund der Webseiten einer Site angewendet werden. Diese Entscheidungen werden pro Website-Basis mit {{WebExtAPIRef("cookies.set")}} gespeichert. Wenn eine Seite von der Website geöffnet wird, liest {{WebExtAPIRef("cookies.get")}} jede frühere Auswahl, und die Erweiterung wendet sie auf die Webseite an. Eine Rücksetzoption entfernt das Hintergrundsymbol und die Farbe von der Site sowie das Cookie, mithilfe von {{WebExtAPIRef("cookies.remove")}}. Es verwendet auch {{WebExtAPIRef("cookies.onChanged")}}, um auf Änderungen an Cookies zu lauschen und Details der Änderung an die Konsole zu senden.

Dieses Video zeigt die Erweiterung in Aktion:

{{EmbedYouTube("_rlp3eYqEMA")}}

Dieses Beispiel verwendet auch die Tabs- und Runtime-APIs, aber wir werden diese Funktionen nur am Rande besprechen.

### manifest.json

Das Schlüsselmerkmal der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/manifest.json)-Datei in Bezug auf die Verwendung der Cookies-API ist die Berechtigungsanforderung:

```json
  "permissions": [
      "tabs",
      "cookies",
      "<all_urls>"
],
```

Hier fordert die Erweiterung die Berechtigung an, die Cookies-API (`"cookies"`) mit allen Websites (`"<all_urls>"`) zu verwenden. Dies ermöglicht der Erweiterung, die Hintergrundfarbenwahl des Symbols für jede Website zu speichern.

### Skripte—bgpicker.js

Die Benutzeroberfläche der Erweiterung verwendet eine Symbolleisten-Schaltfläche ({{WebExtAPIRef("browserAction")}}), implementiert mit [bgpicker.html](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.html), die [bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js) aufruft. Zusammen ermöglichen diese es dem Benutzer, das Symbol auszuwählen und die Farbe einzugeben, die er als Hintergrund der Website anwenden möchte. Sie bieten auch die Option, diese Einstellungen zu löschen.

[bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js) verarbeitet die Auswahl des Symbols oder die Eingabe einer Farbe für den Hintergrund in separaten Funktionen.

Um die Symbolschaltflächen zu verarbeiten, sammelt das Skript zuerst alle Klassennamen, die für die Schaltflächen in der HTML-Datei verwendet werden. Dann durchläuft es alle Schaltflächen, weist ihnen ihr Bild zu und erstellt einen `onclick`-Listener für jede Schaltfläche:

```js
let bgBtns = document.querySelectorAll(".bg-container button");

for (let i = 0; i < bgBtns.length; i++) {
  let imgName = bgBtns[i].getAttribute("class");
  let bgImg = `url('images/${imgName}.png')`;
  bgBtns[i].style.backgroundImage = bgImg;

  bgBtns[i].onclick = (e) => {
    // ...
  };
}
```

Wenn eine Schaltfläche angeklickt wird, erhält ihre zugehörige Listener-Funktion den Klassennamen der Schaltfläche und dann den Symbolpfad, den sie mithilfe einer Nachricht an das Inhaltsskript der Seite ([updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js)) übermittelt. Das Inhaltsskript wendet dann das Symbol auf den Hintergrund der Webseite an. In der Zwischenzeit speichert [bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js) die Details des auf dem Hintergrund angewendeten Symbols in einem Cookie:

```js
cookieVal.image = fullURL;
browser.cookies.set({
  url: tabs[0].url,
  name: "bgpicker",
  value: JSON.stringify(cookieVal),
});
```

Die Farbeinstellung wird auf ähnliche Weise gehandhabt, ausgelöst durch einen Listener im Farbeingabefeld. Wenn eine Farbe eingegeben wird, wird der aktive Tab ermittelt und die Farbauswahl mit einer Nachricht an das Inhaltsskript der Seite gesendet, um auf den Hintergrund der Webseite angewendet zu werden. Dann wird die Farbauswahl dem Cookie hinzugefügt:

```js
cookieVal.color = currColor;
browser.cookies.set({
  url: tabs[0].url,
  name: "bgpicker",
  value: JSON.stringify(cookieVal),
});
```

Wenn der Benutzer die Rücksetztaste klickt, die der Variablen reset zugewiesen wurde:

```js
let reset = document.querySelector(".color-reset button");
```

findet `reset.onclick` zuerst den aktiven Tab. Dann, unter Verwendung der Tab-ID, übermittelt es eine Nachricht an das Inhaltsskript der Seite ([updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js)), um es dazu zu bringen, das Symbol und die Farbe von der Seite zu entfernen. Die Funktion löscht dann die Cookie-Werte (damit die alten Werte nicht weitergeführt und auf ein Cookie geschrieben werden, das für eine neue Symbol- oder Farbauswahl auf derselben Seite erstellt wurde), bevor sie das Cookie entfernt:

```js
cookieVal = { image: "", color: "" };
browser.cookies.remove({
  url: tabs[0].url,
  name: "bgpicker",
});
```

Außerdem berichtet das Skript, damit Sie sehen können, was mit den Cookies vor sich geht, über alle Änderungen an Cookies in der Konsole:

```js
browser.cookies.onChanged.addListener((changeInfo) => {
  console.log(`Cookie changed:\n
    * Cookie: ${JSON.stringify(changeInfo.cookie)}\n
    * Cause: ${changeInfo.cause}\n
    * Removed: ${changeInfo.removed}`);
});
```

### Skripte—background.js

Ein Hintergrundskript ([background.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/background_scripts/background.js)) bietet die Möglichkeit, dass der Benutzer in einer früheren Sitzung ein Hintergrundsymbol und eine Farbe für die Website ausgewählt hat. Das Skript hört auf Änderungen am aktiven Tab, entweder der Benutzer wechselt zwischen Tabs oder ändert die URL der im Tab angezeigten Seite. Wenn eines dieser Ereignisse eintritt, wird `cookieUpdate()` aufgerufen. `cookieUpdate()` verwendet wiederum `getActiveTab()`, um die ID des aktiven Tabs zu erhalten. Die Funktion kann dann überprüfen, ob ein Cookie für die Erweiterung existiert, wobei die URL des Tabs verwendet wird:

```js
let gettingCookies = browser.cookies.get({
  url: tabs[0].url,
  name: "bgpicker",
});
```

Wenn das Cookie `"bgpicker"` für die Website existiert, werden die Details des zuvor ausgewählten Symbols und der Farbe abgerufen und mithilfe von Nachrichten an das Inhaltsskript [updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js) übermittelt:

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

Neben den bisher erwähnten APIs bietet die Cookies-API auch {{WebExtAPIRef("cookies.getAll")}}. Diese Funktion nimmt das Detailobjekt, um Filter für die ausgewählten Cookies zu spezifizieren, und gibt ein Array von {{WebExtAPIRef("cookies.Cookie")}}-Objekten zurück, die die Filterkriterien erfüllen.

## Mehr erfahren

Wenn Sie mehr über die Cookies-API erfahren möchten, schauen Sie sich an:

- [Cookies-API-Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies).
- [List-cookies](https://github.com/mdn/webextensions-examples/tree/main/list-cookies)-Beispiel.
