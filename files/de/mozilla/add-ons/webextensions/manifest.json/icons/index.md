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
      <th scope="row">Manifestversion</th>
      <td>2 oder höher</td>
    </tr>
  </tbody>
</table>

Der Schlüssel `icons` spezifiziert Symbole für Ihre Erweiterung. Diese Symbole werden verwendet, um die Erweiterung in Komponenten wie dem Add-ons-Manager darzustellen.

Er besteht aus Schlüssel-Wert-Paaren von Bildgrößen in px und Bildpfaden relativ zum Stammverzeichnis der Erweiterung.

Wenn `icons` nicht angegeben wird, wird standardmäßig ein Standarderweiterungssymbol verwendet.

Sie sollten mindestens ein Hauptsymbol der Erweiterung angeben, idealerweise 48x48 px groß. Dies ist das Standardsymbol, das im Add-ons-Manager verwendet wird. Sie können jedoch Symbole in beliebiger Größe angeben, und Firefox versucht, das beste Symbol zur Anzeige in verschiedenen Komponenten zu finden.

Firefox berücksichtigt die Bildschirmauflösung bei der Auswahl eines Symbols. Um den Benutzern mit hochauflösenden Displays, wie Retina-Displays, das beste visuelle Erlebnis zu bieten, stellen Sie doppelt so große Versionen aller Ihrer Symbole bereit.

## Beispiel

Die Schlüssel im `icons` Objekt geben die Symbolgröße in px an, die Werte den relativen Symbolpfad. Dieses Beispiel enthält ein 48px-Erweiterungssymbol und eine größere Version für hochauflösende Displays.

```json
"icons": {
  "48": "icon.png",
  "96": "icon@2x.png"
}
```

## SVG

Sie können SVG verwenden und der Browser wird Ihr Symbol entsprechend skalieren. Es gibt jedoch derzeit zwei Einschränkungen:

1. Sie müssen eine ViewBox im Bild angeben. Zum Beispiel:

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
> Es ist bekannt, dass nur Firefox SVG-Symbole unterstützt. Chromium hat einen Fehler bezüglich [nicht unterstützter SVG-Symbole](https://crbug.com/29683).

> [!NOTE]
> Denken Sie daran, das `xmlns`-Attribut beim Erstellen des SVGs einzuschließen. Andernfalls kann Firefox das Symbol nicht anzeigen.

> [!NOTE]
> Wenn Sie ein Programm wie Inkscape zum Erstellen von SVG verwenden, möchten Sie es möglicherweise als "plain SVG" speichern. Firefox könnte durch verschiedene spezielle Namensräume verwirrt werden und Ihr Symbol nicht anzeigen.

## Browser-Kompatibilität

{{Compat}}
