---
title: incognito
slug: Mozilla/Add-ons/WebExtensions/manifest.json/incognito
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

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
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">"incognito": "spanning"</pre>
        <pre class="brush: json">"incognito": "split"</pre>
        <pre class="brush: json">"incognito": "not_allowed"</pre>
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den `incognito`-Schlüssel, um zu steuern, wie die Erweiterung mit privaten Browsing-Fenstern arbeitet.

> [!NOTE]
> Standardmäßig laufen Erweiterungen nicht in privaten Browsing-Fenstern. Ob eine Erweiterung auf private Browsing-Fenster zugreifen kann, liegt in der Kontrolle des Benutzers. Für Details siehe [Erweiterungen im privaten Modus](https://support.mozilla.org/en-US/kb/extensions-private-browsing). Ihre Erweiterung kann prüfen, ob sie auf private Browsing-Fenster zugreifen kann, indem sie {{WebExtAPIRef("extension.isAllowedIncognitoAccess")}} verwendet.

Dies ist ein String, der einen der folgenden Werte annehmen kann:

- "spanning" (Standard): Die Erweiterung sieht Ereignisse aus privaten und nicht-privaten Fenstern und Tabs. Fenster und Tabs erhalten eine `incognito`-Eigenschaft im [`Window`](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows/Window) oder [`Tab`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab), die sie repräsentiert. Diese Eigenschaft zeigt an, ob das Objekt privat ist oder nicht:

  ```js
  browser.windows.getLastFocused().then((windowInfo) => {
    console.log(`Window is private: ${windowInfo.incognito}`);
  });
  ```

- "split": Die Erweiterung ist zwischen privaten und nicht-privaten Fenstern aufgeteilt. Es laufen effektiv zwei Kopien der Erweiterung: eine sieht nur nicht-private Fenster, die andere sieht nur private Fenster. Jede Kopie hat isolierten Zugriff auf Web-APIs (zum Beispiel wird [`localStorage`](/de/docs/Web/API/Window/localStorage) nicht geteilt). Allerdings wird die WebExtension API [`storage.local`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/local) geteilt.

  > [!NOTE]
  > Firefox unterstützt den "split"-Modus nicht. Erweiterungen, die diese Option in Firefox anfordern, werden mit der Einstellung "not_allowed" installiert.

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
