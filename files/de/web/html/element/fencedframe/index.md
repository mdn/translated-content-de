---
title: "<fencedframe>: Das Fenced Frame-Element"
slug: Web/HTML/Element/fencedframe
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{HTMLSidebar}}{{SeeCompatTable}}

Das **`<fencedframe>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen verschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}} und bettet eine andere HTML-Seite in die aktuelle ein. `<fencedframe>`s ähneln in Form und Funktion den {{htmlelement("iframe")}}-Elementen, mit folgenden Unterschieden:

- Die Kommunikation zwischen dem `<fencedframe>`-Inhalt und der einbettenden Seite ist eingeschränkt.
- Ein `<fencedframe>` kann auf datenübergreifende Seiten zugreifen, jedoch nur unter sehr spezifischen, kontrollierten Umständen, die die Privatsphäre des Benutzers wahren.
- Ein `<fencedframes>` kann nicht manipuliert werden, oder es können keine Daten über reguläres Skripting zugegriffen werden (z. B. Lesen oder Setzen der Quell-URL). `<fencedframe>`-Inhalte können nur über [spezifische APIs](/de/docs/Web/API/Fenced_frame_API#use_cases) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf das DOM des einbettenden Kontexts zugreifen, und der einbettende Kontext kann nicht auf das DOM des `<fencedframe>` zugreifen.

Das `<fencedframe>`-Element ist eine Art `<iframe>` mit integrierten nativen Datenschutzfunktionen. Es adressiert Schwachstellen von `<iframe>`s wie die Abhängigkeit von Drittanbieter-Cookies und andere Datenschutzrisiken. Siehe [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API) für weitere Einzelheiten.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `allow` {{experimental_inline}}

  - : Gibt eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) für das `<fencedframe>` an, die definiert, welche Funktionen dem `<fencedframe>` basierend auf dem Ursprung der Anfrage zur Verfügung stehen. Siehe [Berechtigungsrichtlinien, die für Fenced Frames verfügbar sind](#berechtigungsrichtlinien,_die_für_fenced_frames_verfügbar_sind) für weitere Einzelheiten, welche Funktionen über eine auf einem Fenced Frame festgelegte Richtlinie gesteuert werden können.

- `height` {{experimental_inline}}

  - : Eine einheitenlose ganze Zahl, die die Höhe des Fenced Frames in CSS-Pixeln darstellt. Der Standardwert ist `150`.

- `width` {{experimental_inline}}
  - : Eine einheitenlose ganze Zahl, die die Breite des Fenced Frames in CSS-Pixeln darstellt. Der Standardwert ist `300`.

## Berechtigungsrichtlinien, die für Fenced Frames verfügbar sind

Berechtigungen, die vom obersten Kontext an einen Fenced Frame zur Erlaubnis oder Verweigerung von Funktionen delegiert werden, könnten als Kommunikationskanal verwendet werden und stellen daher eine Datenschutzbedrohung dar. Deshalb sind Standard-Webfunktionen, deren Verfügbarkeit über [Permissions Policy](/de/docs/Web/HTTP/Headers/Permissions-Policy) gesteuert werden kann (z. B. [`camera`](/de/docs/Web/HTTP/Headers/Permissions-Policy/camera) oder [`geolocation`](/de/docs/Web/HTTP/Headers/Permissions-Policy/geolocation)), **nicht verfügbar** innerhalb von Fenced Frames.

Die einzigen Funktionen, die durch eine Richtlinie innerhalb von Fenced Frames aktiviert werden können, sind die spezifischen Funktionen, die für die Verwendung innerhalb von Fenced Frames entwickelt wurden:

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

Derzeit sind diese Funktionen immer innerhalb von Fenced Frames aktiviert. In Zukunft wird die Kontrolle darüber, welche aktiviert sind, mit dem `allow`-Attribut des `<fencedframe>` möglich sein. Das Blockieren von Privacy Sandbox-Funktionen auf diese Weise wird auch das Laden des Fenced Frames blockieren - es wird überhaupt keinen Kommunikationskanal geben.

## Fokussierung über Fenced Frame-Grenzen hinweg

Die Fähigkeit, den aktiven Fokus des Dokuments über die Grenzen eines Fenced Frames hinweg zu bewegen (d. h. von einem Element außerhalb des Fenced Frames zu einem im Inneren oder umgekehrt), ist begrenzt. Vom Benutzer initiierte Aktionen wie Klicken oder Tab können dies tun, da dort kein Fingerabdruckrisiko besteht.

Das Überqueren der Grenze über einen API-Aufruf wie [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) ist jedoch verboten — ein bösartiges Skript könnte eine Reihe solcher Aufrufe verwenden, um abgeleitete Informationen über die Grenze zu leaken.

## Positionierung und Skalierung

Als [ersetztes Element](/de/docs/Web/CSS/Replaced_element) erlaubt das `<fencedframe>`, die Position des eingebetteten Dokuments innerhalb seines Rahmens mithilfe der {{cssxref("object-position")}}-Eigenschaft anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keine Auswirkung auf `<fencedframe>`-Elemente.

Die Größe des eingebetteten Inhalts kann durch interne `contentWidth`- und `contentHeight`-Eigenschaften des [`config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Objekts des `<fencedframe>`s festgelegt werden. In solchen Fällen werden durch Ändern der `width` oder `height` des `<fencedframe>` die Größe des eingebetteten Containers auf der Seite geändert, aber das Dokument im Container wird visuell skaliert, um zu passen. Die gemeldete Breite und Höhe des eingebetteten Dokuments (d. h. [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)) bleiben unverändert.

## Barrierefreiheit

Personen, die mit unterstützender Technologie wie einem Screenreader navigieren, können das [`title`-Attribut](/de/docs/Web/HTML/Global_attributes/title) auf einem `<fencedframe>` verwenden, um seinen Inhalt zu kennzeichnen. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben:

```html
<fencedframe
  title="Advertisement for new Log. From Blammo!"
  width="640"
  height="320"></fencedframe>
```

Ohne diesen Titel müssen sie in das `<iframe>` navigieren, um zu bestimmen, was dessen eingebetteter Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitaufwendig sein, besonders bei Seiten mit mehreren `<iframe>`s und/oder wenn Einbettungen interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

Um festzulegen, welche Inhalte in einem `<fencedframe>` angezeigt werden, generiert eine verwendende API (wie [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` festgelegt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` von einer Anzeigenauktion der Protected Audience API, das dann verwendet wird, um die gewonnene Anzeige in einem `<fencedframe>` anzuzeigen:

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

> **Hinweis:** `resolveToConfig: true` muss in den `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn es nicht gesetzt ist, wird das resultierende {{jsxref("Promise")}} auf eine URN auflösen, die nur in einem {{htmlelement("iframe")}} verwendet werden kann.

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
          >Phrasierungsinhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/document_role"><code>document</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/img_role"><code>img</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
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
