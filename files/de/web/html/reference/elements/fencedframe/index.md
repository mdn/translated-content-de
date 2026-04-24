---
title: "`<fencedframe>` HTML fenced frame-Element"
short-title: <fencedframe>
slug: Web/HTML/Reference/Elements/fencedframe
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

{{SeeCompatTable}}

Das **`<fencedframe>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen verschachtelten {{Glossary("browsing_context", "Browsing-Kontext")}} und bettet eine andere HTML-Seite in die aktuelle ein. `<fencedframe>`s sind sehr ähnlich zu {{htmlelement("iframe")}}-Elementen in Form und Funktion, außer dass:

- Die Kommunikation zwischen dem `<fencedframe>`-Inhalt und seiner einbettenden Seite eingeschränkt ist.
- Ein `<fencedframe>` kann auf cross-site Daten zugreifen, jedoch nur unter sehr spezifischen kontrollierten Umständen, die die Privatsphäre der Benutzer wahren.
- Ein `<fencedframe>` kann nicht durch reguläres Scripting manipuliert werden oder auf dessen Daten zugegriffen werden (zum Beispiel das Lesen oder Setzen der Quell-URL). `<fencedframe>`-Inhalte können nur über [spezifische APIs](/de/docs/Web/API/Fenced_frame_API#use_cases) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf den DOM des einbettenden Kontexts zugreifen, noch kann der einbettende Kontext auf das DOM des `<fencedframe>` zugreifen.

Das `<fencedframe>`-Element ist eine Art von `<iframe>` mit stärker integrierten Datenschutzfunktionen. Es behebt die Mängel von `<iframe>`s, wie die Abhängigkeit von Drittanbieter-Cookies und andere Datenschutzrisiken. Siehe [Fenced frame API](/de/docs/Web/API/Fenced_frame_API) für weitere Details.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `allow` {{experimental_inline}}
  - : Gibt eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<fencedframe>` an, die definiert, welche Funktionen dem `<fencedframe>` basierend auf dem Ursprung der Anfrage verfügbar sind. Siehe [Verfügbare Berechtigungspolicies für fenced frames](#verfügbare_berechtigungspolicies_für_fenced_frames) für weitere Details, welche Funktionen durch eine auf einem fenced frame gesetzte Policy gesteuert werden können.

- `height` {{experimental_inline}}
  - : Ein ganzzahliger Wert ohne Einheit, der die Höhe des fenced frames in CSS-Pixel angibt. Der Standardwert ist `150`.

- `width` {{experimental_inline}}
  - : Ein ganzzahliger Wert ohne Einheit, der die Breite des fenced frames in CSS-Pixel angibt. Der Standardwert ist `300`.

## Verfügbare Berechtigungspolicies für fenced frames

Berechtigungen, die vom obersten Kontext an einen fenced frame delegiert werden, um Funktionen zu erlauben oder zu verweigern, könnten als Kommunikationskanal genutzt werden und stellen daher ein Datenschutzrisiko dar. Aus diesem Grund sind standardmäßige Web-Funktionen, deren Verfügbarkeit durch die [Permissions Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) kontrolliert werden kann (zum Beispiel, [`camera`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/camera) oder [`geolocation`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/geolocation)), innerhalb von fenced frames **nicht verfügbar**.

Die einzigen Funktionen, die durch eine Policy innerhalb von fenced frames aktiviert werden können, sind die spezifischen Funktionen, die zur Nutzung innerhalb von fenced frames entwickelt wurden:

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

Derzeit sind diese immer innerhalb von fenced frames aktiviert. In Zukunft wird es möglich sein, mithilfe des `<fencedframe>`-`allow`-Attributes zu kontrollieren, welche von ihnen aktiviert sind. Das Blockieren von Privacy Sandbox-Funktionen auf diese Weise wird auch das Laden des fenced frames blockieren — es wird keinen Kommunikationskanal geben.

## Fokussieren über die Grenzen von fenced frames hinweg

Die Fähigkeit des aktiven Fokus des Dokuments, über die Grenzen von fenced frames hinweg verschoben zu werden (d.h. von einem Element außerhalb des fenced frames zu einem innerhalb, oder umgekehrt), ist eingeschränkt. Benutzerinitiierte Aktionen wie ein Klick oder ein Tab können dies tun, da hierbei kein Fingerprinting-Risiko besteht.

Jedoch ist der Versuch, die Grenze über einen API-Aufruf wie [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) zu durchqueren, verboten — ein bösartiges Skript könnte eine Reihe solcher Aufrufe verwenden, um abgeleitete Informationen über die Grenze hinweg zu leaken.

## Positionierung und Skalierung

Als ein {{Glossary("replaced_elements", "ersetztes Element")}} erlaubt das `<fencedframe>`, die Position des eingebetteten Dokuments innerhalb seines Rahmens mithilfe der {{cssxref("object-position")}}-Eigenschaft anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keine Wirkung auf `<fencedframe>`-Elemente.

Die Größe des eingebetteten Inhalts kann durch interne `contentWidth` und `contentHeight` Eigenschaften des [`config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Objekts des `<fencedframe>` festgelegt werden. In solchen Fällen ändert das Ändern der `width` oder `height` des `<fencedframe>` die Größe des eingebetteten Containers auf der Seite, aber das Dokument innerhalb des Containers wird visuell skaliert, um zu passen. Die gemeldete Breite und Höhe des eingebetteten Dokuments (d.h. [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)) bleibt unverändert.

## Barrierefreiheit

Personen, die mit assistiver Technologie navigieren, wie einem Bildschirmleser, können das [`title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) auf einem `<fencedframe>` verwenden, um dessen Inhalt zu kennzeichnen. Der Wert des Titels sollte den eingebetteten Inhalt prägnant beschreiben:

```html
<fencedframe
  title="Advertisement for new Log. From Blammo!"
  width="640"
  height="320"></fencedframe>
```

Ohne diesen Titel müssen sie in das `<fencedframe>` hinein navigieren, um festzustellen, was sein eingebetteter Inhalt ist. Diese Kontextverschiebung kann verwirrend und zeitaufwendig sein, insbesondere bei Seiten mit mehreren `<fencedframe>`s und/oder wenn Embeds interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, generiert eine nutzende API (wie [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) oder [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält eine `FencedFrameConfig` aus einer Werbeauktion der Protected Audience API, die dann verwendet wird, um die gewonnene Werbung in einem `<fencedframe>` anzuzeigen:

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
> `resolveToConfig: true` muss in den `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn es nicht gesetzt ist, wird der resultierende {{jsxref("Promise")}} zu einer URN aufgelöst, die nur in einem {{htmlelement("iframe")}} verwendet werden kann.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>, <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing-Inhalt</a>, eingebetteter Inhalt, interaktiver Inhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Aussparung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
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
