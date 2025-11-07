---
title: theme
slug: Mozilla/Add-ons/WebExtensions/manifest.json/theme
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
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
}</pre>
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den Schlüssel `theme`, um ein statisches Theme zu definieren, das auf Firefox angewendet werden soll.

> [!NOTE]
> Wenn Sie ein Theme mit einer Erweiterung einbeziehen möchten, sehen Sie sich die {{WebExtAPIRef("theme")}} API an.

> [!NOTE]
> Seit Mai 2019 müssen Themes signiert werden, um installiert zu werden ([Firefox-Bug 1545109](https://bugzil.la/1545109)). Siehe [Signing and distributing your add-on](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon) für weitere Details.

> [!NOTE]
> Eine neue Version von Firefox für Android, basierend auf GeckoView, befindet sich in der Entwicklung. Eine [Vorabversion](https://play.google.com/store/apps/details?id=org.mozilla.fenix) ist verfügbar. Die Vorabversion unterstützt keine Themes.

## Bildformate

Die folgenden Bildformate werden in allen Theme-Bildeigenschaften unterstützt:

- JPEG
- PNG
- APNG
- SVG (animiertes SVG wird ab Firefox 59 unterstützt)
- GIF (animiertes GIF wird nicht unterstützt)

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
        <p>Optional ab Firefox 60. Verpflichtend vor Firefox 60.</p>
        <p>
          Ein JSON-Objekt, dessen Eigenschaften die in verschiedenen Teilen des Browsers anzuzeigenden Bilder darstellen. Siehe
          <code><a href="#images">images</a></code> für Details zu den Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>colors</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Verpflichtend.</p>
        <p>
          Ein JSON-Objekt, dessen Eigenschaften die Farben von verschiedenen Teilen des Browsers darstellen. Siehe <code><a href="#colors">colors</a></code> für Details zu den Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>properties</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Optional</p>
        <p>
          Dieses Objekt hat Eigenschaften, die beeinflussen, wie die <code>"additional_backgrounds"</code>-Bilder angezeigt werden und wie Farbschemata angewendet werden. Siehe
          <code><a href="#properties">properties</a></code> für Details zu den Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### images

Alle URLs sind relativ zur `manifest.json`-Datei und können keine externe URL referenzieren.

Bilder sollten 200 Pixel hoch sein, um sicherzustellen, dass sie immer den Kopfbereich vertikal ausfüllen.

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
          Die URL eines Vordergrundbildes, das dem Kopfbereich hinzugefügt wird und das an der oberen rechten Ecke des Kopfbereichs verankert ist.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Chrome verankert das Bild oben links im Kopfbereich und, falls das Bild den Kopfbereich nicht ausfüllt, wird das Bild gekachelt.
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
            <strong>Warnung:</strong> Die <code>additional_backgrounds</code>-Eigenschaft ist experimentell. Sie wird derzeit in den Release-Versionen von Firefox akzeptiert, aber ihr Verhalten kann sich ändern. Sie wird nicht in Firefox für Android unterstützt.
          </p>
        </div>
        <p>
          Ein Array von URLs für zusätzliche Hintergrundbilder, die dem Kopfbereich hinzugefügt werden und hinter dem <code>"theme_frame":</code>-Bild angezeigt werden. Diese Bilder schichten das erste Bild im Array oben, das letzte Bild im Array unten.
        </p>
        <p>Optional.</p>
        <p>
          Standardmäßig sind alle Bilder an der oberen rechten Ecke des Kopfbereichs verankert, aber ihre Ausrichtung und ihr Wiederholungsverhalten können durch Eigenschaften von <code>"properties":</code> gesteuert werden.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### colors

Diese Eigenschaften definieren die Farben, die für verschiedene Teile des Browsers verwendet werden. Sie sind alle optional. Wie diese Eigenschaften die Firefox-Benutzeroberfläche beeinflussen, wird hier gezeigt:

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <td>
        <p>
          <img
            alt="Übersicht der Farbeigenschaften und wie sie auf Firefox UI-Komponenten angewendet werden"
            src="themes_components_annotations.png"
          />
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wo ein Komponent von mehreren Farbeigenschaften betroffen ist, sind die Eigenschaften in Reihenfolge der Priorität aufgelistet.

Alle diese Eigenschaften können entweder als Zeichenfolge angegeben werden, die jede gültige [CSS-Farbzeichenfolge](/de/docs/Web/CSS/Reference/Values/color_value) enthält (einschließlich Hexadezimal), oder als RGB-Array, wie zum Beispiel `"tab_background_text": [ 107 , 99 , 23 ]`.

> [!NOTE]
> [In Chrome können Farben nur als RGB-Arrays angegeben werden](#chrome-kompatibilität).
>
> In Firefox für Android können Farben wie folgt angegeben werden:
>
> - vollständige Hexadezimalnotierung, also nur #RRGGBB. _alpha_ und verkürzte Syntax, wie in #RGB\[A], werden nicht unterstützt.
> - [Funktionale Notation](/de/docs/Web/CSS/Reference/Values/color_value) (RGB-Arrays) für Themes, die auf Firefox 68.2 oder später abzielen.
>
> Farben für Firefox für Android-Themes können nicht mit Farbnamen angegeben werden.

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
          Die Farbe von Text und Symbolen in der Lesezeichen- und Suchleiste. Außerdem, wenn <code>tab_text</code> nicht definiert ist, setzt es die Farbe des aktiven Tabtextes und wenn <code>icons</code> nicht definiert ist, die Farbe der Symbolleistensymbole. Bereitgestellt als Chrome-kompatibles Alias für <code>toolbar_text</code>.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass jede verwendete Farbe einen guten Kontrast zu den in <code>frame</code> und <code>frame_inactive</code> oder <code>toolbar</code> verwendeten Farben hat, wenn Sie diese Eigenschaft verwenden.
          </p>
          <p>
            Wo <code>icons</code> nicht definiert ist, stellen Sie auch einen guten Kontrast zu <code>button_background_active</code> und <code>button_background_hover</code> sicher.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "tab_text": "white",
    "toolbar": "black",
    "bookmark_text": "red"
  }
}</pre>
        </details>
        <p>
          <img
            alt="Browser Firefox ist schwarz. Der Tab des Browsers ist schwarz mit weißem Text. URL-Leiste und die 'Seite durchsuchen'-Leiste sind weiß mit schwarzem Text, aber alle Browser- und 'Seite durchsuchen'-Leistensymbole sind rot."
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
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "button_background_active": "red"
  }
}</pre>
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Das Anpassen-Symbol der Symbolleiste in der URL-Leiste ist weiß mit einem roten Hintergrund und gedrückt und ein Popup wird geöffnet, das eine kurze Liste von Dingen anzeigt, die zur Symbolleiste hinzugefügt werden können, wie die Bibliothek des Browsers und die Sidebars." src="theme-button_background_active.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_hover</code></td>
      <td>
        <p>Die Farbe des Hintergrunds der schwebenden Symbolleistenschaltflächen.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "button_background_hover": "red"
  }
}</pre>
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Das Icon 'Seite zurück' ist weiß mit einem roten Kreis als Hintergrund." src="theme-button_background_hover.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons</code></td>
      <td>
        <p>Die Farbe der Symbolleistensymbole, mit Ausnahme derer in der Suchleiste.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe einen guten Kontrast zu den verwendeten in <code>frame</code>, <code>frame_inactive</code>, <code>button_background_active</code> und <code>button_background_hover</code> hat.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "icons": "red"
  }
}</pre>
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Die URL-Leiste und neue Tab-Icons sind rot. Die roten Icons kontrastieren gut mit dem schwarzen Hintergrund des Kopfbereichs." src="theme-icons.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons_attention</code></td>
      <td>
        <p>
          Die Farbe der Symbolleistensymbole im Aufmerksamkeitszustand, wie das Stern-Symbol eines Lesezeichens oder das Symbol für abgeschlossene Downloads.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe einen guten Kontrast zu den verwendeten in <code>frame</code>, <code>frame_inactive</code>, <code>button_background_active</code> und <code>button_background_hover</code> hat.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "icons_attention": "red"
  }
}</pre>
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Das Symbol 'Diese Seite als Lesezeichen speichern' ist rot und gedrückt, ein offenes Popup namens 'Lesezeichen bearbeiten' wird angezeigt. Im Aufmerksamkeitszustand kontrastieren die Symbolleistensymbole gut mit dem schwarzen Hintergrund des Kopfbereichs." src="theme-icons_attention.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame</code></td>
      <td>
        <p>
          Die Farbe des Hintergrunds des Kopfbereichs, angezeigt in dem Teil des Kopfs, der nicht durch das in <code>"theme_frame"</code> und <code>"additional_backgrounds"</code> spezifizierte Bild bedeckt oder sichtbar ist.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "red",
     "tab_background_text": "white"
  }
}</pre>
        </details>
        <p><img alt="Browser Firefox ist rot mit weißem Text. Die Tabs des Browsers sind hellrot, ebenfalls mit weißem Text. Die URL-Leiste ist sehr hellrot mit schwarzem Text." src="theme-frame.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame_inactive</code></td>
      <td>
        <p>
          Die Farbe des Hintergrunds des Kopfbereichs, wenn das Browserfenster inaktiv ist, angezeigt in dem Teil des Kopfs, der nicht durch das in <code>"theme_frame"</code> und <code>"additional_backgrounds"</code> spezifizierte Bild bedeckt oder sichtbar ist.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "red",
     "frame_inactive": "gray",
     "tab_text": "white"
  }
}</pre>
        </details>
        <p>
          <img
            alt="Browser Firefox ist grau. Die Tabs und die URL-Leiste des Browsers sind hellgrau. Der Tabtext ist weiß und die URL-Leiste-Icons sind dunkelgrau."
            src="theme-frame_inactive.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_background</code></td>
      <td>
        <p>Die Hintergrundfarbe der neuen Tabseite.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_background": "red"
  }
}</pre>
        </details>
        <p><img alt="Firefox zeigt eine neue Tabseite an. Der Hintergrund der Seite ist rot." src="ntp-background.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_card_background</code></td>
      <td>
        <p>Die Hintergrundfarbe der Karten auf der neuen Tabseite.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_card_background": "red"
  }
}</pre>
        </details>
        <p><img alt="Firefox zeigt eine neue Tabseite an. Auf der Seite ist der Hintergrund zur Suchleiste und den Shortcut-Schaltflächen rot." src="ntp-card-background.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_text</code></td>
      <td>
        <p>Die Textfarbe der neuen Tabseite.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe einen guten Kontrast zu den in <code>ntp_background</code> und <code>ntp_card_background</code> verwendeten Farben hat.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_text": "red"
  }
}</pre>
        </details>
        <p><img alt="Firefox zeigt eine neue Tabseite an. Auf der Seite ist der Text rot." src="ntp-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup</code></td>
      <td>
        <p>
          Die Hintergrundfarbe der Popups (wie das Dropdown-Menü der URL-Leiste und die Pfeil-Panels).
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup": "red"
  }
}</pre>
        </details>
        <p><img alt="Browser Firefox ist schwarz. Browser-Tabs und URL-Leiste sind hellgrau mit Symbolen und Text in Weiß. Das Lesezeichen-Symbol ist blau und gedrückt, ein offenes Popup namens 'Lesezeichen bearbeiten' wird mit einem roten Hintergrund angezeigt. Die Hintergrundfarbe des Popups ist rot." src="theme-popup.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_border</code></td>
      <td>
        <p>Die Randfarbe der Popups.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup": "black",
     "popup_text": "white",
     "popup_border": "red"
  }
}</pre>
        </details>
        <p><img alt="Browser Firefox ist schwarz. Browser-Tabs und URL-Leiste sind hellgrau mit Symbolen und Text in Weiß. Das Lesezeichen-Symbol ist blau und gedrückt, ein offenes Popup namens 'Lesezeichen bearbeiten' wird mit einem roten Umriss und schwarzem Hintergrund angezeigt. Der Rand des Popups ist rot." src="theme-popup_border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von mit der Tastatur markierten Elementen innerhalb von Popups (wie das ausgewählte Dropdown-Element der URL-Leiste).
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Es wird empfohlen, <code>popup_highlight_text</code> zu definieren, um die Standardfarbe des Browser-Textes auf verschiedenen Plattformen zu überschreiben.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup_highlight": "red",
     "popup_highlight_text": "white"
  }
}</pre>
        </details>
        <p><img alt="Screenshot von Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind hellgrau mit Symbolen und Text in Weiß. Ein Suchergebnisse-Popup wird angezeigt, wobei das Hintergrund eines markierten Elements rot ist. Die Hintergrundfarbe des markierten Elements innerhalb des Popups ist rot." src="theme-popup_highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight_text</code></td>
      <td>
        <p>Die Textfarbe von markierten Elementen innerhalb von Popups.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe einen guten Kontrast zu der in <code>popup_highlight</code> verwendeten Farbe hat.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup_highlight": "black",
     "popup_highlight_text": "red"
  }
}</pre>
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind hellgrau mit Symbolen und Text in Weiß. Ein Suchergebnisse-Popup wird angezeigt, wobei der Text eines markierten Elements rot ist mit einem schwarzen Hintergrund. Die Textfarbe des markierten Elements kontrastiert gut mit der schwarzen Hintergrundfarbe dieses Elements." src="theme-popup_highlight_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_text</code></td>
      <td>
        <p>Die Textfarbe der Popups.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe einen guten Kontrast zu der in <code>popup</code> verwendeten Farbe hat.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup": "black",
     "popup_text": "red"
  }
}</pre>
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind hellgrau mit Symbolen und Text in Weiß. Ein Suchergebnisse-Popup wird angezeigt, wobei die Texte der Elemente rot sind. Die Textfarbe kontrastiert gut mit der schwarzen Hintergrundfarbe des Popups." src="popup_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar</code></td>
      <td>
        <p>Die Hintergrundfarbe der Seitenleiste.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar": "red",
     "sidebar_highlight": "white",
     "sidebar_highlight_text": "green",
     "sidebar_text": "white"
  }
}</pre>
        </details>
        <p><img alt="Ein Nahaufnahme-Screenshot eines Browserfensters mit geöffneter Seitenleiste. Die Hintergrundfarbe der Seitenleiste ist rot." src="sidebar-colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_border</code></td>
      <td>
        <p>Die Rand- und Trennfarbe der Browser-Seitenleiste.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar_border": "red"
  }
}</pre>
        </details>
        <p><img alt="Eine Nahaufnahme der Firefox-Browser-Lesezeichen-Seitenleiste mit einem roten horizontalen Trenner zwischen dem Seitentitel und dem Seitenmenü. Die Rand- und Trennfarbe der Seitenleiste ist rot." src="sidebar-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight</code></td>
      <td>
        <p>Die Hintergrundfarbe von hervorgehobenen Reihen in eingebauten Seitenleisten.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar_highlight": "red",
     "sidebar_highlight_text": "white"
  }
}</pre>
        </details>
        <p><img alt="Eine Nahaufnahme der Firefox-Browser-Lesezeichen-Seitenleiste mit einem hervorgehobenen Element. Die Hintergrundfarbe einer hervorgehobenen Zeile in der Seitenleiste ist rot mit weißem Text." src="sidebar-highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight_text</code></td>
      <td>
        <p>Die Textfarbe von hervorgehobenen Reihen in Seitenleisten.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe einen guten Kontrast zu der in <code>sidebar_highlight</code> verwendeten Farbe hat.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "sidebar_highlight": "pink",
    "sidebar_highlight_text": "red",
  }
}</pre>
        </details>
        <p><img alt="Eine Nahaufnahme der Firefox-Browser-Lesezeichen-Seitenleiste mit einem hervorgehobenen Element. Die Farbe des Textes einer hervorgehobenen Zeile in der Seitenleiste ist rot. Die Textfarbe kontrastiert gut mit der rosa Hintergrundfarbe der hervorgehobenen Zeile." src="sidebar-highlight-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_text</code></td>
      <td>
        <p>Die Textfarbe der Seitenleisten.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe einen guten Kontrast zu der in <code>sidebar</code> verwendeten Farbe hat.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar": "red",
     "sidebar_highlight": "white",
     "sidebar_highlight_text": "green",
     "sidebar_text": "white"
  }
}</pre>
        </details>
        <p><img alt="Ein Nahaufnahme-Screenshot eines Browserfensters mit geöffneter Seitenleiste. Die Farbe des Textes innerhalb der Seitenleiste ist weiß. Die Textfarbe kontrastiert gut mit dem roten Hintergrund der Seitenleiste." src="sidebar-colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td>
        <code>tab_background_separator</code> {{Deprecated_Inline}}
      </td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong> <code>tab_background_separator</code> wird ab Firefox 89 nicht mehr unterstützt.
          </p>
        </div>
        <p>Die Farbe des vertikalen Separators der Hintergrund-Tabs.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "tab_background_separator": "red"
  }
}</pre>
        </details>
        <p>
          <img
            alt="Eine Nahaufnahme der Browser-Tabs zur Hervorhebung des Separators."
            src="theme-tab-background-separator.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>tab_background_text</code></td>
      <td>
        <p>
          Die Farbe des Textes in den inaktiven Seitentabs. Wenn <code>tab_text</code> oder <code>bookmark_text</code> nicht angegeben ist, wird dies für den Text des aktiven Tabs verwendet.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe einen guten Kontrast zu den in <code>tab_selected</code> oder <code>frame</code> und <code>frame_inactive</code> verwendeten Farben hat.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "white",
    "tab_background_text": "red"
  }
}</pre>
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind weiß mit roten Symbolen und rotem Text. Die Farbe des Textes im geöffneten Tab ist rot. Die Textfarbe kontrastiert gut mit dem schwarzen Hintergrund des Tabs." src="theme-tab_background_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_line</code></td>
      <td>
        <p>Die Farbe der Linie des ausgewählten Tabs.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "tab_line": "red"
  }
}</pre>
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind dunkelgrau mit hellgrauen Symbolen und weißem Text. Der ausgewählte Tab hat eine rote Umrandung." src="theme-tab_line.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_loading</code></td>
      <td>
        <p>Die Farbe des Ladeindikators und der Ladeanimation im Tab.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "tab_loading": "red"
  }
}</pre>
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind dunkelgrau mit weißen Symbolen und weißem Text. Innerhalb des ausgewählten Tabs ist ein animierter Ladeindikator rot." src="theme-tab_loading.gif" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_selected</code></td>
      <td>
        <p>
          Die Hintergrundfarbe des ausgewählten Tabs. Wenn nicht verwendet, wird die Farbe des ausgewählten Tabs von <code>frame</code> und <code>frame_inactive</code> festgelegt.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
}</pre>
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind dunkelgrau mit weißen Symbolen und weißem Text. Der ausgewählte Tab hat roten Hintergrund und weißen Text." src="theme-tab_selected.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_text</code></td>
      <td>
        <p>
          Ab Firefox 59 repräsentiert es die Textfarbe des ausgewählten Tabs. Wenn <code>tab_line</code> nicht angegeben ist, definiert es auch die Farbe der Linie des ausgewählten Tabs.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe einen guten Kontrast zu den in <code>tab_selected</code> oder <code>frame</code> und <code>frame_inactive</code> verwendeten Farben hat.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
}</pre>
        </details>
        <p><img alt="Browser Firefox hat ein Insektenthema. Die URL-Leiste ist hellgrau mit weißen Symbolen. Der Text des ausgewählten Tabs ist rot mit weißem Hintergrund." src="theme-tab_text.png" /></p>
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
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "red",
    "tab_background_text": "white"
  }
}</pre>
        </details>
        <p><img alt="Browser Firefox ist schwarz. Browser-Tabs, Suchleiste und URL-Leiste sind rot mit weißem Text und Symbolen, mit Ausnahme der Suchleiste, bei der Text und Symbol schwarz sind." src="toolbar.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_bottom_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie, die den unteren Rand der Symbolleiste von der darunterliegenden Region trennt.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar_bottom_separator": "red"
  }
}</pre>
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind hellgrau mit weißem Text und Symbolen. Eine horizontale rote Linie trennt den unteren Rand der Symbolleiste und den Beginn der Anzeige der Webseite." src="theme-toolbar_bottom_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field</code></td>
      <td>
        <p>
          Die Hintergrundfarbe für Felder in der Symbolleiste, wie die URL-Leiste.
        </p>
        <p>
          Dies setzt auch die Hintergrundfarbe des <strong>"Suchen in Seite"</strong>-Feldes.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar_field": "red"
  }
}</pre>
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs, Suchleiste und URL-Leiste des Browsers sind hellgrau mit weißem Text und Symbolen. Die Hintergrundfarbe der URL-Leiste ist rot. Die Suchleiste ist weiß mit schwarzem Text. Das 'In Seite suchen' Feld ist rot mit schwarzem Text." src="toolbar-field.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border</code></td>
      <td>
        <p>Die Randfarbe für Felder in der Symbolleiste.</p>
        <p>
          Dies setzt auch die Randfarbe des <strong>"Suchen in Seite"</strong>-Feldes.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
}</pre>
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs, Suchleiste und URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Die Felder der URL-Leiste und der Suchleiste sind rot umrandet." src="toolbar-field-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border_focus</code></td>
      <td>
        <p>Die fokussierte Randfarbe für Felder in der Symbolleiste.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
}</pre>
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Das Feld der URL-Leiste ist fokussiert und in Rot umrandet." src="theme-toolbar_field_border_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_focus</code></td>
      <td>
        <p>
          Die fokussierte Hintergrundfarbe für Felder in der Symbolleiste, wie die URL-Leiste.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
}</pre>
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs, Suchleiste und URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Die Hintergrundfarbe der fokussierten URL-Leiste ist rot und der Text ist weiß." src="theme-toolbar_field_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight</code></td>
      <td>
        Die Hintergrundfarbe, die verwendet wird, um die aktuelle Auswahl des Textes in der URL-Leiste zu kennzeichnen (und der Suchleiste, wenn sie separat konfiguriert ist).
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "toolbar_field": "rgb(255 255 255 / 91%)",
    "toolbar_field_text": "rgb(0 100 0)",
    "toolbar_field_highlight": "rgb(180 240 180 / 90%)",
    "toolbar_field_highlight_text": "rgb(0 80 0)"
  }
}</pre>
        </details>
        <p>
          <img
            alt="Browser Firefox ist weiß. Die Tabs und die URL-Leiste des Browsers sind weiß mit Text und Symbolen in Schwarz. Das Feld der URL-Leiste ist fokussiert und in Blau umrandet, und der URL-Leistentext ist markiert."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier gibt das Feld <code>toolbar_field_highlight</code> an, dass die Hervorhebungsfarbe ein helles Grün ist, während der Text mit <code>toolbar_field_highlight_text</code> auf ein mittelstarkes Grün gesetzt wird.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight_text</code></td>
      <td>
        <p>
          Die Farbe, die verwendet wird, um den derzeit in der URL-Leiste markierten Text zu zeichnen (und in der Suchleiste, wenn sie als separates Feld konfiguriert ist).
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe einen guten Kontrast zu der in <code>toolbar_field_highlight</code> verwendeten Farbe hat.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "toolbar_field": "rgb(255 255 255 / 91%)",
    "toolbar_field_text": "rgb(0 100 0)",
    "toolbar_field_highlight": "rgb(180 240 180 / 90%)",
    "toolbar_field_highlight_text": "rgb(0 80 0)"
  }
}</pre>
        </details>
        <p>
          <img
            alt="Browser Firefox ist weiß. Die Tabs und die URL-Leiste des Browsers sind weiß mit Text und Symbolen in Schwarz. Das Feld der URL-Leiste ist fokussiert und in Blau umrandet, und der URL-Leistentext ist markiert."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier wird mit dem Feld <code>toolbar_field_highlight_text</code> die Textfarbe auf ein mittelstarkes bis mittleres Dunkelgrün gesetzt, während die Hervorhebungsfarbe ein helles Grün ist.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_separator</code> {{Deprecated_Inline}}</td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong> <code>toolbar_field_separator</code> wird ab Firefox 89 nicht mehr unterstützt.
          </p>
        </div>
        <p>
          Die Farbe der Separatoren innerhalb der URL-Leiste. In Firefox 58 wurde dies als <code>toolbar_vertical_separator</code> implementiert.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "black",
    "tab_background_text": "white",
    "toolbar_field_separator": "red"
  }
}</pre>
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit Text und Symbolen in Weiß. Innerhalb des weißen URL-Leiste-Feldes, nach dem Reader-Mode-Symbol, eine rote vertikale Linie, die den Rest der URL-Leiste-Symbole trennt. Die Farbe der vertikalen Trennlinie innerhalb der URL-Leiste ist rot." src="theme-toolbar_field_separator.png" /></p>
        <p>
          In diesem Screenshot ist <code>"toolbar_vertical_separator"</code> die rote vertikale Linie in der URL-Leiste, die das Reader-Mode-Symbol von den anderen Symbolen trennt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text</code></td>
      <td>
        <p>
          Die Farbe des Textes in Feldern in der Symbolleiste, wie der URL-Leiste. Dies setzt auch die Farbe des Textes im <strong>"Suchen in Seite"</strong>-Feld.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe einen guten Kontrast zu den in <code>toolbar_field</code> verwendeten Farben hat.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "black",
    "tab_background_text": "white",
    "toolbar_field": "black",
    "toolbar_field_text": "red"
  }
}</pre>
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Der Text innerhalb der URL-Leiste ist rot. Die Symbole und das 'In Seite suchen'-Feld haben roten Text mit schwarzem Hintergrund." src="toolbar-field-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text_focus</code></td>
      <td>
        <p>
          Die Farbe des Textes in fokussierten Feldern in der Symbolleiste, wie zum Beispiel der URL-Leiste.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe einen guten Kontrast zu den in <code>toolbar_field_focus</code> verwendeten Farben hat.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
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
}</pre>
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit zwei geöffneten Tabs. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Die URL-Leiste hat den Fokus; der Text und die Symbole der Leiste sind rot mit schwarzem Hintergrund." src="theme-toolbar_field_text_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_text</code></td>
      <td>
        <p>
          Die Farbe des Textes der Symbolleiste. Dies setzt auch die Farbe des Textes in der "Suchen"-Leiste.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Aus Kompatibilitätsgründen mit Chrome verwenden Sie das Alias <code>bookmark_text</code>.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar": "black",
    "toolbar_text": "red"
  }
}</pre>
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs, Suchleiste und die URL-Leiste des Browsers sind schwarz mit rotem Text und Symbolen. Der Text innerhalb des aktiven Tabs, der Navigationsleiste und der Suchleiste ist rot." src="toolbar-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_top_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie, die den oberen Rand der Symbolleiste von der darüber liegenden Region trennt.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar": "black",
    "toolbar_top_separator": "red"
  }
}</pre>
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Eine rote Linie trennt den oberen Teil der URL-Leiste vom Browser." src="theme-toolbar_top_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_vertical_separator</code></td>
      <td>
        <p>
          Die Farbe des Vertikaltrenners in der Lesezeichenleiste. In Firefox 58 entspricht es der Farbe der Separatoren innerhalb der URL-Leiste.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar": "black",
    "toolbar_vertical_separator": "red"
  }
}</pre>
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit Text und Symbolen in Weiß. Die Farbe der vertikalen Linie, die die Lesezeichenleiste vom Inhalt rechts trennt, ist rot." src="theme-toolbar_vertical_separator.png" /></p>
      </td>
    </tr>
  </tbody>
