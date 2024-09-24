---
title: Symbole
slug: Mozilla/Add-ons/WebExtensions/manifest.json/icons
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Verpflichtend</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest-Version</th>
      <td>2 oder höher</td>
    </tr>
  </tbody>
</table>

Der `icons`-Schlüssel gibt Symbole für Ihre Erweiterung an. Diese Symbole werden verwendet, um die Erweiterung in Komponenten wie dem Add-ons-Manager darzustellen.

Er besteht aus Schlüssel-Wert-Paaren der Bildgröße in px und dem Bildpfad relativ zum Stammverzeichnis der Erweiterung.

Wenn `icons` nicht angegeben ist, wird standardmäßig ein Standard-Erweiterungssymbol verwendet.

Sie sollten mindestens ein Haupt-Erweiterungssymbol bereitstellen, idealerweise in der Größe von 48x48 px. Dies ist das Standardsymbol, das im Add-ons-Manager verwendet wird. Sie können jedoch Symbole in beliebiger Größe bereitstellen, und Firefox versucht, das beste Symbol zur Anzeige in verschiedenen Komponenten zu finden.

Firefox berücksichtigt die Bildschirmauflösung bei der Auswahl eines Symbols. Um die beste visuelle Erfahrung für Benutzer mit hochauflösenden Displays, wie Retina-Displays, zu bieten, sollten Sie doppelt so große Versionen aller Ihrer Symbole bereitstellen.

## Beispiel

Die Schlüssel im `icons`-Objekt geben die Symbolgröße in px an, die Werte den relativen Symbolpfad. Dieses Beispiel enthält ein 48px-Erweiterungssymbol und eine größere Version für hochauflösende Displays.

```json
"icons": {
  "48": "icon.png",
  "96": "icon@2x.png"
}
```

## SVG

Sie können SVG verwenden, und der Browser skaliert Ihr Symbol entsprechend. Es gibt jedoch derzeit zwei Einschränkungen:

1. Sie müssen eine viewBox im Bild angeben. Zum Beispiel:

   ```html
   <svg
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 48 48"
     width="48"
     height="48">
     <!-- Ihr SVG-Inhalt -->
   </svg>
   ```

2. Auch wenn Sie eine Datei verwenden können, müssen Sie dennoch verschiedene Größen des Symbols in Ihrem Manifest angeben. Zum Beispiel:

   ```json
   "icons": {
     "48": "icon.svg",
     "96": "icon.svg"
   }
   ```

> [!NOTE]
> Nur Firefox unterstützt bekanntermaßen SVG-Symbole. Chromium hat einen Fehler bezüglich [nicht unterstützter SVG-Symbole](https://crbug.com/29683).

> [!NOTE]
> Denken Sie daran, das `xmlns`-Attribut beim Erstellen des SVG einzuschließen. Andernfalls kann Firefox das Symbol nicht anzeigen.

> [!NOTE]
> Wenn Sie ein Programm wie Inkscape zum Erstellen von SVG verwenden, möchten Sie es möglicherweise als "einfaches SVG" speichern. Firefox könnte durch verschiedene spezielle Namespaces verwirrt werden und Ihr Symbol nicht anzeigen.

## Browser-Kompatibilität

{{Compat}}
