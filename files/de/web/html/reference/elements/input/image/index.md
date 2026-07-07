---
title: '`<input type="image">` HTML-Attributwert'
short-title: <input type="image">
slug: Web/HTML/Reference/Elements/input/image
l10n:
  sourceCommit: 3a814443b0b97b9334811b7b1406cae3a009d487
---

{{HTMLElement("input")}}-Elemente des Typs **`image`** werden verwendet, um grafische Sende-Schaltflächen zu erstellen, d.h. Sende-Schaltflächen, die die Form eines Bildes annehmen, anstatt als Text angezeigt zu werden.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;image&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<p>Sign in to your account:</p>

<div>
  <label for="userId">User ID</label>
  <input type="text" id="userId" name="userId" />
</div>

<input
  type="image"
  id="image"
  alt="Login"
  src="/shared-assets/images/examples/login-button.png" />
```

```css interactive-example
label {
  font-size: 0.8rem;
}

label,
input[type="image"] {
  margin-top: 1rem;
}

input[type="image"] {
  width: 80px;
}
```

## Wert

`<input type="image">`-Elemente akzeptieren keine `value`-Attribute. Der Pfad zu dem anzuzeigenden Bild wird im `src`-Attribut angegeben.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, unterstützen `image`-Button-Eingeben die folgenden Attribute.

### alt

Das `alt`-Attribut liefert einen alternativen Text, der als Beschriftung der Schaltfläche verwendet wird, falls das Bild nicht angezeigt werden kann (aufgrund eines Fehlers, eines {{Glossary("user_agent", "User Agents")}}, der keine Bilder anzeigen kann oder so konfiguriert ist, dass keine Bilder angezeigt werden, oder wenn der Benutzer ein Bildschirmlesegerät verwendet). Falls vorhanden, muss es ein nicht leerer String sein, der sich als Beschriftung für die Schaltfläche eignet.

Zum Beispiel sollten Sie, wenn Sie eine grafische Schaltfläche mit einem Icon und/oder einem Bildtext "Jetzt anmelden" haben, das `alt`-Attribut etwas wie `Jetzt anmelden` setzen.

> [!NOTE]
> Obwohl das `alt`-Attribut technisch optional ist, sollten Sie es immer einschließen, um die Benutzerfreundlichkeit Ihrer Inhalte zu maximieren.

Funktional arbeitet das `alt`-Attribut des `<input type="image">`-Elements genau wie das [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Attribut in {{HTMLElement("img")}}-Elementen.

### formaction

Ein String, der die URL angibt, an die die Daten gesendet werden sollen. Dies hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut auf dem {{HTMLElement("form")}}-Element, das das {{HTMLElement("input")}}-Element besitzt.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formenctype

Ein String, der die Kodierungsmethode identifiziert, die beim Senden der Formulardaten an den Server verwendet werden soll. Es gibt drei zulässige Werte:

- `application/x-www-form-urlencoded`
  - : Dies, der Standardwert, sendet die Formulardaten als String nach {{Glossary("Percent-encoding", "percent-encoding")}} des Textes mit einem Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}}.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData)-API zur Verwaltung der Daten und ermöglicht die Übertragung von Dateien an den Server. Sie _müssen_ diesen Kodierungstyp verwenden, wenn Ihr Formular ein {{HTMLElement("input")}}-Element vom [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `file` enthält ([`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)).
- `text/plain`
  - : Klartext; hauptsächlich nützlich nur zum Debuggen, sodass Sie leicht die Daten sehen können, die gesendet werden sollen.

Wenn angegeben, überschreibt der Wert des `formenctype`-Attributs das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formulars, dem es zugehört.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formmethod

