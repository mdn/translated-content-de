---
title: theme
slug: Mozilla/Add-ons/WebExtensions/manifest.json/theme
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Erforderlich</th>
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

Verwenden Sie den Schlüssel `theme`, um ein statisches Thema für Firefox zu definieren.

> [!NOTE]
> Wenn Sie ein Thema mit einer Erweiterung einbinden möchten, sehen Sie sich die {{WebExtAPIRef("theme")}} API an.

> [!NOTE]
> Seit Mai 2019 müssen Themes signiert sein, um installiert zu werden ([Firefox-Bug 1545109](https://bugzil.la/1545109)). Weitere Informationen finden Sie unter [Signierung und Verteilung Ihres Add-ons](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon).

> [!NOTE]
> Eine neue Version von Firefox für Android, basierend auf GeckoView, ist in Entwicklung. Eine [Vorabversion](https://play.google.com/store/apps/details?id=org.mozilla.fenix) ist verfügbar. Die Vorabversion unterstützt keine Themes.

## Bildformate

Die folgenden Bildformate werden in allen Theme-Bildeigenschaften unterstützt:

- JPEG
- PNG
- APNG
- SVG (animierte SVGs werden ab Firefox 59 unterstützt)
- GIF (animierte GIFs werden nicht unterstützt)

## Syntax

Der `theme`-Schlüssel ist ein Objekt, das die folgenden Eigenschaften annimmt:

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
        <p>Optional ab Firefox 60. Erforderlich vor Firefox 60.</p>
        <p>
          Ein JSON-Objekt, dessen Eigenschaften die Bilder darstellen, die in
          verschiedenen Teilen des Browsers angezeigt werden sollen. Siehe
          <code><a href="#images">images</a></code> für Details zu den
          Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>colors</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Erforderlich.</p>
        <p>
          Ein JSON-Objekt, dessen Eigenschaften die Farben verschiedener Teile
          des Browsers darstellen. Siehe <code><a href="#colors">colors</a></code> für Details zu
          den Eigenschaften, die dieses Objekt enthalten kann.
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
          <code>"additional_backgrounds"</code>-Bilder angezeigt werden und wie Farbschemata angewendet werden.
          Siehe <code><a href="#properties">properties</a></code> für Details zu den
          Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### images

Alle URLs sind relativ zur `manifest.json`-Datei und können nicht auf eine externe URL verweisen.

Bilder sollten 200 Pixel hoch sein, um sicherzustellen, dass sie immer den Header-Bereich vertikal ausfüllen.

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
      <td><code>String</code></td>
      <td>
        <p>
          Die URL eines Vordergrundbildes, das dem Header-Bereich hinzugefügt
          und an der oberen rechten Ecke des Headers verankert wird.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Chrome verankert das Bild oben links im
            Header, und wenn das Bild den Header-Bereich nicht ausfüllt, wird
            das Bild gekachelt.
          </p>
        </div>
        <p>
          Optional in Desktop Firefox 60 und höher. Erforderlich in Firefox für Android.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds</code></td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        <div class="warning">
          <p>
            <strong>Warnung:</strong> Die
            <code>additional_backgrounds</code> Eigenschaft ist experimentell.
            Sie wird derzeit in freigegebenen Versionen von Firefox akzeptiert,
            aber ihr Verhalten kann sich ändern. Sie wird in Firefox für Android
            nicht unterstützt.
          </p>
        </div>
        <p>
          Ein Array von URLs für zusätzliche Hintergrundbilder, die dem
          Header-Bereich hinzugefügt und hinter dem
          <code>"theme_frame":</code>-Bild angezeigt werden. Diese Bilder legen
          das erste Bild im Array oben, das letzte Bild im Array unten.
        </p>
        <p>Optional.</p>
        <p>
          Standardmäßig sind alle Bilder oben rechts im Header-Bereich
          verankert, aber deren Ausrichtung und Wiederholungsverhalten können
          durch Eigenschaften von <code>"properties":</code> gesteuert werden.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### colors

Diese Eigenschaften definieren die Farben, die für verschiedene Teile des Browsers verwendet werden. Sie sind alle optional. Hier wird gezeigt, wie diese Eigenschaften die Firefox-Benutzeroberfläche beeinflussen:

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <td>
        <p>
          <img
            alt="Übersicht über die Farbeigenschaften und wie sie auf die Firefox UI-Komponenten angewendet werden"
            src="themes_components_annotations.png"
          />
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wo ein Komponent von mehreren Farbeigenschaften beeinflusst wird, sind die Eigenschaften in der Reihenfolge der Priorität aufgelistet.

Alle diese Eigenschaften können entweder als Zeichenfolge angegeben werden, die einen gültigen [CSS-Farbwert](/de/docs/Web/CSS/color_value) (einschließlich hexadezimal) enthält, oder als RGB-Array, wie `"tab_background_text": [ 107 , 99 , 23 ]`.

> [!NOTE]
> [In Chrome können Farben nur als RGB-Arrays angegeben werden](#chrome-kompatibilität).
>
> In Firefox für Android können Farben wie folgt angegeben werden:
>
> - vollständige hexadezimale Notation, das heißt #RRGGBB ausschließlich. _alpha_ und verkürzte Syntax, wie in #RGB\[A], wird nicht unterstützt.
> - [Funktionale Notation](/de/docs/Web/CSS/color_value) (RGB-Arrays) für Themes, die auf Firefox 68.2 oder später abzielen.
>
> Farben für Firefox für Android-Themes können nicht unter Verwendung von Farbnamen angegeben werden.

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
          Die Farbe des Textes und der Symbole in den Lesezeichen- und
          Suchleisten. Wenn <code>tab_text</code> nicht definiert ist, wird
          damit die Farbe des aktiven Tab-Textes und wenn <code>icons</code>
          nicht definiert ist, die Farbe der Symbolleistensymbole festgelegt.
          Wird als Chrome-kompatibler Alias für <code>toolbar_text</code>
          bereitgestellt.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass jede verwendete
            Farbe gut mit denen in <code>frame</code> und
            <code>frame_inactive</code> oder <code>toolbar</code>, falls Sie
            diese Eigenschaft verwenden, kontrastiert.
          </p>
          <p>
            Wo <code>icons</code> nicht definiert ist, stellen Sie auch sicher,
            dass ein guter Kontrast zu <code>button_background_active</code>
            und <code>button_background_hover</code> besteht.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
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
            alt="Die Firefox-Benutzeroberfläche ist schwarz. Der Tab-Bereich ist schwarz mit weißem Text. Die URL-Leiste und die Suchleiste sind weiß mit schwarzem Text, aber alle Symbole in der Browser- und Suchleiste sind rot."
            src="theme-bookmark_text.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_active</code></td>
      <td>
        <p>Die Farbe des Hintergrunds der gedrückten Symbolleistenschaltflächen.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Die Firefox-Benutzeroberfläche ist schwarz. Die Tabs und die URL-Leiste sind grau mit weißem Text. Das 'Toolbar anpassen'-Icon in der URL-Leiste ist weiß mit einem roten Hintergrund und wird gedrückt, ein Popup wird geöffnet, das eine kurze Liste von Elementen anzeigt, die zur Toolbar hinzugefügt werden können, wie die Browser-Bibliothek und die Seitenleisten." src="theme-button_background_active.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_hover</code></td>
      <td>
        <p>Die Farbe des Hintergrunds der Symbolleistenschaltflächen beim Überfahren.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Die Firefox-Benutzeroberfläche ist schwarz. Die Tabs und die URL-Leiste sind grau mit weißem Text. Das 'Zurück'-Icon ist weiß mit einem roten Kreis-Hintergrund." src="theme-button_background_hover.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons</code></td>
      <td>
        <p>Die Farbe der Symbolleistensymbole, mit Ausnahme derjenigen in der Suchleiste.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete
            Farbe gut mit denen in <code>frame</code>,
            <code>frame_inactive</code>, <code>button_background_active</code>
            und <code>button_background_hover</code> kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Die Firefox-Benutzeroberfläche ist schwarz. Die Tabs und die URL-Leiste sind grau mit weißem Text. Die URL-Leiste und das 'Neuen Tab öffnen' Icon sind rot. Die roten Icons kontrastieren gut mit der schwarzen Hintergrundfarbe des Headers." src="theme-icons.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons_attention</code></td>
      <td>
        <p>
          Die Farbe der Symbolleistensymbole im Aufmerksamkeitszustand, wie das
          Stern-Lesezeichen-Symbol oder das fertige Download-Symbol.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete
            Farbe gut mit denen in <code>frame</code>,
            <code>frame_inactive</code>, <code>button_background_active</code>
            und <code>button_background_hover</code> kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Die Firefox-Benutzeroberfläche ist schwarz. Die Tabs und die URL-Leiste sind grau mit weißem Text. Das 'Diese Seite als Lesezeichen speichern' Symbol ist rot und gedrückt, ein offenes Popup mit dem Namen 'Dieses Lesezeichen bearbeiten' wird angezeigt. Während sich das Symbol im Aufmerksamkeitszustand befindet, kontrastieren die Symbolleistensymbole gut mit dem schwarzen Hintergrund des Headers." src="theme-icons_attention.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame</code></td>
      <td>
        <p>
          Die Farbe des Header-Bereichs Hintergrunds, der in dem Teil des Headers
          angezeigt wird, der nicht durch die in<code>"theme_frame"</code> und <code>"additional_backgrounds"</code> angegebenen Bilder bedeckt oder sichtbar ist.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "red",
     "tab_background_text": "white"
  }
}</pre
          >
        </details>
        <p><img alt="Die Firefox-Benutzeroberfläche ist rot mit weißem Text. Die Tabs sind heller rot, ebenfalls mit weißem Text. Die URL-Leiste ist sehr hellrot mit schwarzem Text" src="theme-frame.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame_inactive</code></td>
      <td>
        <p>
          Die Farbe des Header-Bereichs Hintergrunds, wenn das Browserfenster
          inaktiv ist, angezeigt in dem Teil des Headers, der nicht durch die in <code>"theme_frame"</code> und
          <code>"additional_backgrounds"</code> angegebenen Bilder bedeckt oder sichtbar ist.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "red",
     "frame_inactive": "gray",
     "tab_text": "white"
  }
}</pre
          >
        </details>
        <p>
          <img
            alt="Die Firefox-Benutzeroberfläche ist grau. Die Tabs und die URL-Leiste sind heller grau. Der Tab-Text ist weiß und die URL-Leistensymbole sind dunkler grau."
            src="theme-frame_inactive.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_background</code></td>
      <td>
        <p>Die Hintergrundfarbe der neuen Tab-Seite.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_background": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Firefox zeigt eine neue Tab-Seite an. Der Hintergrund der Seite ist rot." src="ntp-background.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_card_background</code></td>
      <td>
        <p>Die Hintergrundfarbe der Karte auf der neuen Tab-Seite.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_card_background": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Firefox zeigt eine neue Tab-Seite an. Auf der Seite ist der Hintergrund der Suchleiste und der Schnellzugriffstasten rot." src="ntp-card-background.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_text</code></td>
      <td>
        <p>Die Textfarbe auf der neuen Tab-Seite.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete
            Farbe gut mit denen in <code>ntp_background</code> und <code>ntp_card_background</code> kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_text": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Firefox zeigt eine neue Tab-Seite an. Auf der Seite ist der Text rot." src="ntp-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Popups (wie dem Dropdown-Menü der URL-Leiste
          und den Pfeil-Panels).
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Die Firefox-Benutzeroberfläche ist schwarz. Die Tabs und die URL-Leiste sind heller grau mit weißen Symbolen und Text. Das 'Diese Seite als Lesezeichen speichern' Symbol ist blau und gedrückt, ein offenes Popup mit dem Namen 'Dieses Lesezeichen bearbeiten' wird angezeigt, mit rotem Hintergrund. Die Hintergrundfarbe des Popups ist rot." src="theme-popup.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_border</code></td>
      <td>
        <p>Die Rahmenfarbe von Popups.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup": "black",
     "popup_text": "white",
     "popup_border": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Die Firefox-Benutzeroberfläche ist schwarz. Die Tabs und die URL-Leiste sind heller grau mit weißen Symbolen und Text. Das 'Diese Seite als Lesezeichen speichern' Symbol ist blau und gedrückt, ein offenes Popup mit dem Namen 'Dieses Lesezeichen bearbeiten' wird angezeigt, mit rotem Rand und schwarzem Hintergrund. Der Rand des Popups ist rot." src="theme-popup_border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von mit der Tastatur hervorgehobenen Elementen
          innerhalb von Popups (wie dem ausgewählten Dropdown-Element der URL-Leiste).
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Es wird empfohlen,
            <code>popup_highlight_text</code> zu definieren, um die
            Standardtextfarbe des Browsers auf verschiedenen Plattformen zu
            überschreiben.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup_highlight": "red",
     "popup_highlight_text": "white"
  }
}</pre
          >
        </details>
        <p><img alt="Screenshot von Firefox ist schwarz. Die Tabs und die URL-Leiste sind heller grau mit weißen Symbolen und Text. Ein Popup mit Suchergebnissen wird angezeigt, wobei das hervorgehobene Element einen roten Hintergrund hat. Die Hintergrundfarbe des hervorgehobenen Elements im Popup ist rot." src="theme-popup_highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight_text</code></td>
      <td>
        <p>Die Textfarbe von hervorgehobenen Elementen innerhalb von Popups.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete
            Farbe gut mit der in <code>popup_highlight</code> verwendeten
            kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup_highlight": "black",
     "popup_highlight_text": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Die Firefox-Benutzeroberfläche ist schwarz. Die Tabs und die URL-Leiste sind heller grau mit weißen Symbolen und Text. Ein Popup mit Suchergebnissen wird angezeigt, wobei das hervorgehobene Element einen Text in Rot und einen schwarzen Hintergrund hat. Die Textfarbe des hervorgehobenen Elements kontrastiert gut mit der schwarzen Hintergrundfarbe dieses Elements." src="theme-popup_highlight_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_text</code></td>
      <td>
        <p>Die Textfarbe von Popups.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete
            Farbe gut mit der in <code>popup</code> verwendeten kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup": "black",
     "popup_text": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Die Firefox-Benutzeroberfläche ist schwarz. Die Tabs und die URL-Leiste sind heller grau mit weißen Symbolen und Text. Ein Popup mit Suchergebnissen wird angezeigt, wobei die Textfarbe der Elemente rot ist. Die Textfarbe kontrastiert gut mit der schwarzen Hintergrundfarbe des Popups." src="popup_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar</code></td>
      <td>
        <p>Die Hintergrundfarbe der Seitenleiste.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar": "red",
     "sidebar_highlight": "white",
     "sidebar_highlight_text": "green",
     "sidebar_text": "white"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Nahaufnahme-Screenshot eines geöffneten Seitenleistenfensters des Browsers. Die Hintergrundfarbe der Seitenleiste ist rot." src="sidebar-colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_border</code></td>
      <td>
        <p>Die Rahmen- und Trennlinie der Browser-Seitenleiste.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar_border": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Nahaufnahme der Firefox-Browser-Lesezeichen-Seitenleiste mit einem roten horizontalen Separator zwischen dem Titelbereich der Seitenleiste und dem Menü der Seitenleiste. Die Rahmen- und Trennlinie der Seitenleiste ist rot." src="sidebar-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight</code></td>
      <td>
        <p>Die Hintergrundfarbe von hervorgehobenen Zeilen in integrierten Seitenleisten.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar_highlight": "red",
     "sidebar_highlight_text": "white"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Nahaufnahme der Firefox-Browser-Lesezeichen-Seitenleiste mit einem hervorgehobenen Element. Die Hintergrundfarbe einer hervorgehobenen Zeile in der Seitenleiste ist rot mit weißem Text." src="sidebar-highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight_text</code></td>
      <td>
        <p>Die Textfarbe von hervorgehobenen Zeilen in Seitenleisten.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete
            Farbe gut mit der in <code>sidebar_highlight</code> verwendeten
            kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "sidebar_highlight": "pink",
    "sidebar_highlight_text": "red",
  }
}</pre
          >
        </details>
        <p><img alt="Ein Nahaufnahme der Firefox-Browser-Lesezeichen-Seitenleiste mit einem hervorgehobenen Element. Die Farbe des Textes einer hervorgehobenen Zeile in der Seitenleiste ist rot. Die Textfarbe kontrastiert gut mit der rosa Hintergrundfarbe der hervorgehobenen Zeile." src="sidebar-highlight-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_text</code></td>
      <td>
        <p>Die Textfarbe der Seitenleisten.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete
            Farbe gut mit der in <code>sidebar</code> verwendeten kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar": "red",
     "sidebar_highlight": "white",
     "sidebar_highlight_text": "green",
     "sidebar_text": "white"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Nahaufnahme-Screenshot eines geöffneten Seitenleistenfensters des Browsers. Die Farbe des Textes innerhalb der Seitenleiste ist weiß. Die Textfarbe kontrastiert gut mit dem roten Hintergrund der Seitenleiste." src="sidebar-colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td>
        <code>tab_background_separator</code> {{Deprecated_Inline}}
      </td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong> <code>tab_background_separator</code> wird
            ab Firefox 89 nicht unterstützt.
          </p>
        </div>
        <p>Die Farbe des vertikalen Trenners von Hintergrund-Tabs.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "tab_background_separator": "red"
  }
}</pre
          >
        </details>
        <p>
          <img
            alt="Ein Nahaufnahme von Tabs im Browser, um den Trennstrich hervorzuheben."
            src="theme-tab-background-separator.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>tab_background_text</code></td>
      <td>
        <p>
          Die Farbe des Textes, der in den inaktiven Seitentabs angezeigt wird.
          Wenn <code>tab_text</code> oder <code>bookmark_text</code> nicht
          angegeben ist, gilt dies für den aktiven Tab-Text.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete
            Farbe gut mit denen in <code>tab_selected</code> oder
            <code>frame</code> und <code>frame_inactive</code> kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "white",
    "tab_background_text": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste sind weiß mit roten Symbolen und rotem Text. Die Farbe des Textes auf dem geöffneten Tab ist rot. Die Textfarbe kontrastiert gut mit der schwarzen Hintergrundfarbe des Tabs." src="theme-tab_background_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_line</code></td>
      <td>
        <p>Die Farbe der Linie des ausgewählten Tabs.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "tab_line": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Die Firefox-Benutzeroberfläche ist schwarz. Die Tabs und die URL-Leiste sind dunkler grau mit helleren grauen Symbolen und weißem Text. Der ausgewählte Tab hat eine rote Umrandung." src="theme-tab_line.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_loading</code></td>
      <td>
        <p>Die Farbe des Ladeindikators und der Ladeblitzes des Tabs.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "tab_loading": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste sind dunkler grau mit weißen Symbolen und Text. Im ausgewählten Tab ist ein animierter Ladeindikator rot." src="theme-tab_loading.gif" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_selected</code></td>
      <td>
        <p>
          Die Hintergrundfarbe des ausgewählten Tabs. Wenn nicht in Verwendung, wird die Farbe des ausgewählten Tabs von <code>frame</code> und <code>frame_inactive</code> gesetzt.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "images": {
  "theme_frame": "weta.png"
},
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "tab_selected": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste sind dunkler grau mit weißen Symbolen und Text. Der ausgewählte Tab hat einen roten Hintergrund und weißen Text." src="theme-tab_selected.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_text</code></td>
      <td>
        <p>
          Ab Firefox 59 repräsentiert es die Textfarbe für den ausgewählten Tab. Wenn <code>tab_line</code> nicht angegeben ist, definiert es auch die Farbe der ausgewählten Tab-Linie.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit denen in <code>tab_selected</code> oder <code>frame</code> und <code>frame_inactive</code> kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "images": {
  "theme_frame": "weta.png"
},
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "tab_selected": "white",
     "tab_text": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Die Firefox-Benutzeroberfläche hat ein Bild eines Insekten-Themas. Die URL-Leiste ist heller grau mit weißen Symbolen. Der ausgewählte Tab-Text ist rot mit weißem Hintergrund." src="theme-tab_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar</code></td>
      <td>
        <p>
          Die Hintergrundfarbe für die Navigationsleiste, die Lesezeichenleiste und den ausgewählten Tab.
        </p>
        <p>Dies setzt auch die Hintergrundfarbe der "Suchen"-Leiste.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "red",
    "tab_background_text": "white"
  }
}</pre
          >
        </details>
        <p><img alt="Die Firefox-Benutzeroberfläche ist schwarz. Die Tabs, die Suchleiste und die URL-Leiste sind rot mit weißem Text und weißen Symbolen, außer in der Suchleiste, wo Text und Symbol schwarz sind." src="toolbar.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_bottom_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie, die die Unterseite der Toolbar vom darunterliegenden Bereich trennt.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar_bottom_separator": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Die Firefox-Benutzeroberfläche ist schwarz. Die Tabs und die URL-Leiste sind heller grau mit weißen Text- und Symbolleisten. Eine horizontale rote Linie trennt die Unterseite der Toolbar vom Anfang der Anzeige der Webseite." src="theme-toolbar_bottom_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field</code></td>
      <td>
        <p>
          Die Hintergrundfarbe für Felder in der Toolbar, wie die des URL-Felds.
        </p>
        <p>
          Dies setzt auch die Hintergrundfarbe des
          <strong>Suchbereichs</strong> Feldes.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar_field": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Die Firefox-Benutzeroberfläche ist schwarz. Die Tabs, die Suchleiste und die URL-Leiste sind heller grau mit weißen Text- und Symbolleisten. Die Hintergrundfarbe des URL-Feldes ist rot. Die Suchleiste ist weiß mit schwarzem Text. Das Suchfeld hat einen roten Hintergrund mit schwarzem Text." src="toolbar-field.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border</code></td>
      <td>
        <p>Die Rahmenfarbe für Felder in der Toolbar.</p>
        <p>
          Dies setzt auch die Rahmenfarbe des
          <strong>Suchbereichs</strong> Feldes.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "black",
    "tab_background_text": "white",
    "toolbar_field": "black",
    "toolbar_field_text": "white",
    "toolbar_field_border": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Die Firefox-Benutzeroberfläche ist schwarz. Die Tabs, die Such- und die URL-Leiste sind schwarz mit weißem Text und weißen Symbolleisten. Die URL-Leiste und das Suchfeld haben rote Rahmen." src="toolbar-field-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border_focus</code></td>
      <td>
        <p>Die fokussierte Rahmenfarbe für Felder in der Toolbar.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "black",
    "tab_background_text": "white",
    "toolbar_field": "black",
    "toolbar_field_text": "white",
    "toolbar_field_border_focus": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Die Firefox-Benutzeroberfläche ist schwarz. Die Tabs und die URL-Leiste sind schwarz mit weißem Text und weißen Symbolleisten. Das URL-Feld ist fokussiert und hat einen roten Rahmen." src="theme-toolbar_field_border_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_focus</code></td>
      <td>
        <p>
          Die fokussierte Hintergrundfarbe für Felder in der Toolbar, wie z.B. dem URL-Bereich.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "black",
    "tab_background_text": "white",
    "toolbar_field": "black",
    "toolbar_field_text": "white",
    "toolbar_field_focus": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Die Firefox-Benutzeroberfläche ist schwarz. Die Tabs, die Such- und die URL-Leiste sind schwarz mit weißem Text und weißen Symbolleisten. Die Hintergrundfarbe der fokussierten URL-Leiste ist rot und der Text ist weiß." src="theme-toolbar_field_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight</code></td>
      <td>
        Die Hintergrundfarbe zur Anzeige der aktuellen Auswahl von Text im
        URL-Feld (und dem Suchfeld, wenn es so konfiguriert ist, dass es getrennt ist).
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "toolbar_field": "rgb(255 255 255 / 91%)",
    "toolbar_field_text": "rgb(0 100 0)",
    "toolbar_field_highlight": "rgb(180 240 180 / 90%)",
    "toolbar_field_highlight_text": "rgb(0 80 0)"
  }
}</pre
          >
        </details>
        <p>
          <img
            alt="Die Firefox-Benutzeroberfläche ist weiß. Die Tabs und die URL-Leiste sind weiß mit Text und Symbolen in schwarz. Das URL-Feld ist fokussiert und blau umrahmt und der Text im URL-Feld ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier gibt das <code>toolbar_field_highlight</code>-Feld an, dass die
          Hervorhebungsfarbe ein helles Grün ist, während der Text mit
          <code>toolbar_field_highlight_text</code> auf ein dunkel-mittelgrünes
          Grün gesetzt wird.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight_text</code></td>
      <td>
        <p>
          Die Farbe, die verwendet wird, um Text zu zeichnen, der im URL-Feld
          (und dem Suchfeld, wenn es so konfiguriert ist, dass es getrennt ist) derzeit hervorgehoben ist.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete
            Farbe gut mit denen in <code>toolbar_field_highlight</code>
            kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "toolbar_field": "rgb(255 255 255 / 91%)",
    "toolbar_field_text": "rgb(0 100 0)",
    "toolbar_field_highlight": "rgb(180 240 180 / 90%)",
    "toolbar_field_highlight_text": "rgb(0 80 0)"
  }
}</pre
          >
        </details>
        <p>
          <img
            alt="Die Firefox-Benutzeroberfläche ist weiß. Die Tabs und die URL-Leiste sind weiß mit Text und Symbolen in schwarz. Das URL-Feld ist fokussiert und blau umrahmt und der Text im URL-Feld ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier wird das <code>toolbar_field_highlight_text</code>-Feld
          verwendet, um die Textfarbe auf ein dunkel-mittelgrünes Grün zu
          setzen, während die Hervorhebungsfarbe ein helles Grün ist.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_separator</code> {{Deprecated_Inline}}</td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong> <code>toolbar_field_separator</code> wird
            ab Firefox 89 nicht unterstützt.
          </p>
        </div>
        <p>
          Die Farbe der Trennstriche innerhalb des URL-Felds. In Firefox 58
          wurde dies als <code>toolbar_vertical_separator</code> implementiert.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "black",
    "tab_background_text": "white",
    "toolbar_field_separator": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Die Firefox-Benutzeroberfläche ist schwarz. Die Tabs und die URL-Leiste sind schwarz mit weißem Text und weißen Symbolleisten. Innerhalb des weißen URL-Felds, nach dem Lesemodus-Symbol ein roter vertikaler Trennstrich, der die restlichen Symbole der URL-Leiste trennt. Die Farbe der vertikalen Trennlinie im URL-Feld ist rot." src="theme-toolbar_field_separator.png" /></p>
        <p>
          In diesem Screenshot ist <code>"toolbar_vertical_separator"</code>
          die rote vertikale Linie im URL-Feld, die das Lesezeichen-Symbol von
          den anderen Symbolen trennt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text</code></td>
      <td>
        <p>
          Die Farbe des Textes in Feldern in der Toolbar, wie dem URL-Bereich. Dies
          setzt auch die Farbe des Textes im
          <strong>Suchbereich</strong>-Feld.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete
            Farbe gut mit denen in <code>toolbar_field</code> kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "black",
    "tab_background_text": "white",
    "toolbar_field": "black",
    "toolbar_field_text": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste sind schwarz mit weißem Text und weißen Symbolleisten. Der Text im URL-Feld ist rot. Die Symbole und das Suchfeld haben roten Text mit schwarzem Hintergrund." src="toolbar-field-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text_focus</code></td>
      <td>
        <p>
          Die Farbe des Textes in fokussierten Feldern in der Toolbar, wie dem
          URL-Bereich.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete
            Farbe gut mit denen in <code>toolbar_field_focus</code>
            kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "black",
    "tab_background_text": "white",
    "toolbar_field": "black",
    "toolbar_field_text": "white",
    "toolbar_field_text_focus": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit zwei geöffneten Tabs. Der Browser ist schwarz. Die Tabs und die URL-Leiste sind schwarz mit weißem Text und weißen Symbolleisten. Die URL-Leiste hat Fokus; der Text und die Symbole der Leiste sind rot mit schwarzem Hintergrund." src="theme-toolbar_field_text_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_text</code></td>
      <td>
        <p>
          Die Farbe des Symbolleisten-Textes. Dies setzt auch die Farbe des
          Textes in der "Suchen"-Leiste.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Für die Kompatibilität mit Chrome
            verwenden Sie den Alias <code>bookmark_text</code>.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar": "black",
    "toolbar_text": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs, die Suchleiste und die URL-Leiste sind schwarz mit rotem Text und roten Symbolleisten. Der Text im aktiven Tab, in der Navigationsleiste und in der Suchleiste ist rot." src="toolbar-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_top_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie, die die Oberseite der Toolbar vom darüber
          liegenden Bereich trennt.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar": "black",
    "toolbar_top_separator": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste sind schwarz mit weißem Text und weißen Symbolleisten. Eine rote Linie trennt die Oberseite der URL-Leiste vom Browser." src="theme-toolbar_top_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_vertical_separator</code></td>
      <td>
        <p>
          Die Farbe des Trenners in der Lesezeichenleiste. In Firefox 58
          entspricht dies der Farbe der Trennstriche innerhalb der URL-Leiste.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar": "black",
    "toolbar_vertical_separator": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste sind schwarz mit weißem Text und weißen Symbolleisten. Die Farbe der vertikalen Linie, die die Lesezeichenleiste vom rechten Inhalt trennt, ist rot." src="theme-toolbar_vertical_separator.png" /></p>
      </td>
    </tr>
  </tbody>
