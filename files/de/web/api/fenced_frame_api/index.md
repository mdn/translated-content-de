---
title: Fenced Frame API
slug: Web/API/Fenced_frame_API
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{DefaultAPISidebar("Fenced Frame API")}}

> [!WARNING]
> Dieses Feature wird derzeit von einem Browser-Anbieter abgelehnt.
> Siehe den Abschnitt [Standards-Positionen](#standards-positionen) unten für Details.

Die **Fenced Frame API** bietet Funktionalität zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elementen eingebettet sind.

## Konzepte und Verwendung

Eine der Hauptquellen von [Privatheits-](/de/docs/Web/Privacy) und [Sicherheitsproblemen](/de/docs/Web/Security) im Web sind Inhalte, die in {{htmlelement("iframe")}}-Elementen eingebettet sind. Historisch gesehen wurden `<iframe>`s verwendet, um Drittanbieter-Cookies zu setzen, die zur Informationsweitergabe und zum Tracking von Nutzern über verschiedene Websites hinweg genutzt werden können. Zusätzlich kann eingebetteter Inhalt in einem `<iframe>` mit dem einbettenden Dokument kommunizieren (zum Beispiel mithilfe von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)).

Das einbettende Dokument kann ebenfalls Skripting verwenden, um verschiedene Arten von Informationen aus dem `<iframe>` zu lesen — zum Beispiel kann man bedeutende Tracking-/Fingerabdruck-Daten durch das Lesen der eingebetteten URL aus der `src`-Eigenschaft erhalten, insbesondere wenn diese [URL-Parameter](/de/docs/Web/URI/Reference/Query) enthält. Das `<iframe>` kann zudem auf das DOM des einbettenden Kontextes zugreifen und umgekehrt.

Die meisten modernen Browser arbeiten an Mechanismen zur Partitionierung von Speicher, damit Cookie-Daten nicht mehr für Trackingzwecke genutzt werden können (siehe beispielsweise [Cookies mit unabhängigen partitionierten Zuständen (CHIPS)](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies) oder [Firefox State Partitioning](/de/docs/Web/Privacy/Guides/State_Partitioning)).

`<fencedframe>`-Elemente zielen darauf ab, ein weiteres Stück dieses Puzzles zu lösen — sie sind in Form und Funktion `<iframe>`s sehr ähnlich, außer dass:

