---
title: "<fencedframe>: Das Fenced Frame-Element"
slug: Web/HTML/Reference/Elements/fencedframe
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{SeeCompatTable}}

Das **`<fencedframe>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen geschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}} und bettet eine andere HTML-Seite in die aktuelle ein. `<fencedframe>`s sind in Form und Funktion sehr ähnlich zu {{htmlelement("iframe")}}-Elementen, außer dass:

- Die Kommunikation zwischen dem `<fencedframe>`-Inhalt und seiner einbettenden Seite eingeschränkt ist.
- Ein `<fencedframe>` auf plattformübergreifende Daten zugreifen kann, jedoch nur unter sehr spezifischen kontrollierten Umständen, die den Datenschutz der Nutzer gewährleisten.
- Ein `<fencedframe>` kann nicht manipuliert oder seine Daten über reguläres Scripting (beispielsweise das Lesen oder Setzen der Quell-URL) abgerufen werden. `<fencedframe>`-Inhalte können nur über [spezifische APIs](/de/docs/Web/API/Fenced_frame_API#use_cases) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf das DOM des einbettenden Kontexts zugreifen, noch kann der einbettende Kontext auf das DOM des `<fencedframe>` zugreifen.

Das `<fencedframe>`-Element ist eine Art `<iframe>` mit nativeren Datenschutzfunktionen. Es behebt Schwachstellen von `<iframe>`s wie die Abhängigkeit von Drittanbieter-Cookies und anderen Datenschutzrisiken. Siehe [Fenced frame API](/de/docs/Web/API/Fenced_frame_API) für weitere Details.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `allow` {{experimental_inline}}
  - : Legt eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<fencedframe>` fest, die definiert, welche Funktionen dem `<fencedframe>` basierend auf dem Ursprung der Anfrage zur Verfügung stehen. Weitere Details zu den Funktionen, die über eine Richtlinie in einem Fenced Frame gesteuert werden können, finden Sie unter [Berechtigungsrichtlinien, die für Fenced Frames verfügbar sind](#berechtigungsrichtlinien,_die_für_fenced_frames_verfügbar_sind).

- `height` {{experimental_inline}}
  - : Eine einheitenlose Ganzzahl, die die Höhe des Fenced Frames in CSS-Pixeln darstellt. Standardwert ist `150`.

- `width` {{experimental_inline}}
  - : Eine einheitenlose Ganzzahl, die die Breite des Fenced Frames in CSS-Pixeln darstellt. Standardwert ist `300`.

## Berechtigungsrichtlinien, die für Fenced Frames verfügbar sind

Berechtigungen, die vom obersten Kontext zu einem Fenced Frame delegiert werden, um Funktionen zu erlauben oder zu verweigern, könnten als Kommunikationskanal genutzt werden und stellen daher eine Datenschutzbedrohung dar. Folglich sind Standard-Webfunktionen, deren Verfügbarkeit über [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) kontrolliert werden kann (z.B. [`camera`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/camera) oder [`geolocation`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/geolocation)) **nicht verfügbar** innerhalb von Fenced Frames.

Die einzigen Funktionen, die durch eine Richtlinie in Fenced Frames aktiviert werden können, sind die speziell für die Verwendung in Fenced Frames entwickelten Funktionen:

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

Derzeit sind diese Funktionen immer in Fenced Frames aktiviert. In Zukunft wird es möglich sein, mittels des `allow`-Attributs des `<fencedframe>` zu steuern, welche aktiviert sind. Das Blockieren von Datenschutz-Funktionen auf diese Weise wird auch das Laden des Fenced Frames blockieren - es wird keinerlei Kommunikationskanal bestehen.

## Fokussieren über Fenced Frame-Grenzen hinweg

Die Möglichkeit, den aktiven Fokus des Dokuments über Fenced Frame-Grenzen hinweg zu bewegen (d.h. von einem Element außerhalb des Fenced Frames zu einem Element innerhalb oder umgekehrt), ist begrenzt. Benutzerinitiierte Aktionen wie ein Klick oder ein Tab können dies tun, da dabei kein Risikomerkmal besteht.

Jedoch ist der Versuch, die Grenze via eines API-Aufrufs wie [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) zu überqueren, untersagt — ein bösartiges Skript könnte eine Serie solcher Aufrufe verwenden, um abgeleitete Informationen über die Grenze zu leaken.

## Positionierung und Skalierung

Als ein {{Glossary("replaced_elements", "ausgetauschtes Element")}} erlaubt das `<fencedframe>`, die Position des eingebetteten Dokuments innerhalb seines Kastens mithilfe der {{cssxref("object-position")}}-Eigenschaft anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keine Wirkung auf `<fencedframe>`-Elemente.

Die Größe des eingebetteten Inhalts kann durch die internen `contentWidth`- und `contentHeight`-Eigenschaften des `config`-Objekts des `<fencedframe>` festgelegt werden. In solchen Fällen wird das Ändern der `width` oder `height` des `<fencedframe>` die Größe des eingebetteten Containers auf der Seite ändern, aber das Dokument innerhalb des Containers wird visuell angepasst. Die gemeldete Breite und Höhe des eingebetteten Dokuments (d.h. [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)) bleiben unverändert.

## Barrierefreiheit

Menschen, die mit unterstützender Technologie navigieren, wie z.B. ein Bildschirmleser, können das [`title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) auf einem `<fencedframe>` verwenden, um dessen Inhalt zu beschreiben. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben:

```html
<fencedframe
  title="Advertisement for new Log. From Blammo!"
  width="640"
  height="320"></fencedframe>
```

Ohne diesen Titel müssen sie in das `<fencedframe>` navigieren, um herauszufinden, was der eingebettete Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitaufwändig sein, insbesondere für Seiten mit mehreren `<fencedframe>`s und/oder wenn die Einbettungen interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

Um festzulegen, welche Inhalte in einem `<fencedframe>` angezeigt werden, erzeugt eine nutzende API (wie [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) oder [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` von einer Werbeauktion der Protected Audience API, das dann verwendet wird, um die gewonnene Anzeige in einem `<fencedframe>` darzustellen:

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
> `resolveToConfig: true` muss beim `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn es nicht gesetzt ist, wird das resultierende {{jsxref("Promise")}} in eine URN auflösen, die nur in einem {{htmlelement("iframe")}} verwendet werden kann.

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
          >phrasenformbarer Inhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, palpierbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende wie auch das schließende Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
