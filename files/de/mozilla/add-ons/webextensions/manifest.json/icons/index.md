---
title: icons
slug: Mozilla/Add-ons/WebExtensions/manifest.json/icons
l10n:
  sourceCommit: 8a74d8feac267c1ddc37a4a8bc61e9aa8db75b12
---

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

Der Schlüssel `icons` gibt die Symbole für Ihre Erweiterung an. Diese Symbole repräsentieren die Erweiterung in Komponenten wie dem Add-ons-Manager (`about:addons`).

Der Schlüssel besteht aus Schlüssel-Wert-Paaren, die die Bildgröße in Pixeln und den Bildpfad relativ zum Stammverzeichnis der Erweiterung angeben.

Wenn `icons` nicht bereitgestellt wird, wird ein Standardsymbol für Erweiterungen verwendet.

Sie sollten ein Erweiterungssymbol bereitstellen, idealerweise in der Größe von 32x32 px. Dies ist das Standardsymbol, das im Add-ons-Manager verwendet wird. Sie können Symbole in beliebiger Größe bereitstellen, und Firefox wählt das aus, das am besten zu einer Komponente passt.

Firefox berücksichtigt die Bildschirmauflösung bei der Auswahl eines Symbols. Um den Benutzern mit hochauflösenden Displays, wie Retina-Displays, das beste visuelle Erlebnis zu bieten, sollten Sie doppelt so große Versionen Ihrer Symbole bereitstellen.

## Beispiel

Die Schlüssel im `icons`-Objekt spezifizieren die Symbolgröße in Pixeln, und die Werte spezifizieren den relativen Dateipfad des Symbols. Dieses Beispiel enthält ein 32px-Erweiterungssymbol und eine größere Version für hochauflösende Displays.

```json
"icons": {
  "32": "icon.png",
  "64": "icon@2x.png"
}
```

## SVG

Sie können SVG verwenden, und der Browser skaliert Ihr Symbol entsprechend. Es gibt zwei Einschränkungen:

1. Sie müssen ein viewBox im Bild angeben, z.B.:

   ```html
   <svg
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 32 32"
     width="32"
     height="32">
     <!-- your svg content -->
   </svg>
   ```

2. Auch wenn Sie eine SVG-Datei verwenden können, müssen Sie die Symbolgrößen in Ihrem Manifest angeben, z.B.:

   ```json
   "icons": {
     "32": "icon.svg",
     "64": "icon.svg"
   }
   ```

Sie können eine Media Query auf `prefers-color-scheme` verwenden, um das Symbol für helle und dunkle Themen zu aktualisieren. Zum Beispiel:

```css
#outside {
  fill: black;
}
#inside {
  fill: red;
}
@media (prefers-color-scheme: dark) {
  #outside {
    fill: white;
  }
  #inside {
    fill: black;
  }
}
```

Weitere Informationen finden Sie im [themed-icons](https://github.com/mdn/webextensions-examples/tree/main/themed-icons)-Beispiel.

> [!NOTE]
> Chromium-basierte Browser unterstützen dieses Feature nicht. Siehe [Chromium-Bug 29683](https://crbug.com/29683).

> [!NOTE]
> Denken Sie daran, das `xmlns`-Attribut einzuschließen, wenn Sie das SVG erstellen. Andernfalls zeigt Firefox das Symbol nicht an.

> [!NOTE]
> Wenn Sie ein Programm wie Inkscape verwenden, um SVG zu erstellen, speichern Sie Ihre Datei als "plain SVG". Firefox kann nicht garantieren, dass spezielle Namensräume verarbeitet werden, und zeigt möglicherweise kein Symbol mit diesen an.

## Browser-Kompatibilität

{{Compat}}
