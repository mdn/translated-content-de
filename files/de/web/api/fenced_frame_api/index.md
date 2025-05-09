---
title: Fenced Frame API
slug: Web/API/Fenced_frame_API
l10n:
  sourceCommit: a8c6558339dafb20c51bc34b2d75c8c1343634ac
---

{{SeeCompatTable}}{{DefaultAPISidebar("Fenced Frame API")}}

> [!WARNING]
> Diese Funktion wird derzeit von einem Browseranbieter abgelehnt.
> Siehe den Abschnitt [Standardspositionen](#standardspositionen) weiter unten für Details.

Die **Fenced Frame API** bietet Funktionalitäten zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elementen eingebettet sind.

## Konzepte und Verwendung

Eine Hauptquelle von [Datenschutz-](/de/docs/Web/Privacy) und [Sicherheitsproblemen](/de/docs/Web/Security) im Web ist das Einbetten von Inhalten in {{htmlelement("iframe")}}-Elementen. Historisch gesehen wurden `<iframe>`s verwendet, um Cookies von Drittanbietern zu setzen, die zum Teilen von Informationen und zur Nachverfolgung von Nutzern über verschiedene Websites hinweg genutzt werden können. Zusätzlich können Inhalte, die in einem `<iframe>` eingebettet sind, mit dem einbettenden Dokument kommunizieren (zum Beispiel mittels [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)).

Das einbettende Dokument kann auch Skripte verwenden, um verschiedene Formen von Informationen aus dem `<iframe>` zu lesen — zum Beispiel können Sie potenziell signifikante Tracking-/Fingerprinting-Daten erhalten, indem Sie die eingebettete URL von der `src`-Eigenschaft auslesen, besonders wenn sie [URL-Parameter](/de/docs/Web/URI#query) enthält. Das `<iframe>` kann außerdem auf das DOM des einbettenden Kontexts zugreifen, und umgekehrt.

Die meisten modernen Browser arbeiten an Mechanismen zur Partitionierung des Speichers, sodass Cookie-Daten nicht mehr für das Tracking verwendet werden können (zum Beispiel siehe [Cookies with Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) oder [Firefox State Partitioning](/de/docs/Web/Privacy/Guides/State_Partitioning)).

`<fencedframe>`-Elemente zielen darauf ab, ein weiteres Stück dieses Puzzles zu lösen — sie sind in Form und Funktion den `<iframe>`s sehr ähnlich, mit folgenden Ausnahmen:

- Die Kommunikation kann nicht zwischen den `<fencedframe>`-Inhalten und ihrer einbettenden Website geteilt werden.
- Ein `<fencedframe>` kann auf standortübergreifende Daten zugreifen, jedoch nur unter einer sehr spezifischen Reihe von kontrollierten Umständen, die die Privatsphäre der Nutzer wahren.
- Ein `<fencedframe>` kann nicht frei manipuliert oder seine Daten über reguläre Skripting-Methoden (zum Beispiel das Lesen oder Setzen der Quell-URL) abgerufen werden. Inhalte im `<fencedframe>` können nur über [spezifische APIs](#anwendungsfälle) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf das DOM des einbettenden Kontexts zugreifen, und der einbettende Kontext kann auch nicht auf das DOM des `<fencedframe>` zugreifen.

Für weitere Informationen über das Kommunikationsmodell der fenced frames lesen Sie den [Leitfaden zur Kommunikation mit eingebetteten Frames](/de/docs/Web/API/Fenced_frame_API/Communication_with_embedded_frames).

### Anwendungsfälle

`<fencedframe>`s werden von anderen APIs verwendet, um verschiedene Arten von standortübergreifenden Inhalten einzubetten oder Daten zu sammeln und damit unterschiedliche Anwendungsfälle auf datenschutzbewahrende Weise zu erfüllen. Die meisten von ihnen haben sich zuvor auf Cookies von Drittanbietern oder andere datenschutzgefährdende Mechanismen verlassen.

- Die [Shared Storage API](https://privacysandbox.google.com/private-advertising/shared-storage) bietet Zugriff auf nicht partitionierte, standortübergreifende Daten in einer sicheren Umgebung, indem Ergebnisse in einem `<fencedframe>` berechnet und/oder angezeigt werden. Zum Beispiel:
  - Werbetreibende können die Reichweite einer Anzeige messen oder nachfolgende Anzeigen basierend darauf ausliefern, welche Nutzer bereits auf anderen Websites gesehen wurden.
  - Entwickler können A/B-Tests durchführen, indem sie Variationen einem Nutzer basierend auf einer Gruppe zeigen, der sie zugeordnet sind, oder basierend darauf, wie viele Nutzer jede Variation bereits gesehen haben.
  - Unternehmen können die Nutzererfahrung basierend darauf anpassen, was sie auf anderen Websites gesehen haben. Zum Beispiel, wenn sie bereits eine Mitgliedschaft erworben haben, möchte Sie ihnen vielleicht keine Mitgliedschaftsanzeigen mehr auf anderen Ihrer Dienste zeigen.
- Die [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) ermöglicht Entwicklern die Implementierung von interessengruppenbasierter Werbung, nämlich Remarketing und benutzerdefinierte Zielgruppennutzung. Sie kann mehrere Gebote für Werbeplatzierungen bewerten und die gewinnende Anzeige in einem `<fencedframe>` anzeigen.
- Die [Private Aggregation API](https://privacysandbox.google.com/private-advertising/private-aggregation) kann Daten aus `<fencedframe>`s sammeln (ausgehend vom gemeinsamen Speicher oder der Protected Audience API) und aggregierte Berichte erstellen.

## Wie funktionieren `<fencedframe>`s?

Wie oben erwähnt, kontrollieren Sie den Inhalt, der in einem {{htmlelement("fencedframe")}} eingebettet ist, nicht direkt über reguläre Skripte.

Um festzulegen, welche Inhalte in einem `<fencedframe>` angezeigt werden, generiert eine nutzende API (wie [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) oder [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann über JavaScript als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Eigenschaft des `<fencedframe>` festgelegt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` aus einer Anzeigenauktion der Protected Audience API, das dann verwendet wird, um die gewinnende Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // … auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

`resolveToConfig: true` muss in den `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn `resolveToConfig` auf `false` gesetzt ist, wird das resultierende {{jsxref("Promise")}} zu einem undurchsichtigen [URN](/de/docs/Web/URI#urns) (zum Beispiel `urn:uuid:c36973b5-e5d9-de59-e4c4-364f137b3c7a`) aufgelöst, das nur in einem `<iframe>` verwendet werden kann.

In beiden Fällen speichert der Browser eine URL, die den Zielort des einzubettenden Inhalts enthält – gemappt auf den undurchsichtigen URN oder die interne `url`-Eigenschaft des `FencedFrameConfig`. Der URL-Wert kann nicht durch JavaScript, das im einbettenden Kontext ausgeführt wird, gelesen werden.

> [!NOTE]
> Es wird Unterstützung für undurchsichtige URNs in `<iframe>`s bereitgestellt, um die Migration bestehender Implementierungen auf [Privacy-Sandbox](https://privacysandbox.google.com/)-APIs zu erleichtern. Diese Unterstützung ist als temporär gedacht und wird in der Zukunft entfernt, sobald die Akzeptanz steigt.

> **Hinweis:** `FencedFrameConfig` verfügt über eine [`setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext)-Methode, die verwendet wird, um Daten aus dem einbettenden Dokument an den gemeinsamen Speicher des `<fencedframe>` zu übergeben. Diese könnten zum Beispiel in einem [`Worklet`](/de/docs/Web/API/Worklet) über das `<fencedframe>` abgerufen und zur Erstellung eines Berichts verwendet werden. Siehe die [Shared Storage API](https://privacysandbox.google.com/private-advertising/shared-storage) für weitere Details.

### Zugriff auf fenced frame Funktionalität auf dem `Fence`-Objekt

Innerhalb von Dokumenten, die in `<fencedframe>`s eingebettet sind, hat JavaScript Zugriff auf eine [`Window.fence`](/de/docs/Web/API/Window/fence)-Eigenschaft, die eine [`Fence`](/de/docs/Web/API/Fence)-Instanz für dieses Dokument zurückgibt. Dieses Objekt enthält mehrere Funktionen, die speziell relevant für die Funktionalität der Fenced Frame API sind.
Zum Beispiel bietet [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) eine Möglichkeit, das Einreichen von Berichtsdaten über ein [Beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere spezifizierte URLs auszulösen, um Anzeigenansichten und Klicks zu melden.

### Berechtigungspolitik

Nur spezifische Funktionen, die für die Verwendung in `<fencedframe>`s entwickelt wurden, können über Berechtigungspolitiken, die auf ihnen festgelegt sind, aktiviert werden; andere politisch kontrollierte Funktionen sind in diesem Kontext nicht verfügbar. Siehe [Berechtigungspolitiken, die für fenced frames verfügbar sind](/de/docs/Web/HTML/Reference/Elements/fencedframe#permissions_policies_available_to_fenced_frames) für weitere Details.

### HTTP-Header

Ein {{httpheader("Sec-Fetch-Dest")}}-Header mit einem Wert von `fencedframe` wird für alle Anfragen gesetzt, die aus einem `<fencedframe>` heraus gemacht werden, einschließlich eingebetteter Kind-`<iframe>`s innerhalb eines `<fencedframe>`.

```http
Sec-Fetch-Dest: fencedframe
```

Der Server muss einen {{httpheader("Supports-Loading-Mode")}}-Antwortheader mit einem Wert von `fenced-frame` für jedes Dokument setzen, das in ein `<fencedframe>` oder ein `<iframe>`, das in ein `<fencedframe>` eingebettet ist, geladen werden soll.

```http
Supports-Loading-Mode: fenced-frame
```

Andere Effekte von fenced frames auf HTTP-Header sind wie folgt:

- [User-Agent-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) sind innerhalb von fenced frames nicht verfügbar, da sie sich auf [Berechtigungspolitik-](/de/docs/Web/HTTP/Guides/Permissions_Policy)Delegation stützen, was zur Datenweitergabe genutzt werden könnte.
- Strikte [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy)-Einstellungen werden auf neue Browsing-Kontexte durchgesetzt, die aus innerhalb von fenced frames geöffnet werden, sonst könnten sie genutzt werden, um Informationen an andere Ursprünge weiterzugeben. Jedes neue Fenster, das aus einem fenced frame heraus geöffnet wird, hat [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) und `Cross-Origin-Opener-Policy: same-origin` gesetzt, um sicherzustellen, dass [`Window.opener`](/de/docs/Web/API/Window/opener) `null` zurückgibt und platziert es in seiner eigenen Browsing-Kontext-Gruppe.
- [`Content-Security-Policy: fenced-frame-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/fenced-frame-src) wurde hinzugefügt, um gültige Quellen für verschachtelte Browsing-Kontexte, die in `<fencedframe>`-Elemente geladen werden, zu spezifizieren.
- [`Content-Security-Policy: sandbox`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox)-benutzerdefinierte Einstellungen können nicht von fenced frames geerbt werden, um Datenschutzprobleme zu mildern. Für ein fenced frame, das geladen werden soll, müssen Sie keine `sandbox`-CSP angeben (was die untenstehenden Werte impliziert) oder die folgenden Sandbox-Werte angeben:
  - `allow-same-origin`
  - `allow-forms`
  - `allow-scripts`
  - `allow-popups`
  - `allow-popups-to-escape-sandbox`
  - `allow-top-navigation-by-user-activation`

### `beforeunload`- und `unload`-Events

[`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) und [`unload`](/de/docs/Web/API/Window/unload_event) Events werden auf fenced frames nicht ausgelöst, da sie Informationen in Form eines Seitendeletionszeitstempels weitergeben können. Implementierungen streben danach, so viele potenzielle Lecks wie möglich zu eliminieren.

## Schnittstellen

- [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)
  - : Repräsentiert die Navigation eines {{htmlelement("fencedframe")}}, das heißt, welcher Inhalt darin angezeigt wird. Ein `FencedFrameConfig` wird aus einer Quelle wie der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) zurückgegeben und als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) festgelegt.
- [`Fence`](/de/docs/Web/API/Fence)
  - : Enthält mehrere Funktionen, die relevant für die Funktionalität von fenced frames sind. Steht nur Dokumenten zur Verfügung, die innerhalb eines `<fencedframe>`s eingebettet sind.
- [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement)
  - : Repräsentiert ein `<fencedframe>`-Element in JavaScript und bietet Eigenschaften zu dessen Konfiguration.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.deprecatedReplaceInURN()`](/de/docs/Web/API/Navigator/deprecatedReplaceInURN)
  - : Ersetzt angegebene Zeichenfolgen innerhalb der gemappten URL, die einem gegebenen opaken URN oder der internen `url`-Eigenschaft eines `FencedFrameConfig` entspricht.
- [`Window.fence`](/de/docs/Web/API/Window/fence)
  - : Gibt ein [`Fence`](/de/docs/Web/API/Fence)-Objektbeispiel für den aktuellen Dokumentkontext zurück. Ist nur für Dokumente verfügbar, die innerhalb eines `<fencedframe>`s eingebettet sind.

## Einschreibung und lokales Testen

Bestimmte API-Funktionen, die [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)s erstellen, wie [`Navigator.runAdAuction()`](/de/docs/Web/API/Navigator/runAdAuction) ([Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience)) und [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) ([Shared Storage API](/de/docs/Web/API/Shared_Storage_API)) sowie andere Funktionen wie [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent), erfordern, dass Sie Ihre Website in einen [Privacy-Sandbox-Einschreibungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) einschreiben. Wenn Sie dies nicht tun, werden die API-Aufrufe mit einer Konsolen-Meldung fehlschlagen.

> [!NOTE]
> In Chrome können Sie Ihren fenced frame-Code immer noch lokal ohne Einschreibung testen. Um lokales Testen zu ermöglichen, aktivieren Sie die folgende Chrome-Entwickler-Flag:
>
> `chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Die folgenden Demos verwenden alle `<fencedframe>`s:

- [Shared Storage API Demos](https://shared-storage-demo.web.app/) (die auch einige Beispiele für die Private Aggregation API enthalten)
- [Protected Audience API Demo](https://protected-audience-demo-advertiser.web.app/)

## Spezifikationen

{{Specifications}}

### Standardspositionen

Ein Browseranbieter {{Glossary("Web_standards#opposing_standards", "opponiert")}} dieser Spezifikation.
Bekannte Standardspositionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://github.com/mozilla/standards-positions/issues/781)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
