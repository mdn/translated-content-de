---
title: orientation
slug: Web/Progressive_web_apps/Manifest/Reference/orientation
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das `orientation`-Manifest-Element wird verwendet, um die Standardorientierung für Ihre Webanwendung anzugeben. Es definiert, wie die App bei Start und während der Benutzung in Bezug auf die Bildschirmorientierung des Geräts angezeigt werden soll, insbesondere auf Geräten, die mehrere Orientierungen unterstützen.

> [!NOTE]
> Die Orientierung der App kann zur Laufzeit auf verschiedene Weise geändert werden, z. B. durch die Verwendung der [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API).

## Syntax

```json-nolint
/* Keyword values */
"orientation": "any"
"orientation": "natural"
"orientation": "portrait"
"orientation": "portrait-primary"
"orientation": "portrait-secondary"
"orientation": "landscape"
"orientation": "landscape-primary"
"orientation": "landscape-secondary"
```

### Werte

- `orientation`
  - : Ein String, der die Standardorientierung für die Web-App angibt.
    Wenn das `orientation`-Element nicht angegeben ist oder ein ungültiger Wert bereitgestellt wird, verwendet die Web-App typischerweise die natürliche Orientierung des Geräts und alle Benutzer- oder Systemeinstellungen zur Orientierung.

    Der `orientation`-Wert muss eines der folgenden Schlüsselwörter sein:
    - `any`
      - : Zeigt die Web-App in jeder vom Betriebssystem des Geräts oder den Benutzereinstellungen erlaubten Orientierung an.
        Dies ermöglicht der App, sich frei zu drehen, um der Orientierung des Geräts zu entsprechen, wenn es gedreht wird.

    - `natural`
      - : Zeigt die Web-App in der vom Gerät als am natürlichsten betrachteten Orientierung an, wie vom Browser, Betriebssystem, den Benutzereinstellungen oder dem Bildschirm selbst bestimmt. Es entspricht der Art und Weise, wie das Gerät am häufigsten gehalten oder verwendet wird:
        - Auf Geräten, die typischerweise vertikal gehalten werden, wie Mobiltelefone, ist `natural` normalerweise `portrait-primary`.
        - Auf Geräten, die typischerweise horizontal verwendet werden, wie Computermonitore und Tablets, ist `natural` normalerweise `landscape-primary`.

        Wenn das Gerät gedreht wird, kann es sein, dass die App rotieren wird oder auch nicht, um der natürlichen Orientierung des Geräts zu entsprechen; dieses Verhalten kann je nach spezifischem Gerät, Browserverhalten und Benutzereinstellungen variieren.

    - `portrait`
      - : Zeigt die Web-App mit größerer Höhe als Breite an.
        Dies ermöglicht der App, zwischen den Orientierungen `portrait-primary` und `portrait-secondary` zu wechseln, wenn das Gerät gedreht wird.

    - `portrait-primary`
      - : Zeigt die Web-App im Hochformat an, typischerweise mit dem Gerät in aufrechter Position.
        Dies ist normalerweise die Standard-App-Orientierung auf Geräten, die von Natur aus hochformatig sind.
        Abhängig von Gerät und Browserverhalten wird die App typischerweise diese Orientierung beibehalten, selbst wenn das Gerät gedreht wird.

    - `portrait-secondary`
      - : Zeigt die Web-App im invertierten Hochformat an, was `portrait-primary` um 180 Grad gedreht entspricht.
        Abhängig von Gerät und Browserverhalten wird die App typischerweise diese Orientierung beibehalten, selbst wenn das Gerät gedreht wird.

    - `landscape`
      - : Zeigt die Web-App mit größerer Breite als Höhe an.
        Dies ermöglicht der App, zwischen den Orientierungen `landscape-primary` und `landscape-secondary` zu wechseln, wenn das Gerät gedreht wird.

    - `landscape-primary`
      - : Zeigt die Web-App im Querformat an, typischerweise mit dem Gerät in seiner standardmäßigen horizontalen Position.
        Dies ist normalerweise die Standard-App-Orientierung auf Geräten, die von Natur aus querformatig sind.
        Abhängig von Gerät und Browserverhalten wird die App typischerweise diese Orientierung beibehalten, selbst wenn das Gerät gedreht wird.

    - `landscape-secondary`
      - : Zeigt die Web-App im invertierten Querformat an, was `landscape-primary` um 180 Grad gedreht entspricht.
        Abhängig von Gerät und Browserverhalten wird die App typischerweise diese Orientierung beibehalten, selbst wenn das Gerät gedreht wird.

## Beschreibung

Um das `orientation`-Manifest-Element zu verstehen, ist es wichtig, mit den folgenden orientierungsbezogenen Konzepten vertraut zu sein:

