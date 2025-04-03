---
title: "<fencedframe>: Das Fenced Frame Element"
slug: Web/HTML/Element/fencedframe
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}{{SeeCompatTable}}

Das **`<fencedframe>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen verschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}} und bettet eine andere HTML-Seite in die aktuelle ein. `<fencedframe>`s ähneln in Form und Funktion stark {{htmlelement("iframe")}}-Elementen, mit Ausnahme von:

- Die Kommunikation zwischen dem `<fencedframe>`-Inhalt und der einbettenden Website ist eingeschränkt.
- Ein `<fencedframe>` kann auf standortübergreifende Daten zugreifen, jedoch nur unter ganz bestimmten, kontrollierten Umständen, die die Privatsphäre der Nutzer wahren.
- Ein `<fencedframe>` kann nicht manipuliert oder seine Daten über normales Scripting abgerufen werden (zum Beispiel das Lesen oder Setzen der Quell-URL). Der `<fencedframe>`-Inhalt kann nur über [spezifische APIs](/de/docs/Web/API/Fenced_frame_API#use_cases) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf das DOM des einbettenden Kontexts zugreifen, und der einbettende Kontext kann nicht auf das DOM des `<fencedframe>` zugreifen.

Das `<fencedframe>`-Element ist ein spezieller Typ eines `<iframe>` mit mehr eingebauten Datenschutzfunktionen. Es behebt Schwachstellen von `<iframe>`s wie die Abhängigkeit von Drittanbieter-Cookies und andere Datenschutzrisiken. Weitere Details finden Sie in der [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API).

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `allow` {{experimental_inline}}

  - : Bestimmt eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<fencedframe>`, die definiert, welche Funktionen dem `<fencedframe>` basierend auf dem Ursprung der Anfrage zur Verfügung stehen. Weitere Details, welche Funktionen über eine Richtlinie, die auf einem Fenced Frame festgelegt ist, gesteuert werden können, finden Sie unter [Erlaubte Berechtigungsrichtlinien für Fenced Frames](#erlaubte_berechtigungsrichtlinien_für_fenced_frames).

- `height` {{experimental_inline}}

  - : Eine ganze Zahl ohne Einheit, die die Höhe des Fenced Frame in CSS-Pixeln repräsentiert. Der Standardwert ist `150`.

- `width` {{experimental_inline}}
  - : Eine ganze Zahl ohne Einheit, die die Breite des Fenced Frame in CSS-Pixeln repräsentiert. Der Standardwert ist `300`.

## Erlaubte Berechtigungsrichtlinien für Fenced Frames

Berechtigungen, die vom obersten Kontext an ein Fenced Frame delegiert werden, um Funktionen zu erlauben oder zu verweigern, könnten als Kommunikationskanal verwendet werden und stellen daher ein Datenschutzrisiko dar. Aus diesem Grund sind standardmäßige Web-Funktionen, deren Verfügbarkeit über eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) (zum Beispiel [`camera`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/camera) oder [`geolocation`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/geolocation)) gesteuert werden kann, **nicht verfügbar** innerhalb von Fenced Frames.

Die einzigen Funktionen, die durch eine Richtlinie innerhalb von Fenced Frames aktiviert werden können, sind die spezifischen Funktionen, die für die Verwendung innerhalb von Fenced Frames konzipiert wurden:

- [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience)
  - `attribution-reporting`
  - `private-aggregation`
  - `shared-storage`
  - `shared-storage-select-url`
- [Shared Storage API](/de/docs/Web/API/Shared_Storage_API)
  - `attribution-reporting`
  - `private-aggregation`
  - `shared-storage`
  - `shared-storage-select-url`

Derzeit sind diese Funktionen innerhalb von Fenced Frames stets aktiviert. In Zukunft wird es möglich sein, mithilfe des `allow`-Attributs des `<fencedframe>` zu steuern, welche aktiviert sind. Wird die Privatsphäre-Sandbox in dieser Weise blockiert, kann das Fenced Frame nicht geladen werden – es gibt dann überhaupt keinen Kommunikationskanal.

## Fokus über Fenced Frame-Grenzen hinweg

Die Möglichkeit, den aktiven Fokus eines Dokuments über Fenced Frame-Grenzen hinweg zu bewegen (d.h. von einem Element außerhalb des Fenced Frame zu einem innerhalb oder umgekehrt), ist eingeschränkt. Benutzerinitiierte Aktionen wie Klicks oder Tab können dies tun, da hierbei kein Fingerabdrucksrisiko besteht.

Das Versuchen, die Grenze über einen API-Aufruf wie [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) zu überwinden, ist jedoch untersagt – ein bösartiges Skript könnte eine Reihe solcher Aufrufe verwenden, um abgeleitete Informationen über die Grenze zu leaken.

## Positionierung und Skalierung

Als {{Glossary("replaced_elements", "ersetztes Element")}} ermöglicht das `<fencedframe>`, die Position des eingebetteten Dokuments innerhalb seines Rahmens mit der {{cssxref("object-position")}}-Eigenschaft anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keine Wirkung auf `<fencedframe>`-Elemente.

Die Größe des eingebetteten Inhalts kann durch die internen `contentWidth`- und `contentHeight`-Eigenschaften des [`config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Objekts des `<fencedframe>` festgelegt werden. In solchen Fällen führt das Ändern der `width` oder `height` des `<fencedframe>` dazu, dass sich die Größe des eingebetteten Containers auf der Seite ändert, aber das Dokument innerhalb des Containers wird visuell skaliert, um zu passen. Die gemeldete Breite und Höhe des eingebetteten Dokuments (d.h. [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)) bleiben unverändert.

## Barrierefreiheit

Personen, die mit unterstützender Technologie, wie z.B. einem Bildschirmleser, navigieren, können das [`title`-Attribut](/de/docs/Web/HTML/Global_attributes/title) auf einem `<fencedframe>` verwenden, um dessen Inhalt zu kennzeichnen. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben:

```html
<fencedframe
  title="Advertisement for new Log. From Blammo!"
  width="640"
  height="320"></fencedframe>
```

Ohne diesen Titel müssen sie in das `<fencedframe>` navigieren, um zu bestimmen, was dessen eingebetteter Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitaufwendig sein, insbesondere auf Seiten mit mehreren `<fencedframe>`s und/oder wenn Einbettungen interaktive Inhalte wie Videos oder Audio enthalten.

## Beispiele

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, generiert eine nutzende API (wie z.B. [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` von einer Ad-Auktion der Protected Audience API, das dann verwendet wird, um die gewinnende Anzeige in einem `<fencedframe>` anzuzeigen:

```html
<fencedframe width="640" height="320"></fencedframe>
```

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.querySelector("fencedframe");
frame.config = frameConfig;
```

> **Hinweis:** `resolveToConfig: true` muss in den `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Ist dies nicht festgelegt, wird das resultierende {{jsxref("Promise")}} zu einem URN aufgelöst, der nur in einem {{htmlelement("iframe")}} verwendet werden kann.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulassiger Inhalt</th>
      <td>Keiner.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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
- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