- Kommunikation nicht zwischen dem `<fencedframe>`-Inhalt und seiner einbettenden Website geteilt werden kann.
- Ein `<fencedframe>` kann auf Cross-Site-Daten zugreifen, aber nur in einem sehr spezifischen, kontrollierten Umfang, der die Privatsphäre des Nutzers wahrt.
- Ein `<fencedframe>` kann nicht frei manipuliert oder über reguläre Skripte zugegriffen werden (zum Beispiel das Lesen oder Setzen der Quell-URL). `<fencedframe>`-Inhalte können nur über [spezifische APIs](#anwendungsfälle) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf das DOM des einbettenden Kontextes zugreifen, noch kann der einbettende Kontext auf das DOM des `<fencedframe>` zugreifen.

Für weitere Informationen über das Kommunikationsmodell von fenced frames lesen Sie den [Leitfaden zur Kommunikation mit eingebetteten Frames](/de/docs/Web/API/Fenced_frame_API/Communication_with_embedded_frames).

### Anwendungsfälle

`<fencedframe>`s werden von anderen APIs verwendet, um verschiedene Arten von Cross-Site-Inhalten einzubetten oder Daten zu sammeln und damit unterschiedliche Anwendungsfälle auf eine privatsphärenfreundliche Weise zu erfüllen. Die meisten dieser Anwendungsfälle basierten zuvor auf Drittanbieter-Cookies oder anderen Mechanismen, die für die Privatsphäre schädlich waren.

- Die [Shared Storage API](https://privacysandbox.google.com/private-advertising/shared-storage) bietet Zugriff auf unpartitionierte Cross-Site-Daten in einer sicheren Umgebung und berechnet bzw. zeigt Ergebnisse in einem `<fencedframe>` an. Zum Beispiel:
  - Werbetreibende können die Reichweite einer Anzeige messen oder nachfolgende Anzeigen auf Basis der bereits auf anderen Websites gesehenen Anzeigen schalten.
  - Entwickler können A/B-Tests durchführen, indem sie einem Nutzer basierend auf einer zugewiesenen Gruppe oder der Anzahl der bereits gesehenen Varianten unterschiedliche Varianten zeigen.
  - Unternehmen können die Nutzererfahrung basierend auf dem, was der Nutzer bereits auf anderen Seiten gesehen hat, anpassen. Zum Beispiel, wenn der Nutzer bereits eine Mitgliedschaft gekauft hat, möchte man ihm möglicherweise keine Mitgliedschafts-Werbeanzeigen auf eigenen anderen Eigenschaften zeigen.
- Die [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) ermöglicht Entwicklern die Implementierung von interessenbasierten Werbegeschäften, nämlich Remarketing und benutzerdefinierte Zielgruppenanwendungen. Sie kann mehrere Gebote für Werbeflächen auswerten und die gewonnene Anzeige in einem `<fencedframe>` anzeigen.
- Die [Private Aggregation API](https://privacysandbox.google.com/private-advertising/private-aggregation) kann Daten von `<fencedframe>`s (stammend aus dem gemeinsamen Speichermedium oder der Protected Audience API) sammeln und zusammengefasste Berichte erstellen.

## Wie funktionieren `<fencedframe>`s?

Wie oben erwähnt, kontrollieren Sie den Inhalt, der in einem {{htmlelement("fencedframe")}} eingebettet ist, nicht direkt über reguläre Skripte.

Um festzulegen, welche Inhalte in einem `<fencedframe>` angezeigt werden, generiert eine verwendende API (wie [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) oder [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann mittels JavaScript als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält eine `FencedFrameConfig` von einer Anzeigenauktion der Protected Audience API, die dann verwendet wird, um die gewonnene Anzeige in einem `<fencedframe>` darzustellen:

```js
const frameConfig = await navigator.runAdAuction({
  // … auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

`resolveToConfig: true` muss in den `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn `resolveToConfig` auf `false` gesetzt ist, wird die resultierende {{jsxref("Promise")}} zu einem undurchsichtigen [URN](/de/docs/Web/URI/Reference/Schemes/urn) (zum Beispiel `urn:uuid:c36973b5-e5d9-de59-e4c4-364f137b3c7a`) aufgelöst, das nur in einem `<iframe>` verwendet werden kann.

So oder so speichert der Browser eine URL, die den Zielort des einzubettenden Inhalts enthält — gemappt auf den undurchsichtigen URN oder die `url`-Eigenschaft von `FencedFrameConfig`. Der URL-Wert kann von JavaScript im einbettenden Kontext nicht gelesen werden.

> [!NOTE]
> Unterstützung für undurchsichtige URNs in `<iframe>`s wird bereitgestellt, um den Übergang bestehender Implementierungen zu [Privacy Sandbox](https://privacysandbox.google.com/)-APIs zu erleichtern. Diese Unterstützung ist als vorübergehend geplant und wird in Zukunft entfernt, sobald die Akzeptanz wächst.

> [!NOTE]
> `FencedFrameConfig` verfügt über eine [`setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext)-Methode, die verwendet wird, um Daten aus dem einbettenden Dokument an den freigegebenen Speicher des `<fencedframe>` zu übermitteln. Diese könnten beispielsweise über einen [`Worklet`](/de/docs/Web/API/Worklet) im `<fencedframe>` abgerufen und zur Erstellung eines Berichts genutzt werden. Weitere Einzelheiten finden Sie in der [Shared Storage API](https://privacysandbox.google.com/private-advertising/shared-storage).

### Zugriff auf die Fenced Frame-Funktionalität im `Fence`-Objekt

In Dokumenten, die in `<fencedframe>`s eingebettet sind, hat JavaScript Zugriff auf eine [`Window.fence`](/de/docs/Web/API/Window/fence)-Eigenschaft, die eine [`Fence`](/de/docs/Web/API/Fence)-Instanz für dieses Dokument zurückgibt. Dieses Objekt enthält mehrere Funktionen, die speziell für die Funktionalität der Fenced Frame API relevant sind.
Zum Beispiel bietet [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) eine Möglichkeit, die Übermittlung von Berichtsdaten über ein [beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere spezifizierte URLs auszulösen, um Anzeigendurchsichten und Klicks zu melden.

### Berechtigungsrichtlinien

Nur spezifische Funktionen, die für die Nutzung in `<fencedframe>`s konzipiert sind, können über Berechtigungsrichtlinien aktiviert werden, die auf ihnen gesetzt werden; andere von Richtlinien gesteuerten Funktionen sind in diesem Kontext nicht verfügbar. Siehe [Berechtigungsrichtlinien, die für Fenced Frames verfügbar sind](/de/docs/Web/HTML/Reference/Elements/fencedframe#permissions_policies_available_to_fenced_frames) für weitere Einzelheiten.

### HTTP-Header

Ein {{httpheader("Sec-Fetch-Dest")}}-Header mit einem Wert von `fencedframe` wird für alle Anforderungen gesetzt, die von innerhalb eines `<fencedframe>` gemacht werden, einschließlich untergeordneter `<iframe>`s, die innerhalb eines `<fencedframe>` eingebettet sind.

```http
Sec-Fetch-Dest: fencedframe
```

Der Server muss einen {{httpheader("Supports-Loading-Mode")}}-Antwortheader mit dem Wert `fenced-frame` setzen, für jedes Dokument, das in ein `<fencedframe>` oder in ein innerhalb eines `<fencedframe>` eingebettetes `<iframe>` geladen werden soll.

```http
Supports-Loading-Mode: fenced-frame
```

Andere Auswirkungen von Fenced Frames auf HTTP-Header sind wie folgt:

- [Client-Hinweise vom Benutzer-Agent](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) sind innerhalb von Fenced Frames nicht verfügbar, da sie auf [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Delegierungen beruhen, die zur Datenweitergabe genutzt werden könnten.
- Strenge [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy)-Einstellungen werden auf neue Browsing-Kontexte angewendet, die von innerhalb von Fenced Frames geöffnet werden, da sie ansonsten zur Informationsweitergabe an andere Ursprünge genutzt werden könnten. Jedes neue Fenster, das von innerhalb eines Fenced Frame geöffnet wird, hat [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) und `Cross-Origin-Opener-Policy: same-origin` gesetzt, um sicherzustellen, dass [`Window.opener`](/de/docs/Web/API/Window/opener) `null` zurückgibt und es in seiner eigenen Browsing-Kontextgruppe platziert wird.
- [`Content-Security-Policy: fenced-frame-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/fenced-frame-src) wurde hinzugefügt, um gültige Quellen für geschachtelte Browsing-Kontexte anzugeben, die in `<fencedframe>`-Elementen geladen werden.
- [`Content-Security-Policy: sandbox`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) benutzerdefinierte Einstellungen können von Fenced Frames nicht geerbt werden, um Privatsphärenprobleme zu mindern. Damit ein Fenced Frame lädt, dürfen Sie keine `sandbox`-CSP angeben (was die unten stehenden Werte impliziert) oder die folgenden Sandbox-Werte angeben:
  - `allow-same-origin`
  - `allow-forms`
  - `allow-scripts`
  - `allow-popups`
  - `allow-popups-to-escape-sandbox`
  - `allow-top-navigation-by-user-activation`

### `beforeunload` und `unload`-Ereignisse

[`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)- und [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignisse werden auf Fenced Frames nicht ausgelöst, da sie Informationen in Form eines Seitenlöschungszeitstempels weitergeben können. Implementierungen zielen darauf ab, so viele potenzielle Lecks wie möglich zu eliminieren.

## Schnittstellen

- [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)
  - : Repräsentiert die Navigation eines {{htmlelement("fencedframe")}}, d.h. den Inhalt, der darin angezeigt wird. Ein `FencedFrameConfig` wird von einer Quelle wie der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) zurückgegeben und als Wert von [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) festgelegt.
- [`Fence`](/de/docs/Web/API/Fence)
  - : Enthält mehrere Funktionen, die für die Funktionalität von Fenced Frames relevant sind. Verfügbar nur für Dokumente, die innerhalb eines `<fencedframe>` eingebettet sind.
- [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement)
  - : Repräsentiert ein `<fencedframe>`-Element in JavaScript und bietet Eigenschaften zu dessen Konfiguration.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.deprecatedReplaceInURN()`](/de/docs/Web/API/Navigator/deprecatedReplaceInURN)
  - : Ersetzt spezifische Zeichenfolgen innerhalb der gemappten URL, die einem gegebenen undurchsichtigen URN oder der internen `url`-Eigenschaft von `FencedFrameConfig` entspricht.
- [`Window.fence`](/de/docs/Web/API/Window/fence)
  - : Gibt eine [`Fence`](/de/docs/Web/API/Fence)-Objektinstanz für den aktuellen Dokumentkontext zurück. Nur verfügbar für Dokumente, die innerhalb eines `<fencedframe>` eingebettet sind.

## Einschreibung und lokales Testen

Bestimmte API-Funktionen, die [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)s erstellen, wie [`Navigator.runAdAuction()`](/de/docs/Web/API/Navigator/runAdAuction) ([Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience)) und [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) ([Shared Storage API](/de/docs/Web/API/Shared_Storage_API)), sowie andere Funktionen wie [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent), erfordern, dass Sie Ihre Website in einem [Privatsphären-Sandbox-Einschreibungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) registrieren. Wenn Sie dies nicht tun, schlagen die API-Aufrufe mit einer Konsolenwarnung fehl.

> [!NOTE]
> In Chrome können Sie Ihren Fenced Frame-Code dennoch lokal testen, ohne sich einzuschreiben. Um lokales Testen zu ermöglichen, aktivieren Sie das folgende Chrome-Entwickler-Flag:
>
> `chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Die folgenden Demos nutzen alle `<fencedframe>`s:

- [Shared Storage API-Demos](https://shared-storage-demo.web.app/) (die auch einige Beispiele für die Private Aggregation API enthalten)
- [Protected Audience API-Demo](https://protected-audience-demo-advertiser.web.app/)

## Spezifikationen

{{Specifications}}

### Standards-Positionen

Ein Browser-Anbieter {{Glossary("Web_standards#opposing_standards", "lehnt")}} diese Spezifikation ab.
Bekannte Standards-Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://github.com/mozilla/standards-positions/issues/781)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced Frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
