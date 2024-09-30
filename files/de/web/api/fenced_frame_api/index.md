---
title: Fenced Frame API
slug: Web/API/Fenced_frame_API
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{DefaultAPISidebar("Fenced Frame API")}}

Die **Fenced Frame API** bietet Funktionalitäten zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elemente eingebettet sind.

## Konzepte und Nutzung

Eine Hauptursache von [Datenschutz-](/de/docs/Web/Privacy) und [Sicherheitsproblemen](/de/docs/Web/Security) im Web sind Inhalte, die in {{htmlelement("iframe")}}-Elemente eingebettet sind. Traditionell wurden `<iframe>`s verwendet, um Cookies von Drittanbietern zu setzen, die dazu genutzt werden können, Informationen zu teilen und Benutzer über Websites hinweg zu verfolgen. Zusätzlich kann der in einem `<iframe>` eingebettete Inhalt mit dem einbettenden Dokument kommunizieren (zum Beispiel über [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)).

Das einbettende Dokument kann auch Skripte nutzen, um diverse Arten von Informationen vom `<iframe>` auszulesen — zum Beispiel können Sie aus dem URL der eingebetteten Seite signifikante Tracking-/Fingerprinting-Daten auslesen, vor allem, wenn dieser [URL-Parameter](/de/docs/Web/URI#query) enthält. Das `<iframe>` kann auch auf den DOM des einbettenden Kontexts zugreifen und umgekehrt.

Die meisten modernen Browser arbeiten an Mechanismen, um Speicher zu partitionieren, sodass Cookie-Daten nicht mehr für Tracking-Zwecke genutzt werden können (siehe z.B. [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) oder [Firefox State Partitioning](/de/docs/Web/Privacy/State_Partitioning)).

`<fencedframe>`-Elemente zielen darauf ab, ein weiteres Stück dieses Puzzles zu lösen — sie sind in Form und Funktion `<iframe>`s sehr ähnlich, außer dass:

- Kommunikation nicht zwischen den `<fencedframe>`-Inhalten und der einbettenden Seite geteilt werden kann.
- Ein `<fencedframe>` kann auf cross-site Daten zugreifen, jedoch nur in einem sehr spezifischen, kontrollierten Rahmen, der den Benutzerdatenschutz wahrt.
- Ein `<fencedframe>` kann nicht frei manipuliert oder dessen Daten durch reguläre Skripte zugegriffen werden (zum Beispiel das Lesen oder Setzen des Quell-URLs). `<fencedframe>`-Inhalte können nur über [spezifische APIs](#anwendungsfälle) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf den DOM des einbettenden Kontexts zugreifen, noch kann der einbettende Kontext auf den DOM des `<fencedframe>` zugreifen.

Für weitere Informationen über das Kommunikationsmodell von fenced frames lesen Sie den [Leitfaden zur Kommunikation mit eingebetteten Frames](/de/docs/Web/API/Fenced_frame_API/Communication_with_embedded_frames).

### Anwendungsfälle

`<fencedframe>`s werden von anderen APIs genutzt, um verschiedene Arten von plattformübergreifenden Inhalten einzubetten oder Daten zu sammeln und dabei unterschiedliche Anwendungsfälle auf datenschutzfreundliche Weise zu erfüllen. Viele dieser Anwendungsfälle basierten zuvor auf Third-Party-Cookies oder anderen Mechanismen, die schlecht für den Datenschutz waren.

- Die [Shared Storage API](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage) ermöglicht den Zugriff auf unpartitionierte plattformübergreifende Daten in einer sicheren Umgebung, um dort Berechnungen durchzuführen und/oder Ergebnisse in einem `<fencedframe>` anzuzeigen. Zum Beispiel:
  - Werbetreibende können die Reichweite einer Anzeige messen oder nachfolgende Anzeigen basierend darauf schalten, welche Anzeigen Benutzer bereits auf anderen Seiten gesehen haben.
  - Entwickler können A/B-Tests durchführen, indem sie einem Benutzer basierend auf einer Gruppe, der sie zugewiesen sind, unterschiedliche Varianten anzeigen oder je nachdem, wie viele Benutzer bereits jede Variante gesehen haben.
  - Unternehmen können die Benutzererfahrung anpassen, basierend darauf, was der Benutzer auf anderen Seiten gesehen hat. Zum Beispiel, wenn der Benutzer bereits eine Mitgliedschaft erworben hat, möchten Sie ihm möglicherweise keine Anzeigen für die Anmeldung zur Mitgliedschaft auf Ihren anderen Plattformen zeigen.
- Die [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) erlaubt es Entwicklern, interessenbasierte Anzeigen zu implementieren, nämlich Remarketing und Anwendungsfälle für benutzerdefinierte Zielgruppen. Sie kann mehrere Gebote für einen Anzeigenplatz bewerten und die gewinnende Anzeige in einem `<fencedframe>` anzeigen.
- Die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) kann Daten aus `<fencedframe>`s (die aus Shared Storage oder der Protected Audience API stammen) sammeln und aggregierte Berichte erstellen.

## Wie funktionieren `<fencedframe>`s?

Wie oben erwähnt, können Sie den eingebetteten Inhalt eines {{htmlelement("fencedframe")}} nicht direkt über ein reguläres Skript steuern.

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, generiert eine nutzende API (wie [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann im JavaScript als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` von einer Anzeigenauktion der Protected Audience API, das dann verwendet wird, um die gewinnende Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

`resolveToConfig: true` muss im `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Falls `resolveToConfig` auf `false` gesetzt ist, wird die resultierende {{jsxref("Promise")}} auf eine undurchsichtige [URN](/de/docs/Web/URI#urns) (zum Beispiel `urn:uuid:c36973b5-e5d9-de59-e4c4-364f137b3c7a`) aufgelöst, die nur in einem `<iframe>` verwendet werden kann.

In jedem Fall speichert der Browser eine URL, die den Zielort des einzubettenden Inhalts enthält — diese wird entweder der undurchsichtigen URN zugeordnet oder der internen `url`-Eigenschaft des `FencedFrameConfig`. Der URL-Wert kann nicht von JavaScript im einbettenden Kontext ausgelesen werden.

> [!NOTE]
> Unterstützung für undurchsichtige URNs in `<iframe>`s wird bereitgestellt, um die Migration bestehender Implementierungen zu den [Privacy Sandbox](https://developers.google.com/privacy-sandbox)-APIs zu erleichtern. Diese Unterstützung soll vorübergehend sein und wird zukünftig entfernt, wenn die Akzeptanz steigt.

> **Hinweis:** `FencedFrameConfig` hat eine [`setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext)-Methode, die verwendet wird, um Daten vom einbettenden Dokument in den Shared Storage des `<fencedframe>` zu übergeben. Diese könnten z.B. in einem [`Worklet`](/de/docs/Web/API/Worklet) über das `<fencedframe>` zugegriffen und für die Erstellung eines Berichts genutzt werden. Weitere Einzelheiten finden Sie in der [Shared Storage API](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage).

### Zugriff auf die Funktionalität von fenced frames über das `Fence`-Objekt

Innerhalb der in `<fencedframe>`s eingebetteten Dokumente hat JavaScript Zugriff auf eine [`Window.fence`](/de/docs/Web/API/Window/fence)-Eigenschaft, die eine [`Fence`](/de/docs/Web/API/Fence)-Instanz für dieses Dokument zurückgibt. Dieses Objekt enthält mehrere spezifisch für die Fenced Frame API relevante Funktionen. Zum Beispiel bietet [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) eine Möglichkeit, die Übermittlung von Berichtsdaten über ein [beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere spezifizierte URLs auszulösen, um Anzeigenansichten und -klicks zu melden.

### Berechtigungspolicy

Nur spezifische Features, die zur Verwendung in `<fencedframes>`s entworfen wurden, können über Berechtigungspolicys aktiviert werden, die auf ihnen gesetzt sind; andere polisysteuerte Features sind in diesem Kontext nicht verfügbar. Siehe [Berechtigungspolicys, die für fenced frames verfügbar sind](/de/docs/Web/HTML/Element/fencedframe#permissions_policies_available_to_fenced_frames) für weitere Einzelheiten.

### HTTP-Header

Ein {{httpheader("Sec-Fetch-Dest")}}-Header mit einem Wert von `fencedframe` wird für alle Anfragen gesetzt, die von einem `<fencedframe>` aus getätigt werden, einschließlich der in einem `<fencedframe>` eingebetteten Kinder-`<iframe>`s.

```http
Sec-Fetch-Dest: fencedframe
```

Der Server muss einen {{httpheader("Supports-Loading-Mode")}}-Antwortheader mit einem Wert von `fenced-frame` für jedes Dokument setzen, das in ein `<fencedframe>` oder ein in einem `<fencedframe>` eingebettetes `<iframe>` geladen werden soll.

```http
Supports-Loading-Mode: fenced-frame
```

Andere Auswirkungen von fenced frames auf HTTP-Header sind wie folgt:

- [User-agent client hints](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) sind innerhalb von fenced frames nicht verfügbar, da sie auf [Berechtigungspolicy](/de/docs/Web/HTTP/Permissions_Policy)-Delegation basieren, die für das Leaken von Daten genutzt werden könnte.
- Strenge [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy)-Einstellungen werden für neue Browsing-Kontexte erzwungen, die von innerhalb von fenced frames geöffnet werden, andernfalls könnten sie genutzt werden, um Informationen zu anderen Ursprüngen zu leaken. Jedes neue Fenster, das von innerhalb eines fenced frames geöffnet wird, wird [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener) gesetzt haben und `Cross-Origin-Opener-Policy: same-origin` um sicherzustellen, dass [`Window.opener`](/de/docs/Web/API/Window/opener) `null` zurückgibt und es in seiner eigenen Browsing-Kontextgruppe platziert.
- [`Content-Security-Policy: fenced-frame-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/fenced-frame-src) wurde hinzugefügt, um gültige Quellen für verschachtelte Browsing-Kontexte zu spezifizieren, die in `<fencedframe>`-Elemente geladen werden.
- [`Content-Security-Policy: sandbox`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/sandbox)-benutzerdefinierte Einstellungen können nicht von fenced frames geerbt werden, um Datenschutzprobleme zu mindern. Damit ein fenced frame geladen wird, müssen Sie kein `sandbox`-CSP spezifizieren (was impliziert, dass die unten aufgeführten Werte gemeint sind), oder Sie müssen die folgenden Sandboxing-Werte spezifizieren:
  - `allow-same-origin`
  - `allow-forms`
  - `allow-scripts`
  - `allow-popups`
  - `allow-popups-to-escape-sandbox`
  - `allow-top-navigation-by-user-activation`

### `beforeunload` und `unload`-Events

[`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) und [`unload`](/de/docs/Web/API/Window/unload_event)-Events werden für fenced frames nicht ausgelöst, da sie in Form eines Löschzeitstempels Informationen leaken können. Implementierungen zielen darauf ab, so viele potentielle Leaks wie möglich zu eliminieren.

## Schnittstellen

- [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)
  - : Repräsentiert die Navigation eines {{htmlelement("fencedframe")}}, d.h. welcher Inhalt darin angezeigt wird. Ein `FencedFrameConfig` wird von einer Quelle wie der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) zurückgegeben und als Wert von [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) gesetzt.
- [`Fence`](/de/docs/Web/API/Fence)
  - : Enthält mehrere Funktionen, die für die fenced frame Funktionalität relevant sind. Nur für in einem `<fencedframe>` eingebettete Dokumente verfügbar.
- [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement)
  - : Repräsentiert ein `<fencedframe>`-Element in JavaScript und bietet Eigenschaften, um es zu konfigurieren.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.deprecatedReplaceInURN()`](/de/docs/Web/API/Navigator/deprecatedReplaceInURN)
  - : Ersetzt angegebene Zeichenfolgen innerhalb der zu einer gegebenen undurchsichtigen URN oder der internen `url`-Eigenschaft eines `FencedFrameConfig` zugeordneten URL.
- [`Window.fence`](/de/docs/Web/API/Window/fence)
  - : Gibt ein [`Fence`](/de/docs/Web/API/Fence)-Objekt für den aktuellen Dokumentkontext zurück. Nur für in einem `<fencedframe>` eingebettete Dokumente verfügbar.

## Teilnahme und lokale Tests

Bestimmte API-Funktionen, die [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)s erstellen, wie [`Navigator.runAdAuction()`](/de/docs/Web/API/Navigator/runAdAuction) ([Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience)) und [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) ([Shared Storage API](/de/docs/Web/API/Shared_Storage_API)), sowie andere Funktionen wie [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent), erfordern, dass Sie Ihre Seite in einem [Datenschutz-Sandbox-Registrierungsprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) anmelden. Wenn Sie dies nicht tun, werden die API-Aufrufe mit einer Konsolenwarnung fehlschlagen.

> [!NOTE]
> In Chrome können Sie Ihren fenced frame Code trotzdem lokal testen, ohne eine Registrierung. Um lokale Tests zu ermöglichen, aktivieren Sie das folgende Chrome-Entwickler-Flag:
>
> `chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Die folgenden Demos verwenden alle `<fencedframe>`s:

- [Shared Storage API Demos](https://shared-storage-demo.web.app/) (die auch einige Private Aggregation API-Beispiele enthalten)
- [Protected Audience API Demo](https://protected-audience-demo-advertiser.web.app/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
