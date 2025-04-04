---
title: "<fencedframe>: Das Fenced Frame-Element"
slug: Web/HTML/Element/fencedframe
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{HTMLSidebar}}{{SeeCompatTable}}

Das **`<fencedframe>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen verschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}}, der eine andere HTML-Seite in die aktuelle Seite einbettet. `<fencedframe>`s sind in Form und Funktion den {{htmlelement("iframe")}}-Elementen sehr ähnlich, außer dass:

- Die Kommunikation zwischen dem `<fencedframe>`-Inhalt und der einbettenden Seite eingeschränkt ist.
- Ein `<fencedframe>` kann auf Cross-Site-Daten zugreifen, aber nur unter sehr spezifischen kontrollierten Bedingungen, die den Datenschutz gewährleisten.
- Ein `<fencedframe>` kann nicht manipuliert oder seine Daten über reguläre Skripte abgerufen werden (z. B. das Lesen oder Setzen der Quell-URL). `<fencedframe>`-Inhalte können nur über [spezifische APIs](/de/docs/Web/API/Fenced_frame_API#use_cases) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf das DOM des einbettenden Kontexts zugreifen, noch kann der einbettende Kontext auf das DOM des `<fencedframe>` zugreifen.

Das `<fencedframe>`-Element ist eine Art von `<iframe>` mit mehr eingebauten nativen Datenschutzfunktionen. Es adressiert Schwächen von `<iframe>`s wie die Abhängigkeit von Drittanbieter-Cookies und andere Datenschutzrisiken. Siehe [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API) für weitere Details.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `allow` {{experimental_inline}}

  - : Gibt eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<fencedframe>` an, die definiert, welche Funktionen dem `<fencedframe>` basierend auf dem Ursprung der Anfrage zur Verfügung stehen. Siehe [Permissions policies available to fenced frames](#permissions_policies_available_to_fenced_frames) für weitere Details, welche Funktionen über eine auf einem fenced frame gesetzte Richtlinie gesteuert werden können.

- `height` {{experimental_inline}}

  - : Eine einheitenlose Ganzzahl, die die Höhe des fenced frames in CSS-Pixeln darstellt. Der Standardwert ist `150`.

- `width` {{experimental_inline}}
  - : Eine einheitenlose Ganzzahl, die die Breite des fenced frames in CSS-Pixeln darstellt. Der Standardwert ist `300`.

## Permissions policies available to fenced frames

Berechtigungen, die vom obersten Kontext an ein fenced frame delegiert werden, um Funktionen zuzulassen oder abzulehnen, könnten als Kommunikationskanal dienen und stellen daher ein Datenschutzrisiko dar. Aus diesem Grund sind Standard-Webfunktionen, deren Verfügbarkeit über die [Permissions Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) gesteuert werden kann (zum Beispiel [`camera`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/camera) oder [`geolocation`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/geolocation)), **nicht verfügbar** innerhalb von fenced frames.

Die einzigen Funktionen, die durch eine Richtlinie innerhalb von fenced frames aktiviert werden können, sind die spezifischen Funktionen, die zur Verwendung innerhalb von fenced frames vorgesehen sind:

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

Derzeit sind diese immer innerhalb von fenced frames aktiviert. In Zukunft wird steuerbar sein, welche durch das `<fencedframe>` `allow`-Attribut aktiviert werden. Das Blockieren von Datenschutz-Sandbox-Funktionen auf diese Weise blockiert auch das Laden des fenced frames — es wird überhaupt keinen Kommunikationskanal geben.

## Fokussierung über fenced frame-Grenzen hinweg

Die Fähigkeit des aktiven Fokus eines Dokuments, über fenced frame-Grenzen hinweg verschoben zu werden (d.h. von einem Element außerhalb des fenced frames zu einem innerhalb oder umgekehrt), ist begrenzt. Benutzerinitiierte Aktionen wie ein Klick oder ein Tab können dies tun, da es dort kein Fingerabdruckrisiko gibt.

Der Versuch, die Grenze über einen API-Aufruf wie [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) zu überschreiten, ist jedoch untersagt — ein böswilliges Skript könnte eine Reihe solcher Aufrufe verwenden, um abgeleitete Informationen über die Grenze hinaus zu leaken.

## Positionierung und Skalierung

Als {{Glossary("replaced_elements", "ersetztes Element")}} ermöglicht das `<fencedframe>`, die Position des eingebetteten Dokuments innerhalb seines Rahmens mit der Eigenschaft {{cssxref("object-position")}} anzupassen.

> [!NOTE]
> Die Eigenschaft {{cssxref("object-fit")}} hat keine Auswirkungen auf `<fencedframe>`-Elemente.

Die Größe des eingebetteten Inhalts kann durch interne `contentWidth`- und `contentHeight`-Eigenschaften des [`config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Objekts des `<fencedframe>`-Objekts festgelegt werden. In solchen Fällen ändert das Ändern der `width` oder `height` des `<fencedframe>` die Größe des eingebetteten Containers auf der Seite, aber das Dokument innerhalb des Containers wird visuell angepasst, um zu passen. Die gemeldeten Breiten und Höhen des eingebetteten Dokuments (d.h. [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)) werden unverändert bleiben.

## Barrierefreiheit

Menschen, die mit unterstützender Technologie wie einem Bildschirmlesegerät navigieren, können das [`title`-Attribut](/de/docs/Web/HTML/Global_attributes/title) auf einem `<fencedframe>` verwenden, um seinen Inhalt zu beschriften. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben:

```html
<fencedframe
  title="Advertisement for new Log. From Blammo!"
  width="640"
  height="320"></fencedframe>
```

Ohne diesen Titel müssen sie in das `<fencedframe>` navigieren, um festzustellen, welcher eingebettete Inhalt enthalten ist. Diese Kontextverschiebung kann verwirrend und zeitaufwändig sein, insbesondere für Seiten mit mehreren `<fencedframe>`s und/oder wenn Einbettungen interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, generiert eine verwendende API (wie [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) oder [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>`s festgelegt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` von einer Werbeauktion der Protected Audience API, das dann verwendet wird, um die gewonnene Anzeige in einem `<fencedframe>` anzuzeigen:

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

> **Hinweis:** `resolveToConfig: true` muss im Aufruf von `runAdAuction()` übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn es nicht gesetzt ist, wird der resultierende {{jsxref("Promise")}} zu einer URN auflösen, die nur in einer {{htmlelement("iframe")}} verwendet werden kann.

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
        >, eingebetteter Inhalt, interaktiver Inhalt, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind obligatorisch.</td>
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
- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