</table>

#### Aliase

Zusätzlich akzeptiert dieser Schlüssel verschiedene Eigenschaften, die Aliase für eine der oben genannten Eigenschaften sind. Diese werden für die Kompatibilität mit Chrome bereitgestellt. Wenn ein Alias angegeben ist und die Nicht-Alias-Version ebenfalls angegeben ist, wird der Wert von der Nicht-Alias-Version übernommen.

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

### properties

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
          Ein Array von Enum-Werten, das die Ausrichtung des entsprechenden
          <code>"additional_backgrounds":</code>-Arrayelements definiert.<br />Die
          Ausrichtungsoptionen umfassen:
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
        <p>Wenn nicht angegeben, wird standardmäßig <code>"right top"</code> verwendet.</p>
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
          Ein Array von Enum-Werten, das definiert, wie das entsprechende
          <code>"additional_backgrounds":</code>-Arrayelement wiederholt wird.
          Optionen umfassen:
        </p>
        <ul>
          <li><code>"no-repeat"</code></li>
          <li><code>"repeat"</code></li>
          <li><code>"repeat-x"</code></li>
          <li><code>"repeat-y"</code></li>
        </ul>
        <p>Wenn nicht angegeben, wird standardmäßig <code>"no-repeat"</code> verwendet.</p>
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
          Bestimmt, welches Farbschema auf die Chrome (z.B. Kontextmenüs)
          und den Inhalt (z.B. integrierte Seiten und das bevorzugte Farbschema für Webseiten) angewendet wird.
          Optionen umfassen:
        </p>
        <ul>
          <li><code>"auto"</code> – ein helles oder dunkles Schema, das automatisch basierend auf dem Theme festgelegt wird.</li>
          <li><code>"light"</code> – ein helles Schema.</li>
          <li><code>"dark"</code> – ein dunkles Schema.</li>
          <li><code>"system"</code> – verwendet das System-Schema.</li>
        </ul>
        <p>Wenn nicht angegeben, wird standardmäßig <code>"auto"</code> verwendet.</p>
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
          Bestimmt, welches Farbschema auf den Inhalt angewendet wird (z.B. integrierte Seiten und
          das bevorzugte Farbschema für Webseiten). Überschreibt <code>color_scheme</code>. Optionen
          umfassen:
        </p>
        <ul>
          <li><code>"auto"</code> – ein helles oder dunkles Schema, das automatisch basierend auf dem Theme festgelegt wird.</li>
          <li><code>"light"</code> – ein helles Schema.</li>
          <li><code>"dark"</code> – ein dunkles Schema.</li>
          <li><code>"system"</code> – das System-Schema.</li>
        </ul>
        <p>Wenn nicht angegeben, wird standardmäßig <code>"auto"</code> verwendet.</p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

