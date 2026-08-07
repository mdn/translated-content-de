---
title: incognito
slug: Mozilla/Add-ons/WebExtensions/manifest.json/incognito
l10n:
  sourceCommit: ea339987e78c36abcab58aee7af2dd526ba5c3af
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Verpflichtend</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifestversion</th>
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">"incognito": "spanning"</pre>
        <pre class="brush: json">"incognito": "split"</pre>
        <pre class="brush: json">"incognito": "not_allowed"</pre>
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den Schlüssel `incognito`, um zu steuern, wie die Erweiterung mit privaten Browserfenstern arbeitet.

> [!NOTE]
> Standardmäßig laufen Erweiterungen nicht in privaten Browserfenstern. Ob eine Erweiterung auf private Browserfenster zugreifen kann, liegt in der Kontrolle des Benutzers. Für weitere Details siehe [Extensions in Private Browsing](https://support.mozilla.org/en-US/kb/extensions-private-browsing). Ihre Erweiterung kann überprüfen, ob sie auf private Browserfenster zugreifen kann, indem sie {{WebExtAPIRef("extension.isAllowedIncognitoAccess")}} verwendet.

Dies ist ein String, der einen der folgenden Werte annehmen kann:

- "spanning" (der Standard): Die Erweiterung sieht Ereignisse sowohl von privaten als auch von nicht-privaten Fenstern und Tabs. Fenster und Tabs erhalten eine `incognito`-Eigenschaft in dem [`Window`](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows/Window) oder [`Tab`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab), das sie repräsentiert. Diese Eigenschaft zeigt an, ob das Objekt privat ist oder nicht:

  ```js
  browser.windows.getLastFocused().then((windowInfo) => {
    console.log(`Window is private: ${windowInfo.incognito}`);
  });
  ```

- "split": Die Erweiterung ist aufgetrennt zwischen privaten und nicht-privaten Fenstern. Es laufen effektiv zwei Kopien der Erweiterung: Eine sieht nur nicht-private Fenster, die andere nur private Fenster. Jede Kopie hat isolierten Zugriff auf Web-APIs (zum Beispiel wird [`localStorage`](/de/docs/Web/API/Window/localStorage) nicht geteilt). Allerdings wird die WebExtension-API [`storage.local`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/local) geteilt.

  > [!NOTE]
  > Firefox unterstützt den "split"-Modus nicht. Erweiterungen, die diese Option in Firefox anfordern, werden im Modus "not_allowed" installiert. Es wird jedoch empfohlen, den `incognito`-Schlüssel von migrierten Erweiterungen zu löschen, um das Standardverhalten ("spanning") beizubehalten.

- "not_allowed": Private Tabs und Fenster sind für die Erweiterung unsichtbar.

## Datenschutzüberlegungen

Wenn Ihre Erweiterung den Modus `"spanning"` verwendet, um auf private und nicht-private Fenster zuzugreifen, achten Sie darauf, nicht den Zustand von privaten an nicht-private Browsersitzungen zu leaken. Ein häufiger Fehler ist es, Daten von einem Content Script, das in einem privaten Browsertab läuft, an einen externen Server mit einer Netzwerk-Anfrage von der Hintergrundseite zu senden. Da die Hintergrundseite Cookies mit der Haupt-Browsersitzung teilt, kann dies private Browsing-Aktivität mit der nicht-privaten Sitzung verknüpfen.

Um dies zu vermeiden, nutzen Sie [`credentials: "omit"`](/de/docs/Web/API/RequestInit#credentials) und [`cache: "no-cache"`](/de/docs/Web/API/RequestInit#cache) in allen `fetch()`-Aufrufen von der Hintergrundseite, die Daten aus privaten Browserfenstern beinhalten könnten:

```js
fetch(url, {
  credentials: "omit",
  cache: "no-cache",
});
```

## Beispiele

```json
"incognito": "spanning"
```

```json
"incognito": "split"
```

```json
"incognito": "not_allowed"
```

## Browser-Kompatibilität

{{Compat}}
