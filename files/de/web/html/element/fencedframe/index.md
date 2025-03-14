---
title: "<fencedframe>: Das Fenced Frame Element"
slug: Web/HTML/Element/fencedframe
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{HTMLSidebar}}{{SeeCompatTable}}

Das **`<fencedframe>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen verschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}}, der eine andere HTML-Seite in die aktuelle einbettet. `<fencedframe>`s sind in Form und Funktion den {{htmlelement("iframe")}} Elementen sehr ähnlich, außer dass:

- Die Kommunikation zwischen dem `<fencedframe>` Inhalt und der einbettenden Seite eingeschränkt ist.
- Ein `<fencedframe>` auf Cross-Site-Daten zugreifen kann, jedoch nur unter sehr spezifischen, kontrollierten Umständen, die die Privatsphäre der Benutzer gewährleisten.
- Ein `<fencedframe>` nicht über reguläre Skripte manipuliert oder auf seine Daten zugegriffen werden kann (z. B. Lesen oder Setzen der Quell-URL). `<fencedframe>`-Inhalte können nur über [spezifische APIs](/de/docs/Web/API/Fenced_frame_API#use_cases) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf das DOM des einbettenden Kontexts zugreifen, und der einbettende Kontext kann nicht auf das DOM des `<fencedframe>` zugreifen.

Das `<fencedframe>` Element ist eine Art `<iframe>` mit mehr integrierten Datenschutzfunktionen. Es adressiert Schwächen von `<iframe>`s, wie die Abhängigkeit von Drittanbieter-Cookies und andere Datenschutzrisiken. Weitere Details finden Sie unter [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API).

## Attribute

Dieses Element schließt die [globalen Attribute](/de/docs/Web/HTML/Global_attributes) ein.

- `allow` {{experimental_inline}}

  - : Definiert eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<fencedframe>`, die festlegt, welche Funktionen dem `<fencedframe>` basierend auf dem Ursprung der Anfrage zur Verfügung stehen. Details zu den über eine Richtlinie steuerbaren Funktionen innerhalb von Fenced Frames finden Sie unter [Berechtigungsrichtlinien verfügbar für Fenced Frames](#berechtigungsrichtlinien_verfügbar_für_fenced_frames).

- `height` {{experimental_inline}}

  - : Eine ganzzahlige Zahl ohne Einheit, die die Höhe des Fenced Frames in CSS-Pixeln darstellt. Der Standardwert ist `150`.

- `width` {{experimental_inline}}
  - : Eine ganzzahlige Zahl ohne Einheit, die die Breite des Fenced Frames in CSS-Pixeln darstellt. Der Standardwert ist `300`.

## Berechtigungsrichtlinien verfügbar für Fenced Frames

Berechtigungen, die vom Top-Level-Kontext zu einem Fenced Frame delegiert werden, um Funktionen zu erlauben und zu verweigern, könnten als Kommunikationskanal genutzt werden und stellen daher eine Bedrohung der Privatsphäre dar. Daher sind standardmäßige Webfunktionen, deren Verfügbarkeit über eine [Permissions Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) gesteuert werden kann (z. B. [`camera`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/camera) oder [`geolocation`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/geolocation)), innerhalb von Fenced Frames **nicht verfügbar**.

Die einzigen Funktionen, die in einem Fenced Frame über eine Richtlinie aktiviert werden können, sind die spezifischen Funktionen, die für die Verwendung innerhalb von Fenced Frames vorgesehen sind:

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

Derzeit sind diese Funktionen immer innerhalb von Fenced Frames aktiviert. In der Zukunft wird es möglich sein, mit dem `allow`-Attribut des `<fencedframe>` zu steuern, welche aktiviert sind. Das Blockieren von Privacy Sandbox-Funktionen auf diese Weise wird auch das Laden des Fenced Frames blockieren — es wird keinerlei Kommunikationskanal existieren.

## Fokussieren über Fenced Frame Grenzen hinweg

Die Fähigkeit, den aktiven Fokus des Dokuments über Fenced Frame Grenzen hinweg zu bewegen (d. h. von einem Element außerhalb des Fenced Frames zu einem innerhalb oder umgekehrt) ist eingeschränkt. Benutzerinitiierte Aktionen wie ein Klick oder ein Tab können dies tun, da hier kein Risiko des Fingerprintings besteht.

Jedoch wird der Versuch, die Grenze über einen API-Aufruf wie [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) zu überqueren, verhindert — ein bösartiges Skript könnte eine Reihe solcher Aufrufe nutzen, um Informationen über die Grenze hinweg zu leaken.

## Positionierung und Skalierung

Da es sich um ein {{Glossary("replaced_elements", "ersetzen Element")}} handelt, ermöglicht das `<fencedframe>`, die Position des eingebetteten Dokuments innerhalb seines Kastens mit der {{cssxref("object-position")}} Eigenschaft anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}} Eigenschaft hat keine Auswirkungen auf `<fencedframe>` Elemente.

Die Größe des eingebetteten Inhalts kann durch interne `contentWidth` und `contentHeight` Eigenschaften des `<fencedframe>` [`config`](/de/docs/Web/API/HTMLFencedFrameElement/config) Objekts festgelegt werden. In solchen Fällen verändert das Ändern der `width` oder `height` des `<fencedframe>` zwar die Größe des eingebetteten Containers auf der Seite, aber das Dokument innerhalb des Containers wird visuell skaliert, um zu passen. Die gemeldete Breite und Höhe des eingebetteten Dokuments (d. h. [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)) bleiben unverändert.

## Barrierefreiheit

Personen, die mit unterstützender Technologie navigieren, wie z.B. einem Screenreader, können das [`title` Attribut](/de/docs/Web/HTML/Global_attributes/title) auf einem `<fencedframe>` verwenden, um dessen Inhalt zu beschriften. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben:

```html
<fencedframe
  title="Advertisement for new Log. From Blammo!"
  width="640"
  height="320"></fencedframe>
```

Ohne diesen Titel müssen sie in das `<fencedframe>` navigieren, um festzustellen, was der eingebettete Inhalt ist. Diese Kontextverschiebung kann verwirrend und zeitaufwändig sein, besonders für Seiten mit mehreren `<fencedframe>`s und/oder wenn Einbettungen interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, erzeugt eine nutzende API (wie [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig) Objekt, das dann als Wert der `config` Eigenschaft des `<fencedframe>` festgelegt wird.

Das folgende Beispiel erhält einen `FencedFrameConfig` von einer Ad Auction der Protected Audience API, welcher dann verwendet wird, um die gewonnene Anzeige in einem `<fencedframe>` darzustellen:

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

> **Hinweis:** `resolveToConfig: true` muss in den `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn es nicht gesetzt ist, wird das resultierende {{jsxref("Promise")}} zu einem URN auflösen, der nur in einem {{htmlelement("iframe")}} verwendet werden kann.

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind erforderlich.</td>
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