- **Geräteorientierung**: Definiert, wie das Gerät physisch gehalten oder positioniert wird.
- **Bildschirmorientierung**: Definiert die physische Ausrichtung des Displays des Geräts.
- **App-Orientierung**: Definiert, wie der Inhalt der App im Verhältnis zur Bildschirmorientierung angezeigt wird.

Wenn ein Gerät gedreht wird, ändert es typischerweise die Bildschirmorientierung. Zum Beispiel wechselt das Drehen eines Mobiltelefons von vertikal zu horizontal normalerweise den Bildschirm vom Hochformat zum Querformat. Ohne eine spezifische Orientierung, die im Manifest festgelegt ist, passen die meisten Apps ihr Layout an, um in diese neue Bildschirmorientierung zu passen.

Das `orientation`-Element im Manifest ermöglicht es Ihnen, zu steuern, wie Ihre App auf diese Änderungen reagiert. Indem Sie eine bevorzugte Orientierung für Ihre App angeben, können Sie entscheiden, ob Ihre App sich an Bildschirmorientierungsänderungen anpassen oder ein festes Layout beibehalten sollte, unabhängig davon, wie das Gerät gehalten wird. Zum Beispiel, indem Sie `"orientation": "portrait-primary"` setzen, können Sie angeben, dass Ihre App vorzugsweise immer im aufrechten Hochformat relativ zum Bildschirm angezeigt werden soll, selbst wenn das Gerät gedreht wird. Der Browser oder das Betriebssystem wird versuchen, diese Präferenz soweit möglich zu berücksichtigen.

Das folgende Beispiel zeigt, wie das Layout einer Web-App aussehen könnte, wenn ein Mobiltelefon gedreht wird. Für dieses Beispiel wird angenommen, dass der `orientation`-Wert der App auf `any` gesetzt ist, wodurch die App zwischen allen `orientation`-Werten rotiert werden kann, wenn das Mobiltelefon gedreht wird. Außerdem wird angenommen, dass sowohl das Telefon als auch der Browser alle Orientierungen unterstützen. Die Sequenz zeigt eine Drehung im Uhrzeigersinn des Telefons, wobei jede Position von der Ausgangsposition aus gedreht ist:

- Oben links: `portrait-primary` (Ausgangsposition)
- Oben rechts: `landscape-primary` (90 Grad)
- Unten links: `portrait-secondary` (180 Grad)
- Unten rechts: `landscape-secondary` (270 Grad)

```html hidden
<div class="container">
  <div class="orientation">
    <div class="device portrait-primary">
      <div class="screen">
        <div class="title-bar">App Title Bar</div>
        <div class="content">App content in portrait mode</div>
      </div>
    </div>
    <div class="label"><code>portrait-primary</code></div>
  </div>
  <div class="orientation">
    <div class="device landscape-primary">
      <div class="screen">
        <div class="title-bar">App Title Bar</div>
        <div class="content">App content in landscape mode</div>
      </div>
    </div>
    <div class="label"><code>landscape-primary</code></div>
  </div>
  <div class="orientation">
    <div class="device portrait-secondary">
      <div class="screen">
        <div class="title-bar">App Title Bar</div>
        <div class="content">App content in inverted portrait mode</div>
      </div>
    </div>
    <div class="label"><code>portrait-secondary</code></div>
  </div>
  <div class="orientation">
    <div class="device landscape-secondary">
      <div class="screen">
        <div class="title-bar">App Title Bar</div>
        <div class="content">App content in inverted landscape mode</div>
      </div>
    </div>
    <div class="label"><code>landscape-secondary</code></div>
  </div>
</div>
```

```css hidden
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  padding: 20px;
}

.orientation {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.device {
  width: 200px;
  height: 300px;
  border: 5px solid black;
  border-radius: 20px;
  position: relative;
  background-color: white;
  margin-bottom: 10px;
}

.screen {
  width: 180px;
  height: 280px;
  border-radius: 15px;
  background-color: lightgrey;
  margin: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.title-bar {
  background-color: #4285f4;
  color: white;
  padding: 5px;
  text-align: center;
  font-weight: bold;
}

.content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
}

.landscape-primary,
.landscape-secondary {
  width: 300px;
  height: 200px;
}

.landscape-primary .screen,
.landscape-secondary .screen {
  width: 280px;
  height: 180px;
}

.portrait-secondary {
  transform: rotate(180deg);
}

.landscape-secondary {
  transform: rotate(180deg);
}

.label {
  margin-top: 10px;
  font-family: "Arial", sans-serif;
  font-size: 15px;
}
```

{{EmbedLiveSample('Description', '', 800)}}

### Umfang und Standardverhalten

Die angegebene `orientation` wird auf alle obersten {{Glossary("Browsing_context", "Browsing-Kontexte")}} der Web-App angewendet.

