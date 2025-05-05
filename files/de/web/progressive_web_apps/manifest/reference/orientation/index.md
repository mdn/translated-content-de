---
title: orientation
slug: Web/Progressive_web_apps/Manifest/Reference/orientation
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

Das `orientation`-Manifestmitglied wird verwendet, um die Standardausrichtung Ihrer Webanwendung festzulegen. Es definiert, wie die App beim Start und während der Nutzung in Bezug auf die Bildschirmorientierung des Geräts angezeigt werden soll, insbesondere auf Geräten, die mehrere Ausrichtungen unterstützen.

> [!NOTE]
> Die Ausrichtung der App kann während der Laufzeit durch verschiedene Mittel geändert werden, wie zum Beispiel mit der [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API).

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

  - : Ein String, der die Standardausrichtung für die Webanwendung spezifiziert. Ist das `orientation`-Mitglied nicht angegeben oder wird ein ungültiger Wert bereitgestellt, verwendet die Webanwendung typischerweise die natürliche Ausrichtung des Geräts und etwaige Benutzer- oder Systemeinstellungen zur Ausrichtung.

    Der Wert `orientation` muss eines der folgenden Schlüsselwörter sein:

    - `any`

      - : Zeigt die Webanwendung in jeder vom Betriebssystem des Geräts oder den Benutzereinstellungen erlaubten Ausrichtung an.
        Es erlaubt der App, sich frei zu drehen, um der Ausrichtung des Geräts zu entsprechen, wenn es gedreht wird.

    - `natural`

      - : Zeigt die Webanwendung in der als natürlich empfundenen Ausrichtung des Geräts an. Diese wird vom Browser, Betriebssystem, den Benutzereinstellungen oder dem Bildschirm selbst bestimmt. Sie entspricht der Art und Weise, wie das Gerät am häufigsten gehalten oder verwendet wird:

        - Auf Geräten, die typischerweise vertikal gehalten werden, wie Mobiltelefone, ist `natural` üblicherweise `portrait-primary`.
        - Auf Geräten, die typischerweise horizontal verwendet werden, wie Computermonitore und Tablets, ist `natural` üblicherweise `landscape-primary`.

        Wenn das Gerät gedreht wird, kann es sein, dass die App sich mitdreht oder nicht, um der natürlichen Ausrichtung des Geräts zu entsprechen; dieses Verhalten kann je nach spezifischem Gerät, Browser-Implementierung und Benutzereinstellungen variieren.

    - `portrait`

      - : Zeigt die Webanwendung mit größerer Höhe als Breite an.
        Es erlaubt der App, zwischen `portrait-primary` und `portrait-secondary` zu wechseln, wenn das Gerät gedreht wird.

    - `portrait-primary`

      - : Zeigt die Webanwendung im Hochformat an, typischerweise mit aufrechtem Gerät.
        Dies ist üblicherweise die Standardausrichtung der App auf Geräten, die natürlich im Hochformat sind.
        Abhängig von Gerät und Browser-Implementierung bleibt die App typischerweise in dieser Ausrichtung, auch wenn das Gerät gedreht wird.

    - `portrait-secondary`

      - : Zeigt die Webanwendung im umgekehrten Hochformat an, was `portrait-primary` um 180 Grad gedreht entspricht.
        Abhängig von Gerät und Browser-Implementierung bleibt die App typischerweise in dieser Ausrichtung, auch wenn das Gerät gedreht wird.

    - `landscape`

      - : Zeigt die Webanwendung mit größerer Breite als Höhe an.
        Es erlaubt der App, zwischen `landscape-primary` und `landscape-secondary` zu wechseln, wenn das Gerät gedreht wird.

    - `landscape-primary`

      - : Zeigt die Webanwendung im Querformat an, typischerweise mit dem Gerät in seiner Standardhorizontalposition.
        Dies ist üblicherweise die Standardausrichtung der App auf Geräten, die natürlich im Querformat sind.
        Abhängig von Gerät und Browser-Implementierung bleibt die App typischerweise in dieser Ausrichtung, auch wenn das Gerät gedreht wird.

    - `landscape-secondary`

      - : Zeigt die Webanwendung im umgekehrten Querformat an, was `landscape-primary` um 180 Grad gedreht entspricht.
        Abhängig von Gerät und Browser-Implementierung bleibt die App typischerweise in dieser Ausrichtung, auch wenn das Gerät gedreht wird.

