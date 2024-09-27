---
title: icons
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

Der `icons`-Schlüssel gibt die Symbole für Ihre Erweiterung an. Diese Symbole werden verwendet, um die Erweiterung in Komponenten wie dem Add-ons-Manager darzustellen.

Er besteht aus Schlüssel-Wert-Paaren der Bildgröße in Pixeln und dem Bildpfad relativ zum Stammverzeichnis der Erweiterung.

Wenn `icons` nicht angegeben ist, wird standardmäßig ein Standardsymbol der Erweiterung verwendet.

Sie sollten mindestens ein Hauptsymbol für die Erweiterung bereitstellen, idealerweise in der Größe 48x48 px. Dies ist das Standardsymbol, das im Add-ons-Manager verwendet wird. Sie können jedoch Symbole in beliebiger Größe bereitstellen und Firefox wird versuchen, das beste Symbol für die Anzeige in verschiedenen Komponenten zu finden.

Firefox berücksichtigt die Bildschirmauflösung bei der Auswahl eines Symbols. Um Benutzern mit hochauflösenden Bildschirmen, wie Retina-Displays, das bestmögliche visuelle Erlebnis zu bieten, stellen Sie doppelt so große Versionen aller Ihrer Symbole bereit.

## Beispiel

Die Schlüssel im `icons`-Objekt geben die Symbolgröße in Pixeln an, Werte spezifizieren den relativen Symbolpfad. Dieses Beispiel enthält ein 48px-Erweiterungssymbol und eine größere Version für hochauflösende Anzeigen.

```json
"icons": {
  "48": "icon.png",
  "96": "icon@2x.png"
}
```

## SVG

Sie können SVG verwenden, und der Browser wird Ihr Symbol entsprechend skalieren. Es gibt jedoch derzeit zwei Einschränkungen:

1. Sie müssen ein viewBox im Bild angeben. Zum Beispiel:

   ```html
   <svg
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 48 48"
     width="48"
     height="48">
     <!-- your svg content -->
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
> Nur Firefox ist bekannt dafür, SVG-Symbole zu unterstützen. Chromium hat einen Fehler bezüglich [nicht unterstützter SVG-Symbole](https://crbug.com/29683).

> [!NOTE]
> Denken Sie daran, das `xmlns`-Attribut einzuschließen, wenn Sie SVG erstellen. Andernfalls kann Firefox das Symbol nicht anzeigen.

> [!NOTE]
> Wenn Sie ein Programm wie Inkscape zur Erstellung von SVG verwenden, möchten Sie es möglicherweise als "plain SVG" speichern. Firefox könnte durch verschiedene spezielle Namensräume verwirrt werden und Ihr Symbol nicht anzeigen.

## Browser-Kompatibilität

{{Compat}}