Wenn ein Browser den angegebenen `orientation`-Wert unterstützt, wird dieser als Standard-App-Orientierung während der gesamten Lebensdauer der App verwendet, es sei denn, er wird zur Laufzeit überschrieben.
Das bedeutet, dass Browser zu dieser Standardorientierung zurückkehren, wann immer der oberste Browsing-Kontext navigiert wird.

### Auswahl einer bevorzugten Orientierung für Ihre Web-App

Durch das Festlegen einer spezifischen Orientierung können Sie sicherstellen, dass Ihre Web-App optimal für ihre Inhalte und Benutzeroberfläche angezeigt wird.
Zum Beispiel ist eine Video-App oft besser für das Querformat geeignet, während eine Lese-App typischerweise besser im Hochformat funktioniert.

Das Nicht-Spezifizieren einer Orientierung kann auch eine bewusste Entscheidung sein, die es Ihrer Web-App ermöglicht, sich flexibel an verschiedene Geräte und Benutzerpräferenzen anzupassen.

### Vergleich von Manifest `orientation` und Verhalten der Screen Orientation API

Während das `orientation`-Element im Manifest die Standardorientierung der Web-App festlegt, kann die Orientierung eines obersten Browsing-Kontextes geändert werden, sobald die Web-App mit der [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API) ausgeführt wird.

Die `orientation`-Werte sind im Web-App-Manifest und in der Screen Orientation API ähnlich, aber ihr Verhalten und Zweck unterscheiden sich.

- Web-App-Manifest:
  - Gibt die bevorzugte Standardorientierung der Web-App über das `orientation`-Element vor.
  - Setzt die anfängliche Orientierung, wenn die App gestartet wird.

- Screen Orientation API:
  - Verwendet Orientierungswerte, um den Bildschirm auf eine bestimmte Ausrichtung zu sperren.
  - Erlaubt dynamische Änderungen der Orientierung zur Laufzeit (z. B. Sperren der Orientierung mit [`screen.orientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock)).

  > [!NOTE]
  > Die Methode [`lock()`](/de/docs/Web/API/ScreenOrientation/lock) der Screen Orientation API hat eine eingeschränkte Unterstützung in verschiedenen Browsern.
  > Überprüfen Sie die Kompatibilität, wenn Sie planen, sie zu verwenden, um die Bildschirmorientierung zur Laufzeit dynamisch zu ändern.

### Plattform- und Browser-Einschränkungen

Beim Hinzufügen der Orientierungspräferenz für Ihre App sollten Sie folgende Überlegungen und Einschränkungen beachten:

- Browser-Anbieter und Gerätehersteller entscheiden, welche Orientierungen und [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Modi kompatibel sind.
- Bestimmte UI/UX-Bedenken und Plattformkonventionen können einschränken, welche Bildschirmorientierungen und Anzeigemodi zusammen verwendet werden können.
- Die Unterstützung für spezifische `orientation`-Werte kann je nach Gerät und Plattform variieren.
- Einige Geräte unterstützen möglicherweise nicht alle `orientation`-Werte, wie `portrait-secondary` und `landscape-secondary`.
- Einige Browser erlauben möglicherweise nicht die Änderung der Standardorientierung einer Web-App in bestimmten Anzeigemodi (z. B., [`"display": "browser"`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display#browser)).

## Beispiele

### Spezifizieren einer festen Orientierung für eine Web-App

Dieses Beispiel setzt die Orientierung der App auf `portrait-primary`. Angenommen, Browser und Gerät unterstützen dies, wird die App immer im aufrechten Hochformat angezeigt, selbst wenn das Gerät gedreht wird.

```json
{
  "name": "My Web App",
  "orientation": "portrait-primary"
}
```

### Festsetzen einer flexiblen Orientierung für eine Web-App

Betrachten Sie eine Fotoansichts- und Bearbeitungs-App. In der Manifestdatei der App, wie unten gezeigt, ist `orientation` auf `any` gesetzt. Dies ermöglicht es der App, in der aktuellen Orientierung des Geräts gestartet zu werden und sich sowohl an `portrait` als auch `landscape` Orientierungen anzupassen, während Benutzer ihre Geräte drehen. Diese `orientation`-Einstellung wird es Benutzern ermöglichen, Fotos komfortabel in derjenigen Orientierung zu betrachten und zu bearbeiten, die am besten zu dem aktuellen Display oder ihrem aktuellen Nutzungskontext passt.

```json
{
  "name": "PhotoGallery Pro",
  "short_name": "PhotoGal",
  "description": "A professional photo gallery and editing application",
  "start_url": "/index.html",
  "display": "standalone",
  "orientation": "any",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "related_applications": [
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=com.example.photogallery"
    }
  ]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API)
- [Verwaltung der Bildschirmorientierung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Verwendung von Media Queries für Geräteorientierung](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Lernen: Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