Ein String, der die HTTP-Methode angibt, die beim Senden der Formulardaten verwendet werden soll; dieser Wert überschreibt jedes [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Besitzformlars. Zulässige Werte sind:

- `get`
  - : Eine URL wird konstruiert, indem mit der URL begonnen wird, die durch das `formaction`- oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut angegeben wird, dann ein Fragezeichen ("?") angehängt wird und dann die Formulardaten hinzugefügt werden, die entsprechend dem `formenctype` oder dem [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut kodiert sind. Diese URL wird dann mit einer HTTP-{{HTTPMethod("get")}}-Anfrage an den Server gesendet. Diese Methode funktioniert gut für Formulare, die nur {{Glossary("ASCII", "ASCII")}}-Zeichen enthalten und keine Nebeneffekte haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten sind im Hauptteil der Anfrage enthalten, die an die durch das `formaction`- oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut angegebene URL gesendet wird, mit einer HTTP-{{HTTPMethod("post")}}-Anfrage. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode wird verwendet, um anzuzeigen, dass die Schaltfläche den Dialog schließt, dem das Eingabefeld zugeordnet ist, und nicht die Formulardaten überträgt.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formnovalidate

Ein boolesches Attribut, das, falls vorhanden, angibt, dass das Formular nicht überprüft werden soll, bevor es an den Server gesendet wird. Dies überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attributs des Besitzformlars des Elements.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formtarget

Ein String, der einen Namen oder ein Schlüsselwort angibt, der angibt, wo die Antwort angezeigt werden soll, die nach dem Senden des Formulars empfangen wird. Der String muss der Name eines **Browsing-Kontextes** (d.h. Tab, Fenster oder {{HTMLElement("iframe")}}. Ein hier angegebener Wert überschreibt jedes Ziel, das durch das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut im {{HTMLElement("form")}}, dem dieses Eingabefeld gehört, angegeben ist.

Zusätzlich zu den tatsächlichen Namen von Tabs, Fenstern oder Inline-Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in den gleichen Browsing-Kontext, der das Formular enthält. Dies ersetzt das aktuelle Dokument mit den empfangenen Daten. Dies ist der Standardwert, wenn keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten, Browsing-Kontext. Dies ist typischerweise ein neuer Tab im gleichen Fenster wie das aktuelle Dokument, kann jedoch je nach Konfiguration des {{Glossary("user_agent", "User Agents")}} variieren.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten Kontext gibt, verhält sich dies wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Browsing-Kontext; dies ist der Browsing-Kontext, der der oberste Vorfahr des aktuellen Kontextes ist. Wenn der aktuelle Kontext der oberste Kontext ist, verhält sich dies wie `_self`.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### height

Eine Zahl, die die Höhe in CSS-Pixeln angibt, in der das durch das `src`-Attribut angegebene Bild gezeichnet werden soll.

### src

Ein String, der die URL der Bilddatei angibt, um die grafische Sende-Schaltfläche darzustellen. Wenn der Benutzer mit dem Bild interagiert, wird die Eingabe wie jede andere Schaltflächen-Eingabe behandelt.

### width

Eine Zahl, die die Breite angibt, in der das Bild gezeichnet werden soll, in CSS-Pixeln.

## Veraltete Attribute

Das folgende Attribut wurde von HTML 4 für `image`-Eingaben definiert, aber nicht von allen Browsern implementiert und ist seitdem veraltet.

### usemap

Wenn `usemap` angegeben ist, muss es der Name eines Bildkarten-Elements, {{HTMLElement("map")}}, sein, das eine Bildkarte definiert, die mit dem Bild verwendet werden soll. Diese Verwendung ist veraltet; Sie sollten auf das {{HTMLElement("img")}}-Element umsteigen, wenn Sie Bildkarten verwenden möchten.

## Verwendung von Bildeingaben

Das `<input type="image">`-Element ist ein {{Glossary("replaced_elements", "ersetztes Element")}} (ein Element, dessen Inhalt nicht von der CSS-Schicht generiert oder direkt verwaltet wird) und verhält sich ähnlich wie ein normales {{htmlelement("img")}}-Element, jedoch mit den Fähigkeiten einer [Sende-Schaltfläche](/de/docs/Web/HTML/Reference/Elements/input/submit).

### Wesentliche Merkmale der Bildeingabe

Lassen Sie uns ein grundlegendes Beispiel betrachten, das alle wesentlichen Merkmale enthält, die Sie verwenden müssten (diese funktionieren genau so wie im `<img>`-Element):

```html
<input
  id="image"
  type="image"
  width="100"
  height="30"
  alt="Login"
  src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png" />
```

{{ EmbedLiveSample('Essential_image_input_features', 600, 50) }}

- Das [`src`](/de/docs/Web/HTML/Reference/Elements/input#src)-Attribut wird verwendet, um den Pfad zu dem Bild anzugeben, das auf der Schaltfläche angezeigt werden soll.
- Das [`alt`](/de/docs/Web/HTML/Reference/Elements/input#alt)-Attribut bietet Alt-Text für das Bild, sodass Benutzer von Bildschirmlesegeräten eine bessere Vorstellung davon erhalten, wofür die Schaltfläche verwendet wird. Es wird auch angezeigt, wenn das Bild aus irgendeinem Grund nicht angezeigt werden kann (z.B., wenn der Pfad falsch geschrieben ist). Verwenden Sie, wenn möglich, Text, der mit dem Beschriftungstext übereinstimmt, den Sie verwenden würden, wenn Sie eine standardmäßige Sende-Schaltfläche verwenden würden.
- Die [`width`](/de/docs/Web/HTML/Reference/Elements/input#width)- und [`height`](/de/docs/Web/HTML/Reference/Elements/input#height)-Attribute werden verwendet, um die Breite und Höhe anzugeben, in der das Bild angezeigt werden soll, in Pixeln. Die Schaltfläche ist genauso groß wie das Bild; wenn Sie die Trefffläche der Schaltfläche größer als das Bild benötigen, müssen Sie CSS verwenden (z.B. {{cssxref("padding")}}). Außerdem, wenn Sie nur eine Dimension angeben, wird die andere automatisch angepasst, sodass das Bild sein ursprüngliches {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehält.

### Standardverhalten von Formularen außer Kraft setzen

`<input type="image">`-Elemente — wie normale [Sende-Schaltflächen](/de/docs/Web/HTML/Reference/Elements/input/submit) — können eine Reihe von Attributen akzeptieren, die das Standardverhalten des Formulars außer Kraft setzen:

- `formaction`
  - : Die URI eines Programms, das die von dem Eingabe-Element übermittelten Informationen verarbeitet; überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Besitzerformulars des Elements.
- `formenctype`
  - : Gibt die Art von Inhalt an, die verwendet wird, um das Formular an den Server zu senden. Mögliche Werte sind:
    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht angegeben ist.
    - `text/plain`.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Besitzerformulars des Elements.

- `formmethod`
  - : Gibt die HTTP-Methode an, die der Browser zum Senden des Formulars verwendet. Mögliche Werte sind:
    - `post`: Die Daten aus dem Formular sind im Hauptteil des Formulars enthalten und werden an den Server gesendet.
    - `get`: Die Daten aus dem Formular werden an die **`form`**-Attribut-URI angehängt, mit einem '?' als Trennzeichen, und die resultierende URI wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular keine Nebeneffekte hat und nur aus ASCII-Zeichen besteht.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Besitzerformulars des Elements.

- `formnovalidate`
  - : Ein boolesches Attribut, das angibt, dass das Formular beim Senden nicht validiert werden soll. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des Besitzerformulars des Elements.
- `formtarget`
  - : Ein Name oder Schlüsselwort, das angibt, wo die Antwort angezeigt werden soll, die nach dem Senden des Formulars empfangen wird. Dies ist ein Name oder ein Schlüsselwort für einen _Browsing-Kontext_ (z.B. Tab, Fenster oder Inline-Frame). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Besitzerformulars des Elements. Die folgenden Schlüsselwörter haben besondere Bedeutungen:
    - `_self`: Lade die Antwort in den gleichen Browsing-Kontext wie den aktuellen. Dieser Wert ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lade die Antwort in einen neuen unbenannten Browsing-Kontext.
    - `_parent`: Lade die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten gibt, verhält sich diese Option wie `_self`.
    - `_top`: Lade die Antwort in den obersten Browsing-Kontext (d.h. den Browsing-Kontext, der ein Vorfahr des aktuellen ist und keinen übergeordneten hat). Wenn es keinen übergeordneten gibt, verhält sich diese Option wie `_self`.

### Verwendung der x und y Datenpunkte

Wenn Sie ein Formular mit einer Schaltfläche, die mit `<input type="image">` erstellt wurde, senden, werden automatisch zwei zusätzliche Datenpunkte an den Server übermittelt — `x` und `y`. Sie können dies in unserem [X Y-Koordinaten-Beispiel](https://mdn.github.io/learning-area/html/forms/image-type-example/xy-coordinates-example.html) in Aktion sehen.

Wenn Sie auf das Bild klicken, um das Formular zu senden, werden die Daten als Parameter an die URL angehängt, wie z.B. `?x=52&y=55`. Wenn das Eingabefeld ein [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut hat, wird der angegebene Name mit einem Punkt als Trennzeichen vor jedem Koordinateneintrag in der URL hinzugefügt. Wenn der `name` z.B. `position` wäre, würden die zurückgegebenen Koordinaten in der URL formatiert als `?position.x=52&position.y=55`.

Dies sind die X- und Y-Koordinaten des Bildes, auf die die Maus geklickt hat, um das Formular zu senden, wobei (0,0) der obere linke Rand des Bildes ist und die Standardeinstellung, falls die Übertragung ohne einen Klick auf das Bild erfolgt. Diese können verwendet werden, wenn die Position, auf die das Bild geklickt wurde, von Bedeutung ist, z.B. könnten Sie eine Karte haben, die bei einem Klick die geklickten Koordinaten an den Server sendet. Der serverseitige Code ermittelt dann, welcher Ort geklickt wurde, und gibt Informationen über nahe gelegene Orte zurück.

In unserem obigen Beispiel könnten wir einen serverseitigen Code schreiben, der ermittelt, auf welche Farbe anhand der übermittelten Koordinaten geklickt wurde, und eine Zählung der bevorzugten Farben führt, für die Leute abgestimmt haben.

### Anpassung der Bildposition und Skalierungsalgorithmus

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des `<input>`-Elementrahmens anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Bildes angepasst wird, um innerhalb des Rahmens zu passen. Dies ermöglicht es Ihnen, einen Rahmen für das Bild mit den `width`- und `height`-Attributen festzulegen, um Platz im Layout zu reservieren, und dann anzupassen, wo sich das Bild in diesem Bereich befindet und wie (oder ob) es skaliert wird, um diesen Raum zu nutzen.

## Beispiele

### Ein Anmeldeformular

Das folgende Beispiel zeigt die gleiche Schaltfläche wie zuvor, jedoch im Kontext eines typischen Anmeldeformulars.

{{ EmbedLiveSample('A_login_form', 600, 170) }}

#### HTML

```html
<form>
  <p>Login to your account</p>
  <div>
    <label for="userId">User ID</label>
    <input type="text" id="userId" name="userId" />
  </div>
  <div>
    <label for="pwd">Password</label>
    <input type="password" id="pwd" name="pwd" />
  </div>
  <div>
    <input
      id="image"
      type="image"
      src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png"
      alt="Login"
      width="100" />
  </div>
</form>
```

#### CSS

Und nun etwas CSS, um die Elemente besser anzuordnen:

```css
div {
  margin-bottom: 10px;
}

label {
  display: inline-block;
  width: 70px;
  text-align: right;
  padding-right: 10px;
}
```

### Anpassung der Bildposition und Skalierung

In diesem Beispiel passen wir das vorherige Beispiel an, um mehr Platz für das Bild zu reservieren und dann die Größe und Position des tatsächlichen Bildes unter Verwendung von {{cssxref("object-fit")}} und {{cssxref("object-position")}} anzupassen.

{{EmbedLiveSample("Adjusting_the_image_position_and_scaling", 600, 300)}}

#### HTML

```html
<form>
  <p>Login to your account</p>
  <div>
    <label for="userId">User ID</label>
    <input type="text" id="userId" name="userId" />
  </div>
  <div>
    <label for="pwd">Password</label>
    <input type="password" id="pwd" name="pwd" />
  </div>
  <div>
    <input
      id="image"
      type="image"
      src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png"
      alt="Login"
      width="200"
      height="100" />
  </div>
</form>
```

#### CSS

```css
div {
  margin-bottom: 10px;
}

label {
  display: inline-block;
  width: 70px;
  text-align: right;
  padding-right: 10px;
}

#image {
  object-position: right top;
  object-fit: contain;
  background-color: #dddddd;
}
```

Hier ist `object-position` so konfiguriert, dass das Bild in der oberen rechten Ecke des Elements gezeichnet wird, während `object-fit` auf `contain` gesetzt ist, was angibt, dass das Bild in der größten Größe gezeichnet werden soll, die in den Elementrahmen passt, ohne das Seitenverhältnis zu ändern. Beachten Sie den sichtbaren grauen Hintergrund des Elements, der immer noch in dem Bereich zu sehen ist, der nicht vom Bild bedeckt wird.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Kein — das <code>value</code>-Attribut sollte nicht angegeben werden.</td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Elements/input#alt"><code>alt</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#src"><code>src</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#width"><code>width</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#height"><code>height</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#formaction"><code>formaction</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#formenctype"><code>formenctype</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#formmethod"><code>formmethod</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#formmethod"><code>formnovalidate</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#formtarget"><code>formtarget</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL Attribute</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>DOM Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, die dieses implementiert.
- Das HTML-{{HTMLElement("img")}}-Element
- Positionierung und Skalierung des Bildes innerhalb des `<input>`-Elementrahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