</table>

#### Aliase

Zusätzlich akzeptiert dieser Schlüssel verschiedene Eigenschaften, die Aliase für eine der oben genannten Eigenschaften sind. Diese werden für die Kompatibilität mit Chrome bereitgestellt. Wenn ein Alias angegeben ist und die Nicht-Alias-Version ebenfalls angegeben ist, wird der Wert aus der Nicht-Alias-Version übernommen.

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
          Ein Array von Enumerationswerten, die die Ausrichtung des entsprechenden <code>"additional_backgrounds":</code>-Array-Eintrags definieren.<br />Die Ausrichtungsoptionen umfassen:
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
        <p>Wenn nicht angegeben, standardmäßig <code>"right top"</code>.</p>
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
          Ein Array von Enumerationswerten, die definieren, wie der entsprechende <code>"additional_backgrounds":</code>-Array-Eintrag wiederholt wird. Optionen umfassen:
        </p>
        <ul>
          <li><code>"no-repeat"</code></li>
          <li><code>"repeat"</code></li>
          <li><code>"repeat-x"</code></li>
          <li><code>"repeat-y"</code></li>
        </ul>
        <p>Wenn nicht angegeben, standardmäßig <code>"no-repeat"</code>.</p>
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
          Bestimmt, welches Farbschema auf das Chrome (z. B. Kontextmenüs) und den Inhalt (z. B. eingebettete Seiten und das bevorzugte Farbschema für Webseiten) angewendet wird.
          Optionen umfassen:
        </p>
        <ul>
          <li><code>"auto"</code> – ein helles oder dunkles Schema basierend automatisch auf dem Theme.</li>
          <li><code>"light"</code> – ein helles Schema.</li>
          <li><code>"dark"</code> – ein dunkles Schema.</li>
          <li><code>"system"</code> – verwendet das System-Schema.</li>
        </ul>
        <p>Wenn nicht angegeben, standardmäßig <code>"auto"</code>.</p>
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
          Bestimmt, welches Farbschema auf den Inhalt (z. B. eingebettete Seiten und das bevorzugte Farbschema für Webseiten) angewendet wird. Überschreibt <code>color_scheme</code>. Optionen umfassen:
        </p>
        <ul>
          <li><code>"auto"</code> – ein helles oder dunkles Schema basierend automatisch auf dem Theme.</li>
          <li><code>"light"</code> – ein helles Schema.</li>
          <li><code>"dark"</code> – ein dunkles Schema.</li>
          <li><code>"system"</code> – das System-Schema.</li>
        </ul>
        <p>Wenn nicht angegeben, standardmäßig <code>"auto"</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

