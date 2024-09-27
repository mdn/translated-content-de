---
title: theme
slug: Mozilla/Add-ons/WebExtensions/manifest.json/theme
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
    "tab_background_text": "#000"
  }
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den Schlüssel `theme`, um ein statisches Thema für Firefox zu definieren.

> [!NOTE]
> Wenn Sie ein Thema mit einer Erweiterung einbinden möchten, sehen Sie bitte die {{WebExtAPIRef("theme")}} API.

> [!NOTE]
> Seit Mai 2019 müssen Themes signiert sein, um installiert zu werden ([Firefox Fehler 1545109](https://bugzil.la/1545109)). Weitere Details finden Sie unter [Signieren und Verteilen Ihres Add-ons](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon).

> [!NOTE]
> Eine neue Version von Firefox für Android, basierend auf GeckoView, befindet sich in der Entwicklung. Eine [Vorabversion](https://play.google.com/store/apps/details?id=org.mozilla.fenix) ist verfügbar. Die Vorabversion unterstützt keine Themes.

## Bildformate

Die folgenden Bildformate werden in allen Themenbild-Eigenschaften unterstützt:

- JPEG
- PNG
- APNG
- SVG (animiertes SVG wird ab Firefox 59 unterstützt)
- GIF (animierte GIFs werden nicht unterstützt)

## Syntax

Der Schlüssel `theme` ist ein Objekt, das die folgenden Eigenschaften aufnimmt:

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
          Ein JSON-Objekt, dessen Eigenschaften die Bilder repräsentieren, die in verschiedenen Teilen des Browsers angezeigt werden sollen. Siehe <code><a href="#images">images</a></code> für Details zu den Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>colors</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Verpflichtend.</p>
        <p>
          Ein JSON-Objekt, dessen Eigenschaften die Farben verschiedener Teile des Browsers darstellen. Siehe <code><a href="#colors">colors</a></code> für Details zu den Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>properties</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Optional</p>
        <p>
          Dieses Objekt hat Eigenschaften, die beeinflussen, wie die <code>"additional_backgrounds"</code> Bilder angezeigt werden und wie Farbschemata angewendet werden. Siehe <code><a href="#properties">properties</a></code> für Details zu den Eigenschaften, die dieses Objekt enthalten kann.
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
          Die URL eines Vordergrundbildes, das dem Kopfbereich hinzugefügt werden soll und an der oberen rechten Ecke des Kopfbereichs verankert wird.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Chrome verankert das Bild an der oberen linken Ecke des Kopfbereichs und füllt es, wenn das Bild den Bereich nicht ausfüllt, mit Kacheln.
          </p>
        </div>
        <p>
          Optional in Desktop Firefox ab Version 60. Erforderlich in Firefox für Android.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds</code></td>
      <td><code>Array </code>von <code>String</code></td>
      <td>
        <div class="warning">
          <p>
            <strong>Warnung:</strong> Die Eigenschaft <code>additional_backgrounds</code> ist experimentell. Sie wird aktuell in den Release-Versionen von Firefox akzeptiert, jedoch kann sich ihr Verhalten ändern. Sie wird in Firefox für Android nicht unterstützt.
          </p>
        </div>
        <p>
          Ein Array von URLs für zusätzliche Hintergrundbilder, die dem Kopfbereich hinzugefügt und hinter dem <code>"theme_frame"</code> Bild angezeigt werden. Diese Bilder werden so geschichtet, dass das erste Bild im Array oben liegt, das letzte Bild im Array unten.
        </p>
        <p>Optional.</p>
        <p>
          Standardmäßig sind alle Bilder an der oberen rechten Ecke des Kopfbereichs verankert, aber ihre Ausrichtung und Wiederholungsverhalten können durch Eigenschaften von <code>"properties":</code> gesteuert werden.
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
            alt="Übersicht der Farbeigenschaften und deren Anwendung auf Firefox-Benutzeroberflächenkomponenten"
            src="themes_components_annotations.png"
          />
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wenn eine Komponente von mehreren Farbeigenschaften betroffen ist, werden die Eigenschaften in der Reihenfolge ihrer Präzedenz aufgelistet.

Alle diese Eigenschaften können entweder als Zeichenkette, die einen gültigen [CSS-Farbstring](/de/docs/Web/CSS/color_value) (einschließlich Hexadezimalwerte) enthält, oder als RGB-Array, wie beispielsweise `"tab_background_text": [ 107 , 99 , 23 ]`, angegeben werden.

> **Hinweis:** [In Chrome dürfen Farben nur als RGB-Arrays angegeben werden](#chrome-kompatibilität).
>
> In Firefox für Android können Farben angegeben werden mit:
>
> - vollständiger hexadezimaler Notation, das heißt #RRGGBB nur. _alpha_ und verkürzte Syntax, wie in #RGB\[A], werden nicht unterstützt.
> - [Funktionelle Notation](/de/docs/Web/CSS/color_value#rgb_syntax_variations) (RGB-Arrays) für Themes, die auf Firefox 68.2 oder später abzielen.
>
> Farben für Firefox für Android-Themen können nicht mit Farbnamen angegeben werden.

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
          Die Farbe von Text und Symbolen in der Lesezeichen- und Suchleiste. Außerdem, wenn <code>tab_text</code> nicht definiert ist, setzt es die Farbe des aktiven Tab-Textes und, wenn <code>icons</code> nicht definiert ist, die Farbe der Werkzeugleistensymbole. Bereitgestellt als Chrome-kompatibles Alias für <code>toolbar_text</code>.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass jede verwendete Farbe gut mit den in <code>frame</code> und <code>frame_inactive</code> oder <code>toolbar</code>, wenn Sie diese Eigenschaft verwenden, verwendeten Farben kontrastiert.
          </p>
          <p>
            Wo <code>icons</code> nicht definiert ist, stellen Sie ebenfalls einen guten Kontrast zu <code>button_background_active</code> und <code>button_background_hover</code> sicher.
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
            alt="Browser Firefox ist schwarz. Browser-Tab ist schwarz mit weißem Text. Die URL-Leiste und die In-Page-Suchleiste sind weiß mit schwarzem Text, aber alle Browser- und In-Page-Suchleistensymbole sind rot."
            src="theme-bookmark_text.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_active</code></td>
      <td>
        <p>Die Hintergrundfarbe der gedrückten Schaltflächen in der Werkzeugleiste.</p>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Das Symbol 'Werkzeugleiste anpassen' in der URL-Leiste ist weiß mit einem roten Hintergrund, und ein Popup wird geöffnet, das eine kurze Liste von Dingen anzeigt, die der Werkzeugleiste hinzugefügt werden können, wie die Bibliothek des Browsers und die Seitenleisten." src="theme-button_background_active.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_hover</code></td>
      <td>
        <p>Die Hintergrundfarbe der Schaltflächen in der Werkzeugleiste beim Überfahren.</p>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Das Symbol 'Eine Seite zurück' ist weiß mit einem roten Kreis im Hintergrund." src="theme-button_background_hover.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons</code></td>
      <td>
        <p>Die Farbe der Symbole in der Werkzeugleiste, mit Ausnahme derjenigen in der Suchleiste.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit den in <code>frame</code>, <code>frame_inactive</code>, <code>button_background_active</code> und <code>button_background_hover</code> verwendeten Farben kontrastiert.
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Die Symbole in der URL-Leiste und zum Öffnen eines neuen Tabs sind rot. Die roten Symbole kontrastieren gut mit dem schwarzen Hintergrund des Kopfbereichs." src="theme-icons.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons_attention</code></td>
      <td>
        <p>
          Die Farbe der Symbole in der Werkzeugleiste, wenn sie die Aufmerksamkeit erregen sollen, wie beispielsweise das Stern-Lesezeichensymbol oder das Fertigmeldungssymbol von Downloads.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit den in <code>frame</code>, <code>frame_inactive</code>, <code>button_background_active</code> und <code>button_background_hover</code> verwendeten Farben kontrastiert.
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Das Lesezeichen-Symbol ist rot und gedrückt, ein geöffnetes Popup mit dem Titel 'Dieses Lesezeichen bearbeiten' wird angezeigt. Während der Aufmerksamkeitserregungsphase kontrastieren die Symbole in der Werkzeugleiste gut mit dem schwarzen Hintergrund des Kopfbereichs." src="theme-icons_attention.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame</code></td>
      <td>
        <p>
          Die Farbe des Hintergrunds im Kopfbereich, die in dem Teil des Kopfbereichs angezeigt wird, der nicht mit den in <code>"theme_frame"</code> und <code>"additional_backgrounds"</code> angegebenen Bildern abgedeckt oder sichtbar ist.
        </p>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "rot",
     "tab_background_text": "weiß"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist rot mit weißem Text. Browser-Tabs sind hellrot, ebenfalls mit weißem Text. Die URL-Leiste ist sehr hellrot mit schwarzem Text." src="theme-frame.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame_inactive</code></td>
      <td>
        <p>
          Die Farbe des Hintergrunds im Kopfbereich, wenn das Browserfenster inaktiv ist. Wird in dem Teil des Kopfbereichs angezeigt, der nicht mit den in <code>"theme_frame"</code> und <code>"additional_backgrounds"</code> angegebenen Bildern abgedeckt oder sichtbar ist.
        </p>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "rot",
     "frame_inactive": "grau",
     "tab_text": "weiß"
  }
}</pre
          >
        </details>
        <p>
          <img
            alt="Browser Firefox ist grau. Die Tabs und die URL-Leiste des Browsers sind hellgrau. Der Tab-Text ist weiß und die URL-Leiste-Symbole sind dunkler grau."
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
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_background": "rot"
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
        <p>Die Hintergrundfarbe der Karten auf der neuen Tab-Seite.</p>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_card_background": "rot"
  }
}</pre
          >
        </details>
        <p><img alt="Firefox zeigt eine neue Tab-Seite an. Auf der Seite ist der Hintergrund zur Suchleiste und zu den Schnellzugriffsschaltflächen rot." src="ntp-card-background.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_text</code></td>
      <td>
        <p>Die Textfarbe der neuen Tab-Seite.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit den in <code>ntp_background</code> und <code>ntp_card_background</code> verwendeten Farben kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_text": "rot"
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
          Die Hintergrundfarbe von Popups (wie dem Dropdown der URL-Leiste und den Pfeiltasten-Panels).
        </p>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "schwarz",
     "tab_background_text": "weiß",
     "popup": "rot"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit Symbolen und Text in weiß. Das Lesezeichen-für-diese-Seite-Symbol ist blau und gedrückt, ein geöffnetes Popup mit dem Titel 'Dieses Lesezeichen bearbeiten' wird angezeigt mit einem roten Hintergrund. Die Hintergrundfarbe des Popups ist rot." src="theme-popup.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_border</code></td>
      <td>
        <p>Die Rahmenfarbe von Popups.</p>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "schwarz",
     "tab_background_text": "weiß",
     "popup": "schwarz",
     "popup_text": "weiß",
     "popup_border": "rot"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit Symbolen und Text in weiß. Das Lesezeichen-für-diese-Seite-Symbol ist blau und gedrückt, ein geöffnetes Popup mit dem Titel 'Dieses Lesezeichen bearbeiten' wird angezeigt mit einem roten Umriss und schwarzem Hintergrund. Das Popup hat einen roten Rahmen." src="theme-popup_border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Elementen, die innerhalb von Popups mit der Tastatur hervorgehoben werden (wie das ausgewählte URL-Dropdown-Element).
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Es wird empfohlen, <code>popup_highlight_text</code> zu definieren, um die Standardtextfarbe des Browsers auf verschiedenen Plattformen zu überschreiben.
          </p>
        </div>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "schwarz",
     "tab_background_text": "weiß",
     "popup_highlight": "rot",
     "popup_highlight_text": "weiß"
  }
}</pre
          >
        </details>
        <p><img alt="Screenshot von Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit Symbolen und Text in weiß. Ein Popup mit Suchergebnissen wird angezeigt mit einem hervorgehobenen Element, dessen Hintergrund rot ist. Die Hintergrundfarbe des hervorgehobenen Elements innerhalb des Popups ist rot." src="theme-popup_highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight_text</code></td>
      <td>
        <p>Die Textfarbe von hervorgehobenen Elementen innerhalb von Popups.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit der in <code>popup_highlight</code> verwendeten Farbe kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "schwarz",
     "tab_background_text": "weiß",
     "popup_highlight": "schwarz",
     "popup_highlight_text": "rot"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit Symbolen und Text in weiß. Ein Popup mit Suchergebnissen wird angezeigt, dessen hervorgehobener Text rot ist mit schwarzem Hintergrund. Die Textfarbe des hervorgehobenen Elements kontrastiert gut mit dem schwarzen Hintergrund dieses Elements." src="theme-popup_highlight_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_text</code></td>
      <td>
        <p>Die Textfarbe von Popups.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit der in <code>popup</code> verwendeten Farbe kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "schwarz",
     "tab_background_text": "weiß",
     "popup": "schwarz",
     "popup_text": "rot"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit Symbolen und Text in weiß. Ein Popup mit Suchergebnissen wird angezeigt, dessen Texte rot sind. Die Textfarbe kontrastiert gut mit dem schwarzen Hintergrund des Popups." src="popup_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar</code></td>
      <td>
        <p>Die Hintergrundfarbe der Seitenleiste.</p>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar": "rot",
     "sidebar_highlight": "weiß",
     "sidebar_highlight_text": "grün",
     "sidebar_text": "weiß"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Nahaufnahmen-Screenshot eines geöffneten Seitenleistenfensters. Die Hintergrundfarbe der Seitenleiste ist rot." src="sidebar-colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_border</code></td>
      <td>
        <p>Die Farbe des Rahmens und Trennelements der Browser-Seitenleiste</p>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar_border": "rot"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Nahaufnahmen-Screenshot der Lesezeichen-Seitenleiste des Firefox-Browsers mit einem roten horizontalen Trennelement zwischen dem Seitentitel und dem Seitenmenü. Die Farbe des Rahmens und Trennelements der Seitenleiste ist rot." src="sidebar-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight</code></td>
      <td>
        <p>Die Hintergrundfarbe von hervorgehobenen Zeilen in eingebauten Seitenleisten</p>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar_highlight": "rot",
     "sidebar_highlight_text": "weiß"
  }
}</pre
          >
        </details>
        <p><img alt="Eine Nahaufnahme der Lesezeichen-Seitenleiste des Firefox-Browsers mit einem hervorgehobenen Element. Die Hintergrundfarbe einer hervorgehobenen Zeile in der Seitenleiste ist rot mit weißem Text." src="sidebar-highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight_text</code></td>
      <td>
        <p>Die Textfarbe von hervorgehobenen Zeilen in Seitenleisten.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit der in <code>sidebar_highlight</code> verwendeten Farbe kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "sidebar_highlight": "rosa",
    "sidebar_highlight_text": "rot",
  }
}</pre
          >
        </details>
        <p><img alt="Nahaufnahme der Lesezeichen-Seitenleiste des Firefox-Browsers mit einem hervorgehobenen Element. Die Textfarbe der hervorgehobenen Zeile in der Seitenleiste ist rot. Die Textfarbe kontrastiert gut mit der rosa Hintergrundfarbe der hervorgehobenen Zeile." src="sidebar-highlight-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_text</code></td>
      <td>
        <p>Die Textfarbe der Seitenleisten.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit der in <code>sidebar</code> verwendeten Farbe kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar": "rot",
     "sidebar_highlight": "weiß",
     "sidebar_highlight_text": "grün",
     "sidebar_text": "weiß"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Nahaufnahmen-Screenshot eines geöffneten Seitenleistenfensters. Die Textfarbe innerhalb der Seitenleiste ist weiß. Die Textfarbe kontrastiert gut mit dem roten Hintergrund der Seitenleiste." src="sidebar-colors.png" /></p>
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
        <p>Die Farbe des vertikalen Trennelements der Hintergrund-Tabs.</p>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "schwarz",
     "tab_background_text": "weiß",
     "tab_background_separator": "rot"
  }
}</pre
          >
        </details>
        <p>
          <img
            alt="Eine Nahaufnahme von Browser-Tabs, um das Trennelement hervorzuheben."
            src="theme-tab-background-separator.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>tab_background_text</code></td>
      <td>
        <p>
          Die Farbe des Textes, der in den inaktiven Seitentabs angezeigt wird. Falls <code>tab_text</code> oder <code>bookmark_text</code> nicht angegeben ist, gilt dies für den aktiven Tab-Text.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit den in <code>tab_selected</code> oder <code>frame</code> und <code>frame_inactive</code> verwendeten Farben kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "schwarz",
    "toolbar": "weiß",
    "tab_background_text": "rot"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind weiß mit roten Symbolen und rotem Text. Die Farbe des Textes im geöffneten Tab ist rot. Die Textfarbe kontrastiert gut mit der schwarzen Hintergrundfarbe des Tabs." src="theme-tab_background_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_line</code></td>
      <td>
        <p>Die Farbe der ausgewählten Tab-Linie.</p>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "schwarz",
     "tab_background_text": "weiß",
     "tab_line": "rot"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind dunkler grau mit helleren grauen Symbolen und weißem Text. Der ausgewählte Tab hat einen roten Umriss." src="theme-tab_line.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_loading</code></td>
      <td>
        <p>Die Farbe des Tab-Ladeanzeigers und des Tab-Ladeausbruchs.</p>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "schwarz",
     "tab_background_text": "weiß",
     "tab_loading": "rot"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind dunkler grau mit Symbolen und Text in weiß. Im ausgewählten Tab ist ein animierter Ladeanzeiger rot." src="theme-tab_loading.gif" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_selected</code></td>
      <td>
        <p>
          Die Hintergrundfarbe des ausgewählten Tabs. Wenn nicht verwendet, wird die ausgewählte Tab-Farbe durch <code>frame</code> und <code>frame_inactive</code> festgelegt.
        </p>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "images": {
  "theme_frame": "weta.png"
},
  "colors": {
     "frame": "schwarz",
     "tab_background_text": "weiß",
     "tab_selected": "rot"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind dunkler grau mit Symbolen und Text in weiß. Der ausgewählte Tab hat einen roten Hintergrund und weißen Text." src="theme-tab_selected.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_text</code></td>
      <td>
        <p>
          Ab Firefox 59 repräsentiert es die Textfarbe für den ausgewählten Tab. Falls <code>tab_line</code> nicht angegeben ist, definiert es auch die Farbe der ausgewählten Tab-Linie.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit den in <code>tab_selected</code> oder <code>frame</code> und <code>frame_inactive</code> verwendeten Farben kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "images": {
  "theme_frame": "weta.png"
},
  "colors": {
     "frame": "schwarz",
     "tab_background_text": "weiß",
     "tab_selected": "weiß",
     "tab_text": "rot"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox hat ein Insekt-Theme. Die URL-Leiste ist heller grau mit weißen Symbolen. Der Text des ausgewählten Tabs ist rot mit weißem Hintergrund." src="theme-tab_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar</code></td>
      <td>
        <p>
          Die Hintergrundfarbe für die Navigationsleiste, die Lesezeichenleiste und den ausgewählten Tab.
        </p>
        <p>Dies setzt auch die Hintergrundfarbe der "Suchen" Leiste.</p>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "schwarz",
    "toolbar": "rot",
    "tab_background_text": "weiß"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Der Tab, die In-Page-Suchleiste und die URL-Bar sind rot mit weißem Text und Symbolen, mit Ausnahme der In-Page-Suchleiste, wo der Text und das Symbol schwarz sind." src="toolbar.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_bottom_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie, die die Unterseite der Werkzeugleiste vom darunterliegenden Bereich trennt.
        </p>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "schwarz",
    "tab_background_text": "weiß",
    "toolbar_bottom_separator": "rot"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit weißem Text und Symbolen. Eine horizontale rote Linie trennt die Unterseite der Werkzeugleiste und den Beginn der Anzeige der Webseite." src="theme-toolbar_bottom_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field</code></td>
      <td>
        <p>
          Die Hintergrundfarbe für Felder in der Werkzeugleiste, wie die URL-Leiste.
        </p>
        <p>
          Dies setzt auch die Hintergrundfarbe des <strong>Feld 'In Seite suchen'</strong>.
        </p>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "schwarz",
    "tab_background_text": "weiß",
    "toolbar_field": "rot"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs, die In-Page-Suchleiste und die URL-Leiste sind heller grau mit weißem Text und Symbolen. Der Hintergrund der URL-Leiste ist rot. Die In-Page-Suchleiste ist weiß mit schwarzem Text. Das Suchfeld in der Seite ist rot mit schwarzem Text." src="toolbar-field.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border</code></td>
      <td>
        <p>Die Rahmenfarbe für Felder in der Werkzeugleiste.</p>
        <p>
          Dies setzt auch die Rahmenfarbe des <strong>Feld 'In Seite suchen'</strong>.
        </p>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "schwarz",
    "toolbar": "schwarz",
    "tab_background_text": "weiß",
    "toolbar_field": "schwarz",
    "toolbar_field_text": "weiß",
    "toolbar_field_border": "rot"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs, die In-Page-Suchleiste und die URL-Leiste sind schwarz mit weißem Text und Symbolen. Die URL-Leiste und die Suchfelder in der Seite sind mit rotem Rand umrandet." src="toolbar-field-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border_focus</code></td>
      <td>
        <p>Die Fokusrahmenfarbe für Felder in der Werkzeugleiste.</p>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "schwarz",
    "toolbar": "schwarz",
    "tab_background_text": "weiß",
    "toolbar_field": "schwarz",
    "toolbar_field_text": "weiß",
    "toolbar_field_border_focus": "rot"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste sind schwarz mit weißem Text und Symbolen. Das Feld in der URL-Leiste ist fokussiert und mit rotem Rand umrandet." src="theme-toolbar_field_border_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_focus</code></td>
      <td>
        <p>
          Die Fokus-Hintergrundfarbe für Felder in der Werkzeugleiste, wie die URL-Leiste.
        </p>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "schwarz",
    "toolbar": "schwarz",
    "tab_background_text": "weiß",
    "toolbar_field": "schwarz",
    "toolbar_field_text": "weiß",
    "toolbar_field_focus": "rot"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs, die In-Page-Suche und die URL-Leiste sind schwarz mit weißem Text und Symbolen. Die Hintergrundfarbe der fokussierten URL-Leiste ist rot und der Text ist weiß." src="theme-toolbar_field_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight</code></td>
      <td>
        Die Hintergrundfarbe, die verwendet wird, um die aktuelle Auswahl von Text in der URL-Leiste anzuzeigen (und in der Suchleiste, wenn sie als separate Box konfiguriert ist).
        <details open>
          <summary>Siehe Beispiel</summary>
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
            alt="Browser Firefox ist weiß. Die Tabs und die URL-Leiste sind weiß mit Text und Symbolen in schwarz. Das Feld in der URL-Leiste ist fokussiert und mit blauem Rand umrandet, und der Text in der URL-Leiste ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier gibt das Feld <code>toolbar_field_highlight</code> an, dass die Hervorhebungsfarbe ein helles Grün ist, während der Text mit <code>toolbar_field_highlight_text</code> auf ein mittelschattiges Grün eingestellt ist.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight_text</code></td>
      <td>
        <p>
          Die Farbe, die verwendet wird, um Text zu zeichnen, der derzeit in der URL-Leiste ausgewählt ist (und in der Suchleiste, wenn sie als separate Box konfiguriert ist).
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit der in <code>toolbar_field_highlight</code> verwendeten Farbe kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Siehe Beispiel</summary>
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
            alt="Browser Firefox ist weiß. Die Tabs und die URL-Leiste sind weiß mit Text und Symbolen in schwarz. Das Feld in der URL-Leiste ist fokussiert und mit blauem Rand umrandet, und der Text in der URL-Leiste ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier wird das Feld <code>toolbar_field_highlight_text</code> verwendet, um die Textfarbe auf ein mitteldunkles Grün einzustellen, während die Hervorhebungsfarbe ein helles Grün ist.
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
          Die Farbe der Trennlinien innerhalb der URL-Leiste. In Firefox 58 wurde dies als <code>toolbar_vertical_separator</code> implementiert.
        </p>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "schwarz",
    "toolbar": "schwarz",
    "tab_background_text": "weiß",
    "toolbar_field_separator": "rot"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Browser Firefox ist schwarz. Die Tabs und die URL-Leiste sind schwarz mit Text und Symbolen in weiß. Innerhalb des weißen URL-Leistenfeldes, nach dem Reader-Mode-Symbol, ist eine rote vertikale Linie, die die restlichen URL-Leistensymbole trennt. Die Farbe der vertikalen Trennlinie innerhalb der URL-Leiste ist rot." src="theme-toolbar_field_separator.png" /></p>
        <p>
          In diesem Screenshot ist <code>"toolbar_vertical_separator"</code> die rote vertikale Linie in der URL-Leiste, die das Reader-Mode-Symbol von den anderen Symbolen trennt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text</code></td>
      <td>
        <p>
          Die Farbe des Textes in Feldern in der Werkzeugleiste, wie der URL-Leiste. Dies setzt auch die Textfarbe im <strong>Feld 'In Seite suchen'</strong>.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit der in <code>toolbar_field</code> verwendeten Farbe kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "schwarz",
    "toolbar": "schwarz",
    "tab_background_text": "weiß",
    "toolbar_field": "schwarz",
    "toolbar_field_text": "rot"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste sind schwarz mit weißem Text und Symbolen. Der Text in der URL-Leiste ist rot. Die Symbole und das Suchfeld in der In-Page-Suchleiste haben roten Text mit schwarzem Hintergrund." src="toolbar-field-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text_focus</code></td>
      <td>
        <p>
          Die Farbe des Textes in fokussierten Feldern in der Werkzeugleiste, wie der URL-Leiste.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit der in <code>toolbar_field_focus</code> verwendeten Farbe kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "schwarz",
    "toolbar": "schwarz",
    "tab_background_text": "weiß",
    "toolbar_field": "schwarz",
    "toolbar_field_text": "weiß",
    "toolbar_field_text_focus": "rot"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit zwei geöffneten Tabs. Der Browser ist schwarz. Die Tabs und die URL-Leiste sind schwarz mit Text und Symbolen in weiß. Die URL-Leiste hat den Fokus; der Text und die Symbole in der Leiste sind rot mit schwarzem Hintergrund." src="theme-toolbar_field_text_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_text</code></td>
      <td>
        <p>
          Die Farbe des Textes in der Werkzeugleiste. Dies setzt auch die Farbe des Textes in der "Suchen"-Leiste.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Für die Kompatibilität mit Chrome verwenden Sie das Alias <code>bookmark_text</code>.
          </p>
        </div>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "schwarz",
    "tab_background_text": "weiß",
    "toolbar": "schwarz",
    "toolbar_text": "rot"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Der Tab, die In-Page-Suchleiste und die URL-Leiste sind schwarz mit rotem Text und Symbolen. Der Text im aktiven Tab, der Navigationsleiste und der Suchleiste ist rot." src="toolbar-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_top_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie, die den oberen Teil der Werkzeugleiste vom darüberliegenden Bereich trennt.
        </p>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "schwarz",
    "tab_background_text": "weiß",
    "toolbar": "schwarz",
    "toolbar_top_separator": "rot"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Der Tab und die URL-Leiste sind schwarz mit weißem Text und Symbolen. Eine rote Linie trennt die Oberseite der URL-Leiste vom Browser." src="theme-toolbar_top_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_vertical_separator</code></td>
      <td>
        <p>
          Die Farbe des Trennelements in der Lesezeichen-Symbolleiste. In Firefox 58 entspricht dies der Farbe der Trennlinien innerhalb der URL-Leiste.
        </p>
        <details open>
          <summary>Siehe Beispiel</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "schwarz",
    "tab_background_text": "weiß",
    "toolbar": "schwarz",
    "toolbar_vertical_separator": "rot"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste sind schwarz mit Text und Symbolen in weiß. Die Farbe der vertikalen Linie, die die Lesezeichen-Symbolleiste vom Inhalt rechts trennt, ist rot." src="theme-toolbar_vertical_separator.png" /></p>
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
          Ein Array von Enumerationswerten, die die Ausrichtung des entsprechenden <code>"additional_backgrounds":</code> Array-Elements definieren.<br />Die Ausrichtungsoptionen umfassen:
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
          Ein Array von Enumerationswerten, die steuern, wie das entsprechende <code>"additional_backgrounds":</code> Array-Element wiederholt wird. Optionen umfassen:
        </p>
        <ul>
          <li><code>"no-repeat"</code></li>
          <li><code>"repeat"</code></li>
          <li><code>"repeat-x"</code></li>
          <li><code>"repeat-y"</code></li>
        </ul>
        <p>Wenn nicht angegeben, ist der Standardwert <code>"no-repeat"</code>.</p>
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
          Bestimmt, welches Farbschema auf das Chrome (z.B. Kontextmenüs) und den Inhalt (z.B. eingebaute Seiten und das bevorzugte Farbschema für Webseiten) angewendet wird. Optionen umfassen:
        </p>
        <ul>
          <li><code>"auto"</code> – ein helles oder dunkles Schema basierend auf dem Theme automatisch.</li>
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
          Bestimmt, welches Farbschema auf den Inhalt (z.B. eingebaute Seiten und bevorzugtes Farbschema für Webseiten) angewendet wird. Überschreibt <code>color_scheme</code>. Optionen umfassen:
        </p>
        <ul>
          <li><code>"auto"</code> – ein helles oder dunkles Schema basierend auf dem Theme automatisch.</li>
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

Ein grundlegendes Theme muss ein Bild definieren, das dem Kopfbereich hinzugefügt wird, die Akzentfarbe, die im Kopfbereich verwendet wird, und die Textfarbe, die im Kopfbereich verwendet wird:

```json
 "theme": {
   "images": {
     "theme_frame": "images/sun.jpg"
   },
   "colors": {
     "frame": "#CF723F",
     "tab_background_text": "#000"
   }
 }
```

Mehrere Bilder können verwendet werden, um den Kopfbereich zu füllen. Verwenden Sie vor Firefox Version 60 ein leeres oder transparentes Kopfbereichsbild, um die Platzierung jedes zusätzlichen Bildes zu steuern:

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
     "tab_background_text": "#ffffff"
   }
 }
