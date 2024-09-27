---
title: Fenced Frame API
slug: Web/API/Fenced_frame_API
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{DefaultAPISidebar("Fenced Frame API")}}

Die **Fenced Frame API** bietet Funktionalität zur Kontrolle von Inhalten, die in {{htmlelement("fencedframe")}}-Elementen eingebettet sind.

## Konzepte und Nutzung

Eine Hauptquelle für [Datenschutz-](/de/docs/Web/Privacy) und [Sicherheitsprobleme](/de/docs/Web/Security) im Web sind Inhalte, die in {{htmlelement("iframe")}}-Elementen eingebettet sind. Historisch gesehen wurden `<iframe>`s verwendet, um Drittanbieter-Cookies zu setzen, die Informationen teilen und Benutzer über Websites hinweg verfolgen können. Außerdem kann sich der in einem `<iframe>` eingebettete Inhalt mit dem einbettenden Dokument austauschen (bspw. unter Verwendung von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)).

Das einbettende Dokument kann auch Skripte verwenden, um verschiedene Informationen aus dem `<iframe>` zu lesen — zum Beispiel können Sie potenziell signifikante Tracking-/Fingerprinting-Daten aus dem eingebetteten URL vom `src`-Attribut erhalten, insbesondere wenn es [URL-Parameter](/de/docs/Web/URI#query) enthält. Das `<iframe>` kann auch Zugriff auf den DOM des einbettenden Kontexts erhalten und umgekehrt.

Die meisten modernen Browser arbeiten an Mechanismen, um den Speicher zu partitionieren, sodass Cookie-Daten nicht mehr für Tracking verwendet werden können (siehe beispielsweise [Cookies mit unabhängigem partitioniertem Zustand (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) oder [Firefox-Zustandspartitionierung](/de/docs/Web/Privacy/State_Partitioning)).

`<fencedframe>`-Elemente zielen darauf ab, ein weiteres Stück dieses Puzzles zu lösen – sie sind in Form und Funktion `<iframe>`s sehr ähnlich, außer dass:

- Die Kommunikation nicht zwischen dem `<fencedframe>`-Inhalt und seinem einbettenden Standort geteilt werden kann.
- Ein `<fencedframe>` kann auf cross-site Daten zugreifen, jedoch nur unter einem sehr spezifischen Set kontrollierter Umstände, die die Privatsphäre des Nutzers wahren.
- Ein `<fencedframe>` kann nicht beliebig manipuliert oder über reguläre Skripte auf seine Daten zugegriffen werden (z.B. das Lesen oder Setzen der Quell-URL). `<fencedframe>`-Inhalte können nur über [spezifische APIs](#anwendungsfälle) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf den DOM des einbettenden Kontexts zugreifen, noch kann der einbettende Kontext auf den DOM des `<fencedframe>` zugreifen.

Für weitere Informationen über das Kommunikationsmodell von Fenced Frames lesen Sie den [Leitfaden zur Kommunikation mit eingebetteten Frames](/de/docs/Web/API/Fenced_frame_API/Communication_with_embedded_frames).

### Anwendungsfälle

`<fencedframe>`s werden von anderen APIs verwendet, um verschiedene Arten von cross-site-Inhalten einzubetten oder Daten zu sammeln, unterschiedliche Anwendungsfälle auf eine datenschutzfreundliche Weise zu erfüllen. Die meisten dieser Anwendungsfälle haben zuvor auf Drittanbieter-Cookies oder andere Mechanismen gesetzt, die schlecht für den Datenschutz waren.

- Die [Shared Storage API](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage) bietet Zugriff auf unpartitionierte cross-site-Daten in einer sicheren Umgebung und berechnet und/oder zeigt Ergebnisse in einem `<fencedframe>` an. Zum Beispiel:
  - Werbetreibende können die Reichweite einer Anzeige messen oder nachfolgende Anzeigen basierend darauf schalten, welche Anzeigen Benutzer bereits auf anderen Websites gesehen haben.
  - Entwickler können A/B-Tests durchführen, indem sie einem Benutzer basierend auf einer Gruppe, der er zugeordnet ist, oder basierend auf der Anzahl der Benutzer, die jede Variante bereits gesehen haben, Variationen zeigen.
  - Unternehmen können die Benutzererfahrung basierend darauf anpassen, was sie auf anderen Seiten gesehen haben. Zum Beispiel, wenn sie bereits eine Mitgliedschaft erworben haben, möchten Sie ihnen möglicherweise auf Ihren anderen Websites keine Mitgliedsanmeldungsanzeigen mehr anzeigen.
- Die [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) erlaubt Entwicklern die Implementierung von interessenbasierten Bietergruppenwerbung, nämlich Remarketing und benutzerdefinierte Zielgruppenanwendungsfälle. Sie kann mehrere Gebote für Anzeigeflächen bewerten und die gewinnende Anzeige in einem `<fencedframe>` anzeigen.
- Die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) kann Daten von `<fencedframe>`s (aus dem Shared Storage oder der Protected Audience API stammend) sammeln und aggregierte Berichte erstellen.

## Wie funktionieren `<fencedframe>`s?

Wie oben erwähnt, steuern Sie den in einem {{htmlelement("fencedframe")}} eingebetteten Inhalt nicht direkt über reguläre Skripte.

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, generiert eine nutzende API (z.B. [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann über JavaScript als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Eigenschaft des `<fencedframe>` festgelegt wird.

Das folgende Beispiel erhält eine `FencedFrameConfig` aus einer Anzeigenauktion der Protected Audience API, welche anschließend verwendet wird, um die gewinnende Anzeige in einem `<fencedframe>` darzustellen:

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

`resolveToConfig: true` muss in den `runAdAuction()`-Aufruf aufgenommen werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn `resolveToConfig` auf `false` gesetzt ist, löst sich das resultierende {{jsxref("Promise")}} in eine opake [URN](/de/docs/Web/URI#urns) auf (z.B. `urn:uuid:c36973b5-e5d9-de59-e4c4-364f137b3c7a`), die nur in einem `<iframe>` verwendet werden kann.

So oder so speichert der Browser eine URL, die den Zielort des einzubettenden Inhalts enthält – entweder der opaken URN zugeordnet oder der `url`-Eigenschaft der internen `FencedFrameConfig`. Der URL-Wert kann nicht von JavaScript, das im einbettenden Kontext ausgeführt wird, gelesen werden.

> [!NOTE]
> Unterstützung wird für opake URNs in `<iframe>`s bereitgestellt, um die Migration vorhandener Implementierungen zu [Privacy Sandbox](https://developers.google.com/privacy-sandbox)-APIs zu erleichtern. Diese Unterstützung ist als vorübergehend vorgesehen und wird in Zukunft entfernt, wenn die Akzeptanz wächst.

> **Hinweis:** `FencedFrameConfig` verfügt über eine [`setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext)-Methode, die verwendet wird, um Daten vom einbettenden Dokument an den Shared Storage des `<fencedframe>` zu übergeben. Diese könnten beispielsweise in einem [`Worklet`](/de/docs/Web/API/Worklet) über das `<fencedframe>` abgerufen und zur Erstellung eines Berichts verwendet werden. Siehe die [Shared Storage API](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage) für weitere Details.

### Zugriff auf Fenced Frame-Funktionalitäten auf dem `Fence`-Objekt

In Dokumenten, die in `<fencedframe>`s eingebettet sind, hat JavaScript Zugang zu einer [`Window.fence`](/de/docs/Web/API/Window/fence)-Eigenschaft, die eine [`Fence`](/de/docs/Web/API/Fence)-Instanz für dieses Dokument zurückgibt. Dieses Objekt enthält mehrere Funktionen, die speziell für die Fenced Frame-API-Funktionalität relevant sind. Zum Beispiel bietet [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) eine Möglichkeit, die Übermittlung von Berichtsdaten über ein [Beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere spezifizierte URLs auszulösen, um Anzeigenaufrufe und -klicks zu melden.

### Berechtigungspolicy

Nur spezifische Funktionen, die für die Verwendung in `<fencedframe>`s vorgesehen sind, können über Berechtigungsrichtlinien aktiviert werden, die auf ihnen festgelegt sind; andere richtliniengesteuerte Funktionen sind in diesem Kontext nicht verfügbar. Siehe [Verfügbare Berechtigungspolicies für Fenced Frames](/de/docs/Web/HTML/Element/fencedframe#permissions_policies_available_to_fenced_frames) für weitere Details.

### HTTP-Header

Ein {{httpheader("Sec-Fetch-Dest")}}-Header mit einem Wert von `fencedframe` wird für alle Anfragen gesetzt, die aus einem `<fencedframe>` ausgehen, einschließlich eingebetteter Kinder-`<iframe>`s innerhalb eines `<fencedframe>`.

```http
Sec-Fetch-Dest: fencedframe
```

Der Server muss einen {{httpheader("Supports-Loading-Mode")}}-Antwort-Header mit einem Wert von `fenced-frame` für jedes Dokument setzen, das in ein `<fencedframe>` geladen werden soll, oder ein `<iframe>`, das innerhalb eines `<fencedframe>` eingebettet ist.

```http
Supports-Loading-Mode: fenced-frame
```

Weitere Auswirkungen von Fenced Frames auf HTTP-Header sind wie folgt:

- [User-Agent-Client-Hinweise](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) sind innerhalb von Fenced Frames nicht verfügbar, da sie auf [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)-Delegation beruhen, die zur Datenweitergabe genutzt werden könnte.
- Strikte [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy)-Einstellungen werden auf neue Browsing-Kontexte angewendet, die aus Fenced Frames geöffnet werden, andernfalls könnten sie verwendet werden, um Informationen an andere Herkunftsseiten weiterzugeben. Jedes neue Fenster, das aus einem Fenced Frame geöffnet wird, wird mit [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener) und `Cross-Origin-Opener-Policy: same-origin` gesetzt, um sicherzustellen, dass [`Window.opener`](/de/docs/Web/API/Window/opener) `null` zurückgibt und es in seine eigene Browser-Kontextgruppe einzuordnen.
- [`Content-Security-Policy: fenced-frame-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/fenced-frame-src) wurde hinzugefügt, um gültige Quellen für verschachtelte Browsing-Kontexte zu spezifizieren, die in `<fencedframe>`-Elementen geladen werden.
- [`Content-Security-Policy: sandbox`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/sandbox)-Benutzerdefinierte Einstellungen können nicht von Fenced Frames geerbt werden, um Datenschutzprobleme zu mitigieren. Um einen Fenced Frame zu laden, müssen Sie keine `sandbox`-CSP spezifizieren (was die untenstehenden Werte impliziert), oder die folgenden Sandbox-Werte spezifizieren:
  - `allow-same-origin`
  - `allow-forms`
  - `allow-scripts`
  - `allow-popups`
  - `allow-popups-to-escape-sandbox`
  - `allow-top-navigation-by-user-activation`

### `beforeunload` und `unload` Ereignisse

[`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) und [`unload`](/de/docs/Web/API/Window/unload_event) Ereignisse werden in Fenced Frames nicht ausgelöst, weil sie Informationen in Form eines Seitenlöschzeitstempels preisgeben können. Implementierungen zielen darauf ab, so viele potenzielle Lecks wie möglich auszuschließen.

## Schnittstellen

- [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)
  - : Repräsentiert die Navigation eines {{htmlelement("fencedframe")}}, d.h. welche Inhalte darin angezeigt werden. Ein `FencedFrameConfig` wird von einer Quelle wie der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) zurückgegeben und als Wert von [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) gesetzt.
- [`Fence`](/de/docs/Web/API/Fence)
  - : Enthält mehrere Funktionen, die für die Fenced Frame-Funktionalität relevant sind. Nur für Dokumente verfügbar, die innerhalb eines `<fencedframe>` eingebettet sind.
- [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement)
  - : Repräsentiert ein `<fencedframe>`-Element in JavaScript und bietet Eigenschaften, um es zu konfigurieren.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.deprecatedReplaceInURN()`](/de/docs/Web/API/Navigator/deprecatedReplaceInURN)
  - : Ersetzt angegebene Zeichenketten in der gemappten URL, die einer gegebenen opaken URN oder dem internen `url`-Eigentum eines `FencedFrameConfig` entspricht.
- [`Window.fence`](/de/docs/Web/API/Window/fence)
  - : Gibt ein [`Fence`](/de/docs/Web/API/Fence)-Objekt für den aktuellen Dokumentenkontext zurück. Nur für Dokumente verfügbar, die innerhalb eines `<fencedframe>` eingebettet sind.

## Anmeldung und lokales Testen

Bestimmte API-Funktionen, die [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)s erstellen, wie [`Navigator.runAdAuction()`](/de/docs/Web/API/Navigator/runAdAuction) ([Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience)) und [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) ([Shared Storage API](/de/docs/Web/API/Shared_Storage_API)), sowie andere Funktionen wie [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent), erfordern, dass Sie Ihre Seite in einem [Privacy Sandbox-Anmeldeprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) anmelden. Wenn Sie dies nicht tun, schlagen die API-Aufrufe mit einer Konsolenwarnung fehl.

> [!NOTE]
> In Chrome können Sie Ihren Fenced Frame-Code dennoch lokal testen, ohne dass eine Anmeldung erforderlich ist. Um lokales Testen zu ermöglichen, aktivieren Sie den folgenden Chrome-Entwickler-Flag:
>
> `chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Die folgenden Demonstrationen verwenden alle `<fencedframe>`s:

- [Shared Storage API-Demos](https://shared-storage-demo.web.app/) (die auch einige Beispiele der Private Aggregation API enthalten)
- [Protected Audience API-Demo](https://protected-audience-demo-advertiser.web.app/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [Der Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