Ein einfaches Theme muss ein Bild definieren, das dem Kopf hinzugefügt wird, die Akzentfarbe, die im Kopf verwendet werden soll, und die Farbe des Textes, der im Kopf verwendet wird:

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

Mehrere Bilder können verwendet werden, um den Kopf zu füllen. Vor Firefox-Version 60 verwenden Sie ein leeres oder transparentes Header-Bild, um die Platzierung jedes zusätzlichen Bildes zu steuern:

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

Sie können den Header auch mit einem wiederholten Bild oder Bildern füllen, in diesem Fall ein einzelnes Bild, das in der Mitte oben des Headers verankert ist und über den Rest des Headers wiederholt wird:

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

Es ermöglicht Ihnen einen Browser, der folgendermaßen aussieht:

![Ein Browserfenster mit zwei geöffneten Tabs und dunkelgrünem Hintergrund im Kopfbereich. Der inaktive Tab hat weiße Textfarbe. Der aktive Tab und die Symbolleiste haben eine blaue Hintergrundfarbe mit cyanfarbener Schrift. Die URL-Leiste hat einen orangefarbenen Hintergrund mit weißen Rändern, grüner Textfarbe und einer weißen vertikalen Linien Trennlinie. Eine rote Linie trennt die Tabs oben und eine weiße Linie trennt die Tabs vom darunterliegenden Inhalt.](theme.png)

In diesem Screenshot ist `"toolbar_vertical_separator"` die weiße vertikale Linie in der URL-Leiste, die das Reader-Mode-Symbol von den anderen Symbolen trennt.

## Browser-Kompatibilität

{{Compat}}

### Chrome-Kompatibilität

In Chrome:

- `colors/toolbar_text` wird nicht verwendet, verwenden Sie stattdessen `colors/bookmark_text`.
- `images/theme_frame` verankert das Bild oben links im Kopfbereich und wenn das Bild den Kopfbereich nicht ausfüllt, wird das Bild gekachelt.
- alle Farben müssen als Array von RGB-Werten angegeben werden, so:

  ```json
  "theme": {
    "colors": {
       "frame": [255, 0, 0],
       "tab_background_text": [0, 255, 0],
       "bookmark_text": [0, 0, 255]
    }
  }
  ```

  Ab Firefox 59 werden sowohl die Array-Form als auch die CSS-Farbform für alle Eigenschaften akzeptiert. Davor erforderten `colors/frame` und `colors/tab_background_text` die Array-Form, während andere Eigenschaften die CSS-Farbform erforderten.