Ein einfaches Thema muss ein Bild definieren, das dem Header hinzugefügt wird, die Akzentfarbe, die im Header verwendet wird, und die Farbe des Textes, der im Header verwendet wird:

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

Mehrere Bilder können verwendet werden, um den Header auszufüllen. Vor Firefox Version 60 verwenden Sie ein leeres oder durchsichtiges Header-Bild, um die Platzierung jedes zusätzlichen Bildes zu kontrollieren:

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

Sie können den Header auch mit einem wiederholten Bild oder Bildern ausfüllen, in diesem Fall ein einzelnes Bild, das in der Mitte oben im Header verankert ist und sich über den Rest des Headers ausdehnt:

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

![Ein Browserfenster mit zwei geöffneten Tabs und dunkelgrüner Hintergrundfarbe im Header-Bereich. Der inaktive Tab hat eine weiße Textfarbe. Der aktive Tab und die Toolbar haben eine blaue Hintergrundfarbe mit cyanfarbener Textfarbe. Die URL-Leiste hat einen orangefarbenen Hintergrund mit weißen Rändern, einer grünen Textfarbe und einer weißen vertikalen Trennlinie. Eine rote Linie wird verwendet, um die Tabs oben zu trennen, und eine weiße Linie, um die Tabs vom darunter liegenden Inhalt zu trennen.](theme.png)

In diesem Screenshot ist `"toolbar_vertical_separator"` die weiße vertikale Linie im URL-Feld, die das Lesezeichenmodus-Symbol von den anderen Symbolen trennt.

## Browser-Kompatibilität

{{Compat}}

### Chrome-Kompatibilität

In Chrome:

- `colors/toolbar_text` wird nicht verwendet, verwenden Sie stattdessen `colors/bookmark_text`.
- `images/theme_frame` verankert das Bild oben links im Header, und wenn das Bild den Header-Bereich nicht ausfüllt, wird es gekachelt.
- Alle Farben müssen als Array von RGB-Werten angegeben werden, wie folgt:

  ```json
  "theme": {
    "colors": {
       "frame": [255, 0, 0],
       "tab_background_text": [0, 255, 0],
       "bookmark_text": [0, 0, 255]
    }
  }
  ```

  Ab Firefox 59 werden sowohl die Array-Form als auch die CSS-Farbform für alle Eigenschaften akzeptiert. Vorher erforderten `colors/frame` und `colors/tab_background_text` die Array-Form, während andere Eigenschaften die CSS-Farbform benötigten.
