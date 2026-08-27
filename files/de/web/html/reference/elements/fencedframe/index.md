---
title: "`<fencedframe>` HTML-Fenced-Frame-Element"
short-title: <fencedframe>
slug: Web/HTML/Reference/Elements/fencedframe
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

Das **`<fencedframe>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen verschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}}, der eine andere HTML-Seite in die aktuelle einbettet. `<fencedframe>`s sind den {{htmlelement("iframe")}}-Elementen in Form und Funktion sehr ähnlich, außer dass:

- Die Kommunikation zwischen dem `<fencedframe>`-Inhalt und der einbettenden Seite eingeschränkt ist.
- Ein `<fencedframe>` kann auf siteübergreifende Daten zugreifen, jedoch nur unter sehr spezifischen, kontrollierten Umständen, die den Datenschutz des Nutzers wahren.
- Ein `<fencedframe>` kann nicht durch reguläres Scripting manipuliert oder seine Daten abgerufen werden (z. B. Lesen oder Setzen der Quell-URL). `<fencedframe>`-Inhalte können nur über [spezifische APIs](/de/docs/Web/API/Fenced_frame_API#use_cases) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf das DOM des einbettenden Kontexts zugreifen, und der einbettende Kontext kann nicht auf das DOM des `<fencedframe>` zugreifen.

Das `<fencedframe>`-Element ist eine Art `<iframe>` mit eingebauten erweiterten Datenschutzfunktionen. Es behebt die Schwachstellen von `<iframe>`s, wie die Abhängigkeit von Drittanbieter-Cookies und andere Datenschutzrisiken. Weitere Details finden Sie in der [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API).

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `allow` {{deprecated_inline}}
  - : Legt eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<fencedframe>` fest, die definiert, welche Funktionen dem `<fencedframe>` basierend auf dem Ursprung der Anfrage zur Verfügung stehen. Weitere Details, welche Funktionen über eine auf einem fenced frame gesetzte Richtlinie kontrolliert werden können, finden Sie unter [Berechtigungsrichtlinien für fenced frames](#berechtigungsrichtlinien_für_fenced_frames).

- `height` {{deprecated_inline}}
  - : Ein ganzzahliger Wert ohne Einheit, der die Höhe des fenced frames in CSS-Pixeln darstellt. Der Standardwert ist `150`.

- `width` {{deprecated_inline}}
  - : Ein ganzzahliger Wert ohne Einheit, der die Breite des fenced frames in CSS-Pixeln darstellt. Der Standardwert ist `300`.

## Berechtigungsrichtlinien für fenced frames

Berechtigungen, die vom obersten Kontext an ein fenced frame weitergegeben werden, um Funktionen zu erlauben und zu verweigern, könnten als Kommunikationskanal verwendet werden und stellen daher eine Datenschutzbedrohung dar. Daher sind Standard-Webfunktionen, deren Verfügbarkeit über die [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) kontrolliert werden kann (z. B. [`camera`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/camera) oder [`geolocation`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/geolocation)), innerhalb von fenced frames **nicht verfügbar**.

Die einzigen Funktionen, die durch eine Richtlinie in fenced frames aktiviert werden können, sind die spezifischen Funktionen, die für die Verwendung innerhalb von fenced frames entwickelt wurden:

- [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience)
  - `attribution-reporting`
  - `private-aggregation`
  - `shared-storage`
  - `shared-storage-select-url`
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
  - `attribution-reporting`
  - `private-aggregation`
  - `shared-storage`
  - `shared-storage-select-url`

Derzeit sind diese Funktionen innerhalb von fenced frames immer aktiviert. In Zukunft wird es möglich sein, mit dem `<fencedframe>`-`allow`-Attribut zu kontrollieren, welche aktiviert sind. Das Blockieren von Datenschutzfunktionen auf diese Weise wird auch verhindern, dass das fenced frame geladen wird — es wird überhaupt keinen Kommunikationskanal geben.

## Fokussierung über Grenzen von fenced frames hinweg

Die Möglichkeit, den aktuellen Fokus eines Dokuments über die Grenzen eines fenced frames hinweg zu verschieben (d.h. von einem Element außerhalb des fenced frames zu einem innerhalb oder umgekehrt), ist eingeschränkt. Benutzerinitiierte Aktionen wie ein Klick oder ein Tab können dies tun, da dabei kein Risiko des Fingerprintings besteht.

Jedoch ist das Überqueren der Grenze über einen API-Aufruf wie [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) verboten — ein bösartiges Skript könnte eine Reihe solcher Aufrufe verwenden, um abgeleitete Informationen über die Grenze hinweg zu leaken.

## Positionierung und Skalierung

Als {{Glossary("replaced_elements", "ersetztes Element")}} ermöglicht das `<fencedframe>`, die Position des eingebetteten Dokuments innerhalb seines Rahmens mit der Eigenschaft {{cssxref("object-position")}} anzupassen.

> [!NOTE]
> Die Eigenschaft {{cssxref("object-fit")}} hat keine Auswirkungen auf `<fencedframe>`-Elemente.

Die Größe des eingebetteten Inhalts kann durch die internen `contentWidth`- und `contentHeight`-Eigenschaften des [`config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Objekts des `<fencedframe>` festgelegt werden. In solchen Fällen wird durch Ändern der `width` oder `height` des `<fencedframe>` die Größe des eingebetteten Containers auf der Seite verändert, aber das Dokument innerhalb des Containers wird visuell skaliert, um zu passen. Die gemeldete Breite und Höhe des eingebetteten Dokuments (d.h. [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)) bleibt unverändert.

## Barrierefreiheit

Personen, die mit unterstützender Technologie navigieren, wie z. B. einem Bildschirmleser, können das [`title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) auf einem `<fencedframe>` verwenden, um dessen Inhalt zu beschreiben. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben:

```html
<fencedframe
  title="Advertisement for new Log. From Blammo!"
  width="640"
  height="320"></fencedframe>
```

Ohne diesen Titel müssen sie in das `<fencedframe>` navigieren, um zu bestimmen, was dessen eingebetteter Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitaufwendig sein, insbesondere bei Seiten mit mehreren `<fencedframe>`s und/oder wenn die Einbettungen interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, erzeugt eine nutzende API (wie [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) oder [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` aus einer Anzeigenauktion der Protected Audience API, das dann verwendet wird, um die gewonnene Anzeige in einem `<fencedframe>` anzuzeigen:

```html
<fencedframe width="640" height="320"></fencedframe>
```

```js
const frameConfig = await navigator.runAdAuction({
  // … auction configuration
  resolveToConfig: true,
});

const frame = document.querySelector("fencedframe");
frame.config = frameConfig;
```

> [!NOTE]
> `resolveToConfig: true` muss in den `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wird es nicht gesetzt, wird das resultierende {{jsxref("Promise")}} zu einer URN aufgelöst, die nur in einem {{htmlelement("iframe")}} verwendet werden kann.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keiner, sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role"><code>application</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role"><code>document</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role"><code>img</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
