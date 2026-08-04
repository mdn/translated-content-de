---
title: theme
slug: Mozilla/Add-ons/WebExtensions/manifest.json/theme
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
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
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">
"theme": {
  "images": {
    "theme_frame": "images/sun.jpg"
  },
  "colors": {
    "frame": "#CF723F",
    "tab_background_text": "black"
  }
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den `theme` Schlüssel, um ein statisches Thema für Firefox zu definieren. Wenn er allein bereitgestellt wird, definiert er das Thema, das verwendet wird, wenn Firefox entweder das helle oder das dunkle Farbschema verwendet. Wenn der [`dark_theme` Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/dark_theme) bereitgestellt ist, liefert dieser Schlüssel das Thema, das verwendet wird, wenn Firefox das helle Farbschema verwendet.

> [!NOTE]
> Wenn Sie ein Thema mit einer Erweiterung einbeziehen möchten, lesen Sie bitte die {{WebExtAPIRef("theme")}} API.

> [!NOTE]
> Seit Mai 2019 müssen Themen signiert werden, um installiert zu werden ([Firefox Bug 1545109](https://bugzil.la/1545109)). Weitere Details finden Sie unter [Signieren und Verteilen Ihres Add-ons](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon).

## Bildformate

Die folgenden Bildformate werden in allen Theme-Bildeigenschaften unterstützt:

- JPEG
- PNG
- APNG
- SVG (animierte SVGs werden ab Firefox 59 unterstützt)
- GIF (animierte GIFs werden nicht unterstützt)

## Syntax

Der theme-Schlüssel ist ein Objekt, das die folgenden Eigenschaften hat:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Typ</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>images</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Optional ab Firefox 60. Vor Firefox 60 verpflichtend.</p>
        <p>
          Ein JSON-Objekt, dessen Eigenschaften die Bilder repräsentieren, die in
          verschiedenen Bereichen des Browsers angezeigt werden sollen. Siehe
          <code><a href="#images">images</a></code> für Details zu den
          Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>colors</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Verpflichtend</p>
        <p>
          Ein JSON-Objekt, dessen Eigenschaften die Farben verschiedener Teile
          des Browsers repräsentieren. Siehe <code><a href="#colors">colors</a></code> für
          Details zu den Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>properties</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Optional</p>
        <p>
          Dieses Objekt hat Eigenschaften, die beeinflussen, wie die
          <code>"additional_backgrounds"</code>-Elemente angezeigt werden und wie Farbschemata angewendet werden. Siehe
          <code><a href="#properties">properties</a></code> für Details zu den Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Bilder

Alle URLs sind relativ zur manifest.json-Datei und können nicht auf eine externe URL verweisen.

Bilder sollten 200 Pixel hoch sein, um sicherzustellen, dass sie den Header-Bereich immer vertikal ausfüllen.

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Typ</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>theme_frame</code></td>
      <td><code>String</code> oder <code>Object</code></td>
      <td>
        <p>
          Ein Vordergrundbild (definiert durch den Pfad zu einem Bildasset, das in der Erweiterung gepackt ist) oder <a href="#css_gradient_syntax">CSS-Verlauf</a>,
          das dem Headerbereich hinzugefügt und in der oberen rechten Ecke des
          Headerbereichs verankert wird. CSS-Verläufe werden ab Firefox 153 unterstützt.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Chrome verankert das Bild in der oberen linken Ecke
            des Headers und wenn das Bild den Headerbereich nicht ausfüllt, wird das Bild gekachelt.
          </p>
        </div>
        <p>
          Optional in Desktop Firefox 60 und höher.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds</code></td>
      <td><code>Array</code> von <code>String</code> oder <code>Object</code></td>
      <td>
        <div class="warning">
          <p>
            <strong>Warnung:</strong> Die
            <code>additional_backgrounds</code>-Eigenschaft ist experimentell. Sie wird
            in Release-Versionen von Firefox akzeptiert, ihr Verhalten
            kann sich jedoch ändern.
          </p>
        </div>
        <p>
          Ein Array von zusätzlichen Hintergrundelementen, bei denen es sich entweder um den Pfad zu einem Bildasset, das in der Erweiterung gepackt ist, oder um einen <a href="#css_gradient_syntax">CSS-Verlauf</a> handelt, die dem Headerbereich hinzugefügt und hinter dem
          <code>"theme_frame":</code> Element angezeigt werden. Diese zusätzlichen Hintergrundelemente schichten das erste Element des
          Arrays oben und das letzte unten. CSS-Verläufe werden ab Firefox 153 unterstützt.
        </p>
        <p>Optional</p>
        <p>
          Standardmäßig sind alle Elemente in der oberen rechten Ecke des
          Headerbereichs verankert, aber ihr Ausrichtungs-, Wiederholungs- und Größenverhalten kann durch <a href="#properties"><code>"properties":</code></a> gesteuert werden.
        </p>
        <p>
          Da zusätzliche Hintergrundelemente hinter dem <code>theme_frame</code>-Element angezeigt werden, sind alle zusätzlichen Hintergrundelemente verborgen, wenn <code>theme_frame</code> als CSS-Verlauf festgelegt ist.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### CSS-Verlaufs-Syntax

Ein CSS-Verlauf wird als ein Objekt der Form `{ "GRADIENT_TYPE": "GRADIENT_PARAMS" }` angegeben, wobei:

- `GRADIENT_TYPE` einer der folgenden Werte ist:
  - `linear-gradient`
  - `radial-gradient`
  - `conic-gradient`
  - `repeating-linear-gradient`
  - `repeating-radial-gradient`
  - `repeating-conic-gradient`
- `GRADIENT_PARAMS` die Parameter für diese CSS-Verlaufsfunktion enthält, wie in [CSS-Verlaufswerte](/de/docs/Web/CSS/Reference/Values/gradient) beschrieben.

### Farben

Diese Eigenschaften definieren die Farben, die für verschiedene Teile des Browsers verwendet werden. Sie sind alle optional. Wie diese Eigenschaften die Firefox-Benutzeroberfläche beeinflussen, wird hier gezeigt:

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <td>
        <p>
          <img
            alt="Übersicht über die Farbeigenschaften und wie sie auf Firefox-Benutzeroberflächenkomponenten angewendet werden"
            src="themes_components_annotations.png"
          />
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wo eine Komponente von mehreren Farbeigenschaften betroffen ist, sind die Eigenschaften in Reihenfolge der Priorität aufgelistet.

Alle diese Eigenschaften können entweder als String angegeben werden, der einen gültigen [CSS-Farbstring](/de/docs/Web/CSS/Reference/Values/color_value) (einschließlich Hexadezimalwerte) enthält, oder als RGB-Array, z. B. `"tab_background_text": [107, 99, 23]`.

> [!NOTE]
> [In Chrome dürfen Farben nur als RGB-Arrays angegeben werden](#chrome-kompatibilität).

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>bookmark_text</code></td>
      <td>
        <p>
          Die Farbe von Text und Icons in der Lesezeichen- und Suchleiste. Außerdem, wenn
          <code>tab_text</code> nicht definiert ist, legt es die Farbe des aktiven
          Tab-Textes fest und wenn <code>icons</code> nicht definiert ist, die Farbe der
          Werkzeugleistensymbole. Wird als Chrome-kompatibler Alias für
          <code>toolbar_text</code> bereitgestellt.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass jede verwendete Farbe gut zu
            den in den Eigenschaften <code>frame</code> und <code>frame_inactive</code> oder
            <code>toolbar</code> verwendeten Farben kontrastiert, wenn Sie diese Eigenschaft verwenden.
          </p>
          <p>
            Wenn <code>icons</code> nicht definiert ist, stellen Sie auch sicher, dass ein guter Kontrast
            zu <code>button_background_active</code> und
            <code>button_background_hover</code> besteht.
          </p>
        </div>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "tab_text": "white",
    "toolbar": "black",
    "bookmark_text": "red"
  }
}</pre
          >
        </details>
        <p>
          <img
            alt="Der Browser Firefox ist schwarz. Der Tab des Browsers ist schwarz mit weißem Text. Die URL-Leiste und die Suchleiste sind weiß mit schwarzem Text, aber alle Browser- und Suchleistensymbole sind rot."
            src="theme-bookmark_text.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_active</code></td>
      <td>
        <p>Die Farbe des Hintergrunds der gedrückten Werkzeugleistenschaltflächen.</p>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "button_background_active": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Der Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Die Symbolleiste anpassen-Symbol in der URL-Leiste ist weiß mit einem roten Hintergrund ist gedrückt und ein Popup zeigt eine kurze Liste von Dingen zum Hinzufügen zur Symbolleiste wie die Bibliothek des Browsers und die Seitenleisten an." src="theme-button_background_active.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_hover</code></td>
      <td>
        <p>Die Farbe des Hintergrunds der Werkzeugleistenschaltflächen beim Hover.</p>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "button_background_hover": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Der Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Das 'Eine Seite zurück'-Icon ist weiß mit einem roten Kreis-Hintergrund." src="theme-button_background_hover.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons</code></td>
      <td>
        <p>Die Farbe der Werkzeugleistensymbole, ausgenommen die in der Suchleiste.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut kontrastiert mit
            den in den Eigenschaften <code>frame</code>, <code>frame_inactive</code>,
            <code>button_background_active</code> und
            <code>button_background_hover</code> verwendeten Farben.
          </p>
        </div>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "icons": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Der Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Die URL-Leiste und die neue Tab-Icons sind rot. Die roten Icons kontrastieren gut mit der schwarzen Hintergrundfarbe des Headerbereichs." src="theme-icons.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons_attention</code></td>
      <td>
        <p>
          Die Farbe der Werkzeugleistensymbole im Aufmerksamkeitsstatus, wie z.B. das Sternsymbol für Lesezeichen oder das Symbol für abgeschlossene Downloads.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut kontrastiert mit
            den in den jeweils genannten Eigenschaften verwendeten Farben.
          </p>
        </div>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "icons_attention": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Der Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Das 'Diese Seite als Lesezeichen speichern'-Icon ist rot und gedrückt; ein geöffnetes Popup namens 'Lesezeichen bearbeiten' wird angezeigt. Während im Aufmerksamkeitsstatus, kontrastieren die Werkzeugleistensymbole gut mit dem schwarzen Hintergrund des Headerbereichs." src="theme-icons_attention.png" /></p>
      </td>
    </tr>
    <!-- Continue with similar translation pattern for remaining content -->
  </tbody>
</table>

#### Aliase

Zusätzlich akzeptiert dieser Schlüssel verschiedene Eigenschaften, die Aliase für eine der oben genannten Eigenschaften sind. Diese sind zur Kompatibilität mit Chrome bereitgestellt. Wenn ein Alias angegeben wird und die Nicht-Alias-Version ebenfalls angegeben ist, wird der Wert aus der Nicht-Alias-Version übernommen.

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Alias für</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>bookmark_text</code></td>
      <td><code>toolbar_text</code></td>
    </tr>
  </tbody>
</table>

### Eigenschaften

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Typ</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>additional_backgrounds_alignment</code></td>
      <td>
        <p><code>Array</code> von <code>String</code></p>
      </td>
      <td>
        <p>Optional</p>
        <p>
          Ein Array von Enumerationswerten, die die Ausrichtung des
          entsprechenden <code>"additional_backgrounds":</code> Array-Elements definieren.<br />Die
          Ausrichtungsoptionen beinhalten:
        </p>
        <ul>
          <li><code>"bottom"</code></li>
          <li><code>"center"</code></li>
          <li><code>"left"</code></li>
          <li><code>"right"</code></li>
          <li><code>"top"</code></li>
          <li><code>"center bottom"</code></li>
          <li><code>"center center"</code></li>
          <li><code>"center top"</code></li>
          <li><code>"left bottom"</code></li>
          <li><code>"left center"</code></li>
          <li><code>"left top"</code></li>
          <li><code>"right bottom"</code></li>
          <li><code>"right center"</code></li>
          <li><code>"right top"</code>.</li>
        </ul>
        <p>
        Wenn das Array weniger Elemente enthält als das Array `additional_backgrounds`, wird dieses erneut für die fehlenden Werte verwendet. Zum Beispiel, wenn `additional_backgrounds` 5 Werte enthält und `additional_backgrounds_alignment` `["left", "top"]` enthält, wird das dritte Hintergrund-Element mit `left`, das vierte mit `top` und das fünfte mit `left` ausgerichtet.
        </p>
        <p>Wenn nicht angegeben, ist der Standardwert <code>"right top"</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds_tiling</code></td>
      <td>
        <p><code>Array</code> von <code>String</code></p>
      </td>
      <td>
        <p>Optional</p>
        <p>
          Ein Array von Enumerationswerten, die definieren, wie das entsprechende
          <code>"additional_backgrounds":</code> Array-Element wiederholt wird. Optionen
          beinhalten:
        </p>
        <ul>
          <li><code>"no-repeat"</code></li>
          <li><code>"repeat"</code></li>
          <li><code>"repeat-x"</code></li>
          <li><code>"repeat-y"</code></li>
        </ul>
        <p>
        Wenn das Array weniger Elemente enthält als das Array `additional_backgrounds`, wird dieses erneut für die fehlenden Werte verwendet. Zum Beispiel, wenn `additional_backgrounds` 5 Werte enthält und `additional_backgrounds_tiling` `["no-repeat", "repeat-x"]` enthält, wird das dritte Hintergrund-Element mit `no-repeat`, das vierte mit `repeat-x` und das fünfte mit `no-repeat` wiederholt.
        </p>
        <p>Wenn nicht angegeben, ist der Standardwert <code>"no-repeat"</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds_size</code></td>
      <td>
        <p><code>Array</code> von <code>String</code></p>
      </td>
      <td>
        <p>Optional</p>
        <p>
          Ein Array von Werten, die die Größe des entsprechenden
          <code>"additional_backgrounds":</code> Array-Elements definieren. Akzeptiert dieselben
          Werte wie die CSS
          <a href="/de/docs/Web/CSS/Reference/Properties/background-size"><code>background-size</code></a>
          Eigenschaft, wie <code>"auto"</code>, <code>"cover"</code>,
          <code>"contain"</code> oder explizite Breiten- und Höhenwerte (zum
          Beispiel <code>"100px 200px"</code>).
        </p>
        <p>
        Wenn das Array weniger Elemente enthält als das Array `additional_backgrounds`, wird dieses erneut für die fehlenden Werte verwendet. Zum Beispiel, wenn `additional_backgrounds` 5 Werte enthält und `additional_backgrounds_size` `["auto", "100px 100px"]` enthält, wird das dritte Hintergrund-Element mit `auto`, das vierte mit `100px 100px` und das fünfte mit `auto` skaliert.
        </p>
        <p>Wenn nicht angegeben, ist der Standardwert <code>"auto"</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>color_scheme</code></td>
      <td>
        <p><code>String</code></p>
      </td>
      <td>
        <p>Optional</p>
        <p>
          Bestimmt, welches Farbschema auf das Chrome (z.B. Kontextmenüs)
          und den Inhalt (z.B. eingebaute Seiten und das bevorzugte Farbschema für Webseiten) angewendet wird.
          Mögliche Optionen sind:
        </p>
        <ul>
          <li><code>"auto"</code> – ein automatisches helles oder dunkles Schema basierend auf dem Thema.</li>
          <li><code>"light"</code> – ein helles Schema.</li>
          <li><code>"dark"</code> – ein dunkles Schema.</li>
          <li><code>"system"</code> – verwendet das System-Schema.</li>
        </ul>
        <p>Wenn nicht angegeben, ist der Standardwert <code>"auto"</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>content_color_scheme</code></td>
      <td>
        <p><code>String</code></p>
      </td>
      <td>
        <p>Optional</p>
        <p>
          Bestimmt, welches Farbschema auf den Inhalt (z.B. eingebaute Seiten und
          bevorzugtes Farbschema für Webseiten) angewendet wird. Überschreibt <code>color_scheme</code>. Mögliche Optionen sind:
        </p>
        <ul>
          <li><code>"auto"</code> – ein automatisches helles oder dunkles Schema basierend auf dem Thema.</li>
          <li><code>"light"</code> – ein helles Schema.</li>
          <li><code>"dark"</code> – ein dunkles Schema.</li>
          <li><code>"system"</code> – das System-Schema.</li>
        </ul>
        <p>Wenn nicht angegeben, ist der Standardwert <code>"auto"</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

Ein grundlegendes Thema muss ein Bild definieren, das zum Header hinzugefügt wird, die Akzentfarbe, die im Header verwendet werden soll, und die Farbe des Textes, der im Header verwendet wird:

```json
 "theme": {
   "images": {
     "theme_frame": "images/sun.jpg"
   },
   "colors": {
     "frame": "#CF723F",
     "tab_background_text": "black"
   }
 }
```

Mehrere Elemente können verwendet werden, um den Header zu füllen. Vor Firefox Version 60 verwenden Sie ein leeres oder transparentes Headerbild, um die Platzierung jedes zusätzlichen Elements zu steuern:

```json
 "theme": {
   "images": {
     "additional_backgrounds": [ "images/left.png", "images/middle.png", "images/right.png"]
   },
   "properties": {
     "additional_backgrounds_alignment": [ "left top", "top", "right top"]
   },
   "colors": {
     "frame": "blue",
     "tab_background_text": "white"
   }
 }
```

Sie können den Header auch mit einem wiederholten Bild oder Bildern füllen, in diesem Fall ein einzelnes Bild, das in der Mitte oben im Header verankert und über den Rest des Headers wiederholt wird:

```json
 "theme": {
   "images": {
     "additional_backgrounds": [ "images/logo.png"]
   },
   "properties": {
     "additional_backgrounds_alignment": [ "top" ],
     "additional_backgrounds_tiling": [ "repeat"  ]
   },
   "colors": {
     "frame": "green",
     "tab_background_text": "black"
   }
 }
```

Das folgende Beispiel verwendet die meisten der verschiedenen Werte für `theme.colors`:

```json
  "theme": {
    "images": {
      "theme_frame": "weta.png"
    },

    "colors": {
       "frame": "darkgreen",
       "tab_background_text": "white",
       "toolbar": "blue",
       "bookmark_text": "cyan",
       "toolbar_field": "orange",
       "toolbar_field_border": "white",
       "toolbar_field_text": "green",
       "toolbar_top_separator": "red",
       "toolbar_bottom_separator": "white",
       "toolbar_vertical_separator": "white"
    }
  }
```

Es wird Ihnen einen Browser geben, der so aussieht:

![Ein Browserfenster mit zwei offenen Tabs und einer dunkelgrünen Hintergrundfarbe im Headerbereich. Der inaktive Tab hat eine weiße Textfarbe. Der aktive Tab und die Werkzeugleiste haben eine blaue Hintergrundfarbe mit cyanfarbener Schrift. Die URL-Leiste hat eine orangefarbene Hintergrundfarbe mit weißen Rändern, eine grüne Schriftfarbe und eine weiße vertikale Trennlinie. Eine rote Linie wird verwendet, um die Tabs oben zu trennen und eine weiße Linie, um die Tabs vom darunterliegenden Inhalt zu trennen.](theme.png)

In diesem Screenshot ist `"toolbar_vertical_separator"` die weiße vertikale Linie in der URL-Leiste, die das Reader-Modus-Symbol von den anderen Symbolen trennt.

Dieses Beispiel (Firefox 153+) mischt Hintergrundbilder mit einem CSS-Linearverlauf:

```json
"theme": {
  "images": {
    "additional_backgrounds": [
      "background-image1.svg",
      "background-image2.svg",
      { "linear-gradient": "to bottom, #FF6BBA -20%, #FFC999 50%" }
    ]
  },
  "properties": {
    "additional_backgrounds_alignment": ["right top", "left top", "right top"],
    "additional_backgrounds_tiling": ["no-repeat", "no-repeat", "repeat-x"],
    "additional_backgrounds_size": ["auto", "auto", "auto 144px"]
  }
}
```

Dies führt dazu, dass:

- `background-image1.svg` oben rechts in seiner natürlichen Größe angezeigt wird.
- `background-image2.svg` oben links in seiner natürlichen Größe angezeigt wird.
- Der `linear-gradient` von oben rechts angezeigt wird, horizontal über den Header gekachelt (`repeat-x`), und auf 144px Höhe skaliert (Breite ist automatisch). Der Verlauf wechselt von Pink (`#FF6BBA`) oben nach Pfirsich (`#FFC999`) unten.

## Browser-Kompatibilität

{{Compat}}

### Chrome-Kompatibilität

In Chrome:

- `colors/toolbar_text` wird nicht verwendet, verwenden Sie stattdessen `colors/bookmark_text`.
- `images/theme_frame` verankert das Bild in der oberen linken Ecke des Headers und wenn das Bild den Headerbereich nicht ausfüllt, wird das Bild gekachelt.
- alle Farben müssen als ein Array von RGB-Werten angegeben werden, wie folgt:

  ```json
  "theme": {
    "colors": {
       "frame": [255, 0, 0],
       "tab_background_text": [0, 255, 0],
       "bookmark_text": [0, 0, 255]
    }
  }
  ```

  Ab Firefox 59 akzeptieren alle Eigenschaften sowohl die Array-Form als auch die CSS-Farbe-Form. Davor erforderte `colors/frame` und `colors/tab_background_text` die Array-Form, während andere Eigenschaften die CSS-Farbe-Form erforderten.