```

Sie können den Kopfbereich auch mit einem wiederholten Bild oder Bildern füllen, in diesem Fall ein einzelnes Bild, das in der oberen Mitte des Kopfbereichs verankert ist und über den restlichen Kopfbereich wiederholt wird:

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
     "tab_background_text": "#000"
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

![Ein Browserfenster mit zwei geöffneten Tabs und dunkelgrüner Hintergrundfarbe im Kopfbereich. Der inaktive Tab hat eine weiße Textfarbe. Der aktive Tab und die Werkzeugleiste haben eine blaue Hintergrundfarbe mit cyanfarbigem Text. Die URL-Leiste hat eine orangefarbene Hintergrundfarbe mit weißen Rändern, eine grüne Textfarbe und einen weißfarbigen vertikalen Linienseparator. Eine rote Linie wird verwendet, um die Tabs oben zu trennen, und eine weiße Linie, um die Tabs vom darunterliegenden Inhalt zu trennen.](theme.png)

In diesem Screenshot ist `"toolbar_vertical_separator"` die weiße vertikale Linie in der URL-Leiste, die das Reader-Mode-Symbol von den anderen Symbolen trennt.

## Browser-Kompatibilität

{{Compat}}

### Chrome-Kompatibilität

In Chrome:

- `colors/toolbar_text` wird nicht verwendet, verwenden Sie stattdessen `colors/bookmark_text`.
- `images/theme_frame` verankert das Bild an der oberen linken Ecke des Kopfbereichs, und wenn das Bild den Kopfbereich nicht ausfüllt, kachelt das Bild.
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
