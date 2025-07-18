---
title: incognito
slug: Mozilla/Add-ons/WebExtensions/manifest.json/incognito
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
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
      <th scope="row">Manifest-Version</th>
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiele</th>
      <td>
        <pre class="brush: json">"incognito": "spanning"</pre>
        <pre class="brush: json">"incognito": "split"</pre>
        <pre class="brush: json">"incognito": "not_allowed"</pre>
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den Schlüssel `incognito`, um zu steuern, wie die Erweiterung mit Fenstern im privaten Modus funktioniert.

> [!NOTE]
> Standardmäßig werden Erweiterungen in privaten Fenstern nicht ausgeführt. Ob eine Erweiterung auf private Fenster zugreifen kann, liegt in der Hand des Benutzers. Für weitere Details siehe [Erweiterungen im Privaten Modus](https://support.mozilla.org/en-US/kb/extensions-private-browsing). Ihre Erweiterung kann überprüfen, ob sie auf private Fenster zugreifen kann, indem sie {{WebExtAPIRef("extension.isAllowedIncognitoAccess")}} verwendet.

Dies ist ein String, der einen der folgenden Werte haben kann:

- "spanning" (Standard): Die Erweiterung sieht Ereignisse sowohl von privaten als auch von nicht-privaten Fenstern und Tabs. In den Objekten [`Window`](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows/Window) oder [`Tab`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab), die sie repräsentieren, gibt es eine `incognito`-Eigenschaft. Diese Eigenschaft zeigt an, ob das Objekt privat ist oder nicht:

  ```js
  browser.windows.getLastFocused().then((windowInfo) => {
    console.log(`Window is private: ${windowInfo.incognito}`);
  });
  ```

- "split": Die Erweiterung ist zwischen privaten und nicht-privaten Fenstern aufgeteilt. Es gibt im Wesentlichen zwei Kopien der Erweiterung: Eine sieht nur nicht-private Fenster, die andere sieht nur private Fenster. Jede Kopie hat isolierten Zugriff auf Web-APIs (zum Beispiel wird [`localStorage`](/de/docs/Web/API/Window/localStorage) nicht geteilt). Die WebExtension-API [`storage.local`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/local) wird jedoch geteilt.

  > [!NOTE]
  > Firefox unterstützt den "split"-Modus nicht. Erweiterungen, die diese Option in Firefox anfordern, werden mit "not_allowed" installiert.

- "not_allowed": Private Tabs und Fenster sind für die Erweiterung unsichtbar.

## Beispiel

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