## Beschreibung

Um das `orientation`-Manifestmitglied zu verstehen, ist es wichtig, mit den folgenden orientierungsbezogenen Konzepten vertraut zu sein:

- **Geräteausrichtung**: Definiert, wie das Gerät physisch gehalten oder positioniert wird.
- **Bildschirmorientierung**: Definiert die physische Ausrichtung des Gerätebildschirms.
- **App-Auslegung**: Definiert, wie der Inhalt der App relativ zur Bildschirmorientierung angezeigt wird.

Wenn ein Gerät gedreht wird, ändert es typischerweise die Bildschirmorientierung. Zum Beispiel wechselt ein Mobiltelefon von vertikal zu horizontal oft den Bildschirm vom Hochformat ins Querformat. Ohne spezifische Ausrichtung im Manifest passen die meisten Apps ihr Layout an diese neue Bildschirmorientierung an.

Das `orientation`-Mitglied des Manifests ermöglicht es Ihnen zu kontrollieren, wie Ihre App auf diese Änderungen reagiert. Indem Sie eine bevorzugte Ausrichtung für Ihre App angeben, können Sie entscheiden, ob Ihre App sich an Bildschirmorientierungsänderungen anpassen oder ein festes Layout beibehalten soll, unabhängig davon, wie das Gerät gehalten wird. Zum Beispiel können Sie durch das Setzen von `"orientation": "portrait-primary"` angeben, dass Sie bevorzugen, dass Ihre App immer im aufrechten Hochformat in Bezug auf den Bildschirm angezeigt wird, selbst wenn das Gerät gedreht wird. Der Browser oder das Betriebssystem wird versuchen, diese Präferenz nach Möglichkeit zu berücksichtigen.

Das folgende Beispiel veranschaulicht, wie das Layout einer Webanwendung aussehen könnte, wenn ein Mobiltelefon gedreht wird. Nehmen Sie in diesem Beispiel an, dass der `orientation`-Wert der App auf `any` gesetzt ist, was es der App ermöglicht, zwischen allen `orientation`-Werten zu wechseln, wenn das Mobiltelefon gedreht wird. Nehmen Sie außerdem an, dass sowohl das Telefon als auch der Browser alle Ausrichtungen unterstützen. Die Reihenfolge zeigt eine Drehung des Telefons im Uhrzeigersinn, wobei jede Position von der Startposition aus gedreht ist:

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
  font-family: Arial, sans-serif;
  font-size: 15px;
}
```

{{EmbedLiveSample('Description', '', 800)}}

### Anwendungsbereich und Standardverhalten

Die angegebene `orientation` wird auf alle obersten {{Glossary("Browsing_context", "Browsing-Kontexte")}} der Webanwendung angewendet.

Wenn ein Browser den angegebenen `orientation`-Wert unterstützt, wird er dies als Standard-App-Ausrichtung während der gesamten Lebensdauer der App verwenden, es sei denn, er wird zur Laufzeit überschrieben. Das bedeutet, dass Browser bei jeder Navigation im obersten Browsing-Kontext diese Standardausrichtung wiederherstellen werden.

### Auswahl einer bevorzugten Ausrichtung für Ihre Web-App

Indem Sie eine bestimmte Ausrichtung festlegen, können Sie sicherstellen, dass Ihre Webanwendung optimal für den Inhalt und die Benutzeroberfläche angezeigt wird. Zum Beispiel ist eine Video-App oft besser für das Querformat geeignet, während eine Lese-App typischerweise besser im Hochformat funktioniert.

Das Nicht-Festlegen einer Ausrichtung kann auch eine bewusste Entscheidung sein, um Ihrer Webanwendung die flexible Anpassung an verschiedene Geräte und Benutzerpräferenzen zu ermöglichen.

### Manifest `orientation` vs. Verhalten der Screen Orientation API

Während das `orientation`-Manifestmitglied die Standardausrichtung der Webanwendung festlegt, kann die Ausrichtung eines obersten Browsing-Kontextes geändert werden, sobald die Webanwendung läuft, indem die [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API) verwendet wird.

Die `orientation`-Werte sind im Webanwendungsmanifest und der Screen Orientation API ähnlich, aber ihr Verhalten und ihre Zwecke unterscheiden sich.

- Webanwendungsmanifest:

  - Schlägt die bevorzugte Standardausrichtung der Webanwendung mit dem `orientation`-Manifestmitglied vor.
  - Setzt die anfängliche Ausrichtung, wenn die App gestartet wird.

- Screen Orientation API:

  - Verwendet Ausrichtungswerte, um den Bildschirm auf eine bestimmte Ausrichtung zu sperren.
  - Ermöglicht dynamische Änderungen der Ausrichtung zur Laufzeit (zum Beispiel das Sperren der Ausrichtung mit [`screen.orientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock)).

  > [!NOTE]
  > Die Methode [`lock()`](/de/docs/Web/API/ScreenOrientation/lock) der Screen Orientation API wird eingeschränkt in Browsern unterstützt.
  > Überprüfen Sie die Kompatibilität, wenn Sie vorhaben, sie zu verwenden, um die Bildschirmorientierung zur Laufzeit dynamisch zu ändern.

