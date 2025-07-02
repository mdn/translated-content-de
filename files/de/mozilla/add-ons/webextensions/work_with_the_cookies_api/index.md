---
title: Arbeiten mit der Cookies-API
slug: Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API
l10n:
  sourceCommit: fd56a549d24a8002df09735ee8319ce1a721c233
---

{{AddonSidebar}}

Mit der Cookies-API haben Ihre Erweiterungen Zugriff auf Funktionen, die denen ähneln, die von Websites zum Speichern und Lesen von Cookies verwendet werden. Die Funktionen der API geben den Erweiterungen die Möglichkeit, Informationen auf einer seitenweisen Basis zu speichern. Wie wir im Beispiel sehen werden, könnten Sie die Auswahl der Hintergrundfarbe eines Benutzers für eine Website speichern. Wenn der Benutzer die Website erneut besucht, kann Ihre Erweiterung die Fähigkeit der API nutzen, Details zu Cookies zu erhalten und sie zu lesen, um die Auswahl des Benutzers wiederherzustellen und auf die Website anzuwenden.

> [!NOTE]
> Das Verhalten von Cookies kann mithilfe der {{WebExtAPIRef("privacy.websites")}}-Eigenschaft `cookieConfig` gesteuert werden. Diese Eigenschaft steuert, ob und wie Cookies akzeptiert werden oder ob alle Cookies als Sitzungscookies behandelt werden.

## Berechtigungen

