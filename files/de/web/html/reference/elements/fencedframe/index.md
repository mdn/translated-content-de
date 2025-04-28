---
title: "<fencedframe>: Das Fenced Frame Element"
slug: Web/HTML/Reference/Elements/fencedframe
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{HTMLSidebar}}{{SeeCompatTable}}

Das **`<fencedframe>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen verschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}}, der eine andere HTML-Seite in die aktuelle einbettet. `<fencedframe>`s sind in Form und Funktion den {{htmlelement("iframe")}}-Elementen sehr ähnlich, außer dass:

- Die Kommunikation zwischen dem `<fencedframe>`-Inhalt und der Einbettungsseite eingeschränkt ist.
- Ein `<fencedframe>` kann auf Cross-Site-Daten zugreifen, jedoch nur unter ganz bestimmten, kontrollierten Umständen, die die Privatsphäre des Nutzers schützen.
- Ein `<fencedframe>` kann nicht durch reguläres Scripting manipuliert oder dessen Daten abgerufen werden (zum Beispiel Lesen oder Setzen der Quell-URL). `<fencedframe>`-Inhalte können nur über [spezifische APIs](/de/docs/Web/API/Fenced_frame_API#use_cases) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf das DOM des einbettenden Kontexts zugreifen, ebenso wenig kann der einbettende Kontext auf das DOM des `<fencedframe>` zugreifen.

Das `<fencedframe>`-Element ist eine Art von `<iframe>` mit eingebauten Privacy-Features. Es behebt Mängel von `<iframe>`s wie die Abhängigkeit von Drittanbieter-Cookies und andere Risiken für die Privatsphäre. Siehe [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API) für weitere Details.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `allow` {{experimental_inline}}

  - : Gibt eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<fencedframe>` an, die definiert, welche Funktionen dem `<fencedframe>` basierend auf dem Ursprung der Anfrage zur Verfügung stehen. Weitere Details dazu, welche Funktionen über eine auf ein fenced frame gesetzte Richtlinie gesteuert werden können, finden Sie unter [Permissions policies available to fenced frames](#permissions_policies_available_to_fenced_frames).

- `height` {{experimental_inline}}

  - : Eine einheitenlose Ganzzahl, die die Höhe des fenced frames in CSS-Pixeln darstellt. Der Standardwert ist `150`.

- `width` {{experimental_inline}}
  - : Eine einheitenlose Ganzzahl, die die Breite des fenced frames in CSS-Pixeln darstellt. Der Standardwert ist `300`.

## Permissions policies available to fenced frames

Berechtigungen, die vom obersten Kontext auf ein fenced frame zur Erlaubnis und Ablehnung von Funktionen delegiert werden, könnten als Kommunikationskanal genutzt werden und stellen daher eine Bedrohung für die Privatsphäre dar. Daher sind standardmäßige Web-Funktionen, deren Verfügbarkeit über die [Permissions Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) gesteuert werden kann (wie beispielsweise [`camera`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/camera) oder [`geolocation`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/geolocation)), innerhalb von fenced frames **nicht verfügbar**.

Die einzigen Funktionen, die durch eine Richtlinie innerhalb von fenced frames aktiviert werden können, sind die speziell dafür vorgesehenen Funktionen:

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

Derzeit sind diese immer in fenced frames aktiviert. In Zukunft wird es möglich sein, welche aktiviert sind, mit dem `<fencedframe>` `allow`-Attribut zu steuern. Das Blockieren von Privacy-Sandbox-Funktionen auf diese Weise wird auch das Laden des fenced frames verhindern — es wird überhaupt keinen Kommunikationskanal geben.

## Focusing across fenced frame boundaries

Die Fähigkeit, den aktiven Fokus des Dokuments über Grenzen von fenced frames hinweg zu verschieben (d.h. von einem Element außerhalb des fenced frames zu einem innerhalb oder umgekehrt) ist eingeschränkt. Benutzerinitiierte Aktionen wie ein Klick oder ein Tab können es tun, da dort kein Risiko des Fingerprintings besteht.

Der Versuch, die Grenze über einen API-Aufruf wie [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) zu durchqueren, ist jedoch untersagt — ein bösartiges Skript könnte eine solche Abfolge von Aufrufen nutzen, um abgeleitete Informationen über die Grenze hinweg zu leaken.

## Positionierung und Skalierung

Als {{Glossary("replaced_elements", "ersetztes Element")}} ermöglicht das `<fencedframe>`, die Position des eingebetteten Dokuments innerhalb seines Rahmens mit der {{cssxref("object-position")}}-Eigenschaft anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keine Auswirkungen auf `<fencedframe>`-Elemente.

Die Größe des eingebetteten Inhalts kann durch interne `contentWidth` und `contentHeight` Eigenschaften des `<fencedframe>`-[`config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Objekts festgelegt werden. In solchen Fällen wird das Ändern der `width` oder `height` des `<fencedframe>` die Größe des eingebetteten Containers auf der Seite ändern, aber das Dokument innerhalb des Containers wird visuell angepasst, um zu passen. Die gemeldete Breite und Höhe des eingebetteten Dokuments (d.h. [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)) bleibt unverändert.

## Barrierefreiheit

Personen, die mit unterstützender Technologie navigieren, wie z.B. einem Screenreader, können das [`title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) auf einem `<fencedframe>` verwenden, um dessen Inhalt zu beschriften. Der Wert des Titels sollte den eingebetteten Inhalt knapp beschreiben:

```html
<fencedframe
  title="Advertisement for new Log. From Blammo!"
  width="640"
  height="320"></fencedframe>
```

Ohne diesen Titel müssen sie in das `<fencedframe>` navigieren, um zu bestimmen, was der eingebettete Inhalt ist. Dieser Kontextwechsel kann verwirrend und zeitaufwändig sein, insbesondere für Seiten mit mehreren `<fencedframe>`s und/oder wenn die Embeds interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, generiert eine verwendende API (wie [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) oder [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` festgelegt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` von einer Ad-Auktion der Protected Audience API, das dann verwendet wird, um die gewonnene Anzeige in einem `<fencedframe>` anzuzeigen:

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

> **Hinweis:** `resolveToConfig: true` muss im Aufruf von `runAdAuction()` übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn es nicht gesetzt ist, wird das resultierende {{jsxref("Promise")}} zu einer URN aufgelöst, die nur in einem {{htmlelement("iframe")}} verwendet werden kann.

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
          >phrasierender Inhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
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
