---
title: "<fencedframe>: Das Fenced Frame-Element"
slug: Web/HTML/Reference/Elements/fencedframe
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}{{SeeCompatTable}}

Das **`<fencedframe>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen verschachtelten {{Glossary("browsing_context", "Browsingkontext")}} und bettet eine andere HTML-Seite in die aktuelle ein. `<fencedframe>`s sind in Form und Funktion den {{htmlelement("iframe")}}-Elementen sehr ähnlich, mit den folgenden Ausnahmen:

- Die Kommunikation zwischen dem `<fencedframe>`-Inhalt und der einbettenden Seite ist eingeschränkt.
- Ein `<fencedframe>` kann auf cross-site Daten zugreifen, aber nur unter sehr spezifischen, kontrollierten Umständen, die den Datenschutz des Nutzers wahren.
- Ein `<fencedframe>` kann nicht über reguläres Scripting manipuliert oder auf seine Daten zugegriffen werden (zum Beispiel das Lesen oder Setzen der Quell-URL). `<fencedframe>`-Inhalte können nur über [spezifische APIs](/de/docs/Web/API/Fenced_frame_API#use_cases) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf das DOM des einbettenden Kontexts zugreifen, und der einbettende Kontext kann nicht auf das DOM des `<fencedframe>` zugreifen.

Das `<fencedframe>`-Element ist eine Art `<iframe>` mit mehr eingebauten Datenschutzfunktionen. Es adressiert die Schwächen der `<iframe>`s, wie das Vertrauen auf Drittanbieter-Cookies und andere Datenschutzrisiken. Weitere Details finden Sie unter [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API).

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `allow` {{experimental_inline}}

  - : Gibt eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) für das `<fencedframe>` an, die festlegt, welche Funktionen dem `<fencedframe>` basierend auf dem Ursprung der Anfrage zur Verfügung stehen. Siehe [Berechtigungsrichtlinien, die für fenced frames verfügbar sind](#berechtigungsrichtlinien,_die_für_fenced_frames_verfügbar_sind) für weitere Details, welche Funktionen über eine auf einem fenced frame gesetzte Richtlinie gesteuert werden können.

- `height` {{experimental_inline}}

  - : Ein ganzzahliger Wert ohne Einheit, der die Höhe des fenced frames in CSS-Pixeln darstellt. Der Standardwert ist `150`.

- `width` {{experimental_inline}}
  - : Ein ganzzahliger Wert ohne Einheit, der die Breite des fenced frames in CSS-Pixeln darstellt. Der Standardwert ist `300`.

## Berechtigungsrichtlinien, die für fenced frames verfügbar sind

Berechtigungen, die aus dem obersten Kontext an ein fenced frame delegiert werden, um Funktionen zu erlauben oder zu verweigern, könnten als Kommunikationskanal genutzt werden und stellen daher ein Datenschutzrisiko dar. Daher sind Standard-Webfunktionen, deren Verfügbarkeit über die [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) gesteuert werden kann (zum Beispiel [`camera`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/camera) oder [`geolocation`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/geolocation)), innerhalb von fenced frames **nicht verfügbar**.

Die einzigen Funktionen, die durch eine Richtlinie innerhalb von fenced frames aktiviert werden können, sind die spezifischen Funktionen, die innerhalb von fenced frames genutzt werden sollen:

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

Diese sind derzeit immer innerhalb von fenced frames aktiviert. In der Zukunft wird es möglich sein zu kontrollieren, welche durch das `allow`-Attribut des `<fencedframe>` aktiviert werden. Das Blockieren von Privacy-Sandbox-Funktionen auf diese Weise blockiert auch das Laden des fenced frames — es wird dann keinen Kommunikationskanal geben.

## Fokus über die Grenzen von fenced frames hinweg

Die Fähigkeit des aktiven Fokus des Dokuments, über die Grenzen von fenced frames hinweg bewegt zu werden (d.h. von einem Element außerhalb des fenced frames zu einem innerhalb, oder umgekehrt), ist eingeschränkt. Nutzerinitiierte Aktionen wie ein Klick oder Tab können dies tun, da hierbei kein Risiko des Fingerprintings besteht.

Jedoch ist es verboten, die Grenze über einen API-Aufruf wie [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) zu überschreiten — ein bösartiges Skript könnte eine Serie solcher Aufrufe nutzen, um abgeleitete Informationen über die Grenze hinweg auszulagern.

## Positionierung und Skalierung

Als {{Glossary("replaced_elements", "ersetztes Element")}} erlaubt das `<fencedframe>`, die Position des eingebetteten Dokuments innerhalb seines Rahmens mithilfe der {{cssxref("object-position")}}-Eigenschaft anzupassen.

> [!NOTE]
> Die {{cssxref("object-fit")}}-Eigenschaft hat keine Wirkung auf `<fencedframe>`-Elemente.

Die Größe des eingebetteten Inhalts kann durch die internen `contentWidth` und `contentHeight` Eigenschaften des `<fencedframe>`'s [`config`](/de/docs/Web/API/HTMLFencedFrameElement/config) Objekt festgelegt werden. In solchen Fällen ändert das Ändern der `width` oder `height` des `<fencedframe>` die Größe des eingebetteten Containers auf der Seite, aber das Dokument innerhalb des Containers wird visuell skaliert, um zu passen. Die gemeldete Breite und Höhe des eingebetteten Dokuments (d.h. [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)) wird unverändert bleiben.

## Barrierefreiheit

Personen, die mit assistiver Technologie beispielsweise einem Screenreader navigieren, können das [`title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) auf einem `<fencedframe>` verwenden, um dessen Inhalt zu kennzeichnen. Der Wert des Titels sollte den eingebetteten Inhalt kurz und prägnant beschreiben:

```html
<fencedframe
  title="Advertisement for new Log. From Blammo!"
  width="640"
  height="320"></fencedframe>
```

Ohne diesen Titel müssen sie in das `<fencedframe>` navigieren, um zu bestimmen, was dessen eingebetteter Inhalt ist. Diese Kontextverschiebung kann verwirrend und zeitaufwendig sein, insbesondere bei Seiten mit mehreren `<fencedframe>`s und/oder wenn Einbettungen interaktive Inhalte wie Video oder Audio enthalten.

## Beispiele

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt werden soll, generiert eine verwendete API (wie [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) oder [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann als Wert der `config`-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält eine `FencedFrameConfig` aus einer Werbeauktion der Protected Audience API, die dann verwendet wird, um die gewonnene Anzeige in einem `<fencedframe>` anzuzeigen:

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

> **Hinweis:** `resolveToConfig: true` muss beim Aufruf der `runAdAuction()` gesetzt werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wird es nicht gesetzt, löst das resultierende {{jsxref("Promise")}} zu einer URN auf, die nur in einem {{htmlelement("iframe")}} verwendet werden kann.

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, eingebetteter Inhalt, interaktiver Inhalt, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Keine.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das Endtag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
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
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role"><code>application</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role"><code>document</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role"><code>img</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Interface</th>
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
- [Das Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