### Plattform- und Browser-Einschränkungen

Wenn Sie die Ausrichtungspräferenz für Ihre App hinzufügen, beachten Sie die folgenden Überlegungen und Einschränkungen:

- Browser-Hersteller und Gerätehersteller bestimmen, welche Ausrichtungen und [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Modi kompatibel sind.
- Bestimmte UI/UX-Bedenken und Plattformkonventionen können einschränken, welche Bildschirm-Ausrichtungen und Anzeigemodi zusammen verwendet werden können.
- Die Unterstützung für spezifische `orientation`-Werte kann je nach Gerät und Plattform variieren.
- Einige Geräte unterstützen möglicherweise nicht alle `orientation`-Werte, wie `portrait-secondary` und `landscape-secondary`.
- Einige Browser erlauben möglicherweise nicht das Ändern der Standardausrichtung einer Webanwendung, während sie in bestimmten Anzeigemodi ausgeführt wird (z. B. [`"display": "browser"`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display#browser)).

## Beispiele

### Festlegen einer festen Ausrichtung für eine Web-App

Dieses Beispiel setzt die Ausrichtung der App auf `portrait-primary`. Angenommen, es gibt Unterstützung von Browser und Gerät, wird die App immer im aufrechten Hochformat angezeigt, auch wenn das Gerät gedreht wird.

```json
{
  "name": "My Web App",
  "orientation": "portrait-primary"
}
```

### Festlegen einer flexiblen Ausrichtung für eine Web-App

Betrachten Sie eine Fotoanzeige- und -bearbeitungs-App. Im Manifest der App, wie unten gezeigt, ist `orientation` auf `any` gesetzt. Dies ermöglicht es der App, in der aktuellen Ausrichtung des Geräts gestartet zu werden und sich an sowohl `portrait` als auch `landscape` Ausrichtungen anzupassen, während Benutzer ihre Geräte drehen. Diese `orientation`-Einstellung ermöglicht es den Benutzern, Fotos komfortabel in der Ausrichtung zu betrachten und zu bearbeiten, die am besten zum aktuellen Display oder ihrer aktuellen Nutzungssituation passt.

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
- [Verwendung von Media Queries für Geräteausrichtung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Lernen: Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