Um die Cookies-API zu verwenden, müssen Sie sowohl die Berechtigung `"cookies"` als auch [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Protokolle, Domains oder Websites anfordern, auf die Sie zugreifen möchten, oder `"<all_urls>"` verwenden, um auf alle Protokolle und Domains zuzugreifen. Die Art und Weise, wie Sie Ihren Host-Berechtigungsstring definieren, beeinflusst die Fähigkeit Ihrer Erweiterung, Cookies zu lesen, zu schreiben und zu löschen.

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

## Cookiestores

Firefox bietet drei Arten von Cookiestores:

- Den Standardstore, der Cookies vom normalen Surfen speichert.
- Private Browsing Mode Stores, die Cookies speichern, die während einer privaten Browsersitzung erstellt wurden. Diese Stores und alle enthaltenen Cookies werden entfernt, wenn das zugehörige private Browserfenster geschlossen wird.

  > [!NOTE]
  > Nur sichtbar, wenn {{WebExtAPIRef("extension.isAllowedIncognitoAccess()")}} wahr zurückgibt. Safari unterstützt den Zugriff auf private Cookies nicht.

- Container-Tab-Stores, die Cookies für jede kontextuelle Identität in Firefox speichern. Kontextuelle Identitäten ermöglichen es einem Benutzer, mehrere Identitäten innerhalb eines Browserfensters zu verwalten. Dies ist nützlich, wenn Sie beispielsweise ein Geschäfts- und ein persönliches E-Mail-Konto auf Gmail haben. Mit kontextuellen Identitäten können Sie einen Tab gegen eine persönliche Identität und einen zweiten Tab gegen eine geschäftliche Identität öffnen. Jeder Tab kann sich dann mit einem anderen Benutzernamen bei Google Mail anmelden, und die beiden Konten können nebeneinander verwendet werden. Für weitere Informationen siehe [Security/Contextual Identity Project/Containers](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers) im Mozilla-Wiki.

Sie können herausfinden, welche Cookiestores verfügbar sind, indem Sie {{WebExtAPIRef("cookies.getAllCookieStores")}} verwenden, das ein Objekt mit den IDs jedes Cookiestores und einer Liste der IDs der Tabs zurückgibt, die jeden Cookiestore verwenden.

## Beispielanleitung

Die Beispielerweiterung [cookie-bg-picker](https://github.com/mdn/webextensions-examples/tree/main/cookie-bg-picker) ermöglicht es dem Benutzer, eine Farbe und ein Symbol auszuwählen, die auf den Hintergrund der Webseiten einer Website angewendet werden. Diese Auswahl wird seitenweise mithilfe von {{WebExtAPIRef("cookies.set")}} gespeichert. Wenn eine Seite der Website geöffnet wird, liest {{WebExtAPIRef("cookies.get")}} frühere Entscheidungen, und die Erweiterung wendet sie auf die Webseite an. Eine Zurücksetzungsoption entfernt das Hintergrundsymbol und die Farbe von der Website sowie das Cookie, indem {{WebExtAPIRef("cookies.remove")}} verwendet wird. Sie verwendet auch {{WebExtAPIRef("cookies.onChanged")}}, um auf Änderungen der Cookies zu lauschen und die Details der Änderung an die Konsole zu senden.

Dieses Video zeigt die Erweiterung in Aktion:

{{EmbedYouTube("_rlp3eYqEMA")}}

Dieses Beispiel verwendet auch die Tabs- und Runtime-APIs, aber wir werden diese Funktionen nur beiläufig besprechen.

### manifest.json

Die Hauptfunktion der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/manifest.json)-Datei im Zusammenhang mit der Verwendung der Cookies-API ist die Anforderung von Berechtigungen:

```json
  "permissions": [
      "tabs",
      "cookies",
      "<all_urls>"
],
```

Hier beantragt die Erweiterung die Berechtigung zur Verwendung der Cookies-API (`"cookies"`) mit allen Websites (`"<all_urls>"`). Dies ermöglicht der Erweiterung, die Wahl eines Hintergrundfarbensymbols für jede Website zu speichern.

### Skripte—bgpicker.js

Die Benutzeroberfläche der Erweiterung verwendet eine Toolbar-Schaltfläche ({{WebExtAPIRef("browserAction")}}), die mit [bgpicker.html](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.html) implementiert wird und [bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js) aufruft. Gemeinsam ermöglichen sie es dem Benutzer, das Symbol zu wählen und die Farbe einzutragen, die er als Hintergrund der Website anwenden möchte. Sie bieten auch die Möglichkeit, diese Einstellungen zu löschen.

[bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js) behandelt die Auswahl von Symbolen oder die Eingabe einer Farbe für den Hintergrund in separaten Funktionen.

Um die Symbolschaltflächen zu behandeln, sammelt das Skript zuerst alle Klassennamen, die für die Schaltflächen in der HTML-Datei verwendet werden. Es durchläuft dann alle Schaltflächen, ordnet ihnen ihr Bild zu und erstellt einen `onclick`-Listener für jede Schaltfläche:

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

Wenn eine Schaltfläche geklickt wird, erhält die entsprechende Listener-Funktion den Klassennamen der Schaltfläche und dann den Symbolpfad, den sie an das Inhaltsskript der Seite ([updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js)) mithilfe einer Nachricht übergibt. Das Inhaltsskript wendet dann das Symbol auf den Hintergrund der Webseite an. In der Zwischenzeit speichert [bgpicker.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/popup/bgpicker.js) die Details des auf den Hintergrund angewendeten Symbols in einem Cookie:

```js
cookieVal.image = fullURL;
browser.cookies.set({
  url: tabs[0].url,
  name: "bgpicker",
  value: JSON.stringify(cookieVal),
});
```

Die Farbeinstellung wird auf ähnliche Weise behandelt, ausgelöst durch einen Listener im Farbeingabefeld. Wenn eine Farbe eingegeben wird, wird der aktive Tab entdeckt, und die Farbauswahl-Details werden mithilfe einer Nachricht an das Inhaltsskript der Seite gesendet, um sie auf den Hintergrund der Webseite anzuwenden. Dann wird die Farbauswahl dem Cookie hinzugefügt:

```js
cookieVal.color = currColor;
browser.cookies.set({
  url: tabs[0].url,
  name: "bgpicker",
  value: JSON.stringify(cookieVal),
});
```

Wenn der Benutzer die Schaltfläche zum Zurücksetzen klickt, die der Variable `reset` zugewiesen wurde:

```js
let reset = document.querySelector(".color-reset button");
```

findet `reset.onclick` zuerst den aktiven Tab. Dann verwendet es die ID des Tabs, um eine Nachricht an das Inhaltsskript der Seite ([updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js)) zu senden, um es dazu zu bringen, das Symbol und die Farbe von der Seite zu entfernen. Die Funktion löscht dann die Cookie-Werte (damit die alten Werte nicht weitergetragen und auf ein Cookie geschrieben werden, das für eine neue Symbol- oder Farbauswahl auf derselben Seite erstellt wurde), bevor das Cookie entfernt wird:

```js
cookieVal = { image: "", color: "" };
browser.cookies.remove({
  url: tabs[0].url,
  name: "bgpicker",
});
```

Außerdem, damit Sie sehen können, was mit den Cookies vor sich geht, meldet das Skript alle Änderungen an den Cookies in der Konsole:

```js
browser.cookies.onChanged.addListener((changeInfo) => {
  console.log(`Cookie changed:\n
    * Cookie: ${JSON.stringify(changeInfo.cookie)}\n
    * Cause: ${changeInfo.cause}\n
    * Removed: ${changeInfo.removed}`);
});
```

### Skripte—background.js

Ein Hintergrundskript ([background.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/background_scripts/background.js)) bietet die Möglichkeit, dass der Benutzer ein Hintergrundsymbol und eine Farbe für die Website in einer früheren Sitzung ausgewählt hat. Das Skript lauscht auf Änderungen im aktiven Tab, entweder wenn der Benutzer zwischen Tabs wechselt oder die URL der im Tab angezeigten Seite ändert. Wenn eines dieser Ereignisse eintritt, wird `cookieUpdate()` aufgerufen. `cookieUpdate()` verwendet wiederum `getActiveTab()`, um die ID des aktiven Tabs zu erhalten. Die Funktion kann dann überprüfen, ob ein Cookie für die Erweiterung existiert, indem die URL des Tabs verwendet wird:

```js
let gettingCookies = browser.cookies.get({
  url: tabs[0].url,
  name: "bgpicker",
});
```

Wenn das `"bgpicker"`-Cookie für die Website existiert, werden die Details des zuvor ausgewählten Symbols und der Farbe abgerufen und mithilfe von Nachrichten an das Inhaltsskript [updatebg.js](https://github.com/mdn/webextensions-examples/blob/main/cookie-bg-picker/content_scripts/updatebg.js) übergeben:

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

Wenn Sie mehr über die Cookies-API erfahren möchten, schauen Sie sich die folgenden Ressourcen an:

- [Cookies API-Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies).
- [List-cookies](https://github.com/mdn/webextensions-examples/tree/main/list-cookies) Beispiel.
