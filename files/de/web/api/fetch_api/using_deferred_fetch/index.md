---
title: Verwenden von Deferred Fetch
slug: Web/API/Fetch_API/Using_Deferred_Fetch
l10n:
  sourceCommit: 8c1bc8d99fc8301fbbe874f6dcf8d41a9f4fe5fb
---

{{DefaultAPISidebar("Fetch API")}}

Die **`fetchLater()`-API** bietet eine Schnittstelle, um ein verzögertes Abrufen anzufordern, das nach einem bestimmten Zeitraum oder beim Schließen der Seite oder beim Navigieren von der Seite weg gesendet werden kann.

## Überblick

Entwickler müssen oft Daten (oder Beacons) an den Server senden, insbesondere am Ende des Besuchs eines Benutzers auf einer Seite — zum Beispiel für Analysedienste. Es gibt mehrere Möglichkeiten, dies zu tun: von der Hinzufügung von 1-Pixel {{HTMLElement("img")}}-Elementen zur Seite, über [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), bis hin zur dedizierten [Beacon API](/de/docs/Web/API/Beacon_API) und der [Fetch API](/de/docs/Web/API/Fetch_API) selbst.

Das Problem ist, dass alle diese Methoden Zuverlässigkeitsprobleme für das End-of-Visit-Beaconing aufweisen. Während die Beacon API und die [`keepalive`](/de/docs/Web/API/Request/keepalive)-Eigenschaft der Fetch API Daten senden, auch wenn das Dokument zerstört ist (so weit es in dieser Situation möglich ist), löst dies nur einen Teil des Problems.

Der andere — schwierigere — Teil betrifft die Entscheidung, _wann_ die Daten gesendet werden sollen, da es keinen idealen Zeitpunkt im Lebenszyklus einer Seite gibt, um den JavaScript-Aufruf für das Senden des Beacons zu machen:

- Die [`unload`](/de/docs/Web/API/Window/unload_event)- und [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Ereignisse sind unzuverlässig und werden von mehreren großen Browsern komplett ignoriert.
- Die [`pagehide`](/de/docs/Web/API/Window/pagehide_event)- und [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignisse sind zuverlässiger, haben jedoch immer noch Probleme auf mobilen Plattformen.

Dies bedeutet, dass Entwickler, die Daten zuverlässig über ein Beacon senden möchten, dies häufiger tun müssen, als ideal ist. Beispielsweise könnten sie bei jeder Änderung ein Beacon senden, selbst wenn der endgültige Wert für die Seite noch nicht erreicht ist. Dies verursacht Kosten in Bezug auf die Netzwerknutzung, die Serververarbeitung und das Zusammenführen oder Verwerfen veralteter Beacons auf dem Server.

Alternativ können Entwickler sich entscheiden, ein gewisses Maß an fehlenden Daten zu akzeptieren — entweder durch:

- Beaconing nach einer festgelegten Stoppzeit und nicht das spätere Sammeln von Daten.
- Beaconing am Ende des Seitenlebenszyklus, aber Akzeptieren, dass dies manchmal nicht zuverlässig sein wird.

Die `fetchLater()`-API erweitert die [Fetch API](/de/docs/Web/API/Fetch_API), um das Einrichten von Fetch-Anfragen im Voraus zu ermöglichen. Diese verzögerten Abrufe können aktualisiert werden, bevor sie gesendet wurden, sodass die Nutzlast die neuesten zu beaconenden Daten widerspiegelt.

Der Browser sendet dann das Beacon, wenn der Tab geschlossen oder die Seite verlassen wird, oder nach einer festgelegten Zeit, wenn angegeben. Dies vermeidet das Senden mehrerer Beacons, gewährleistet jedoch immer noch ein zuverlässiges Beacon innerhalb vernünftiger Erwartungen (d.h. ausgenommen, wenn der Browserprozess unerwartet während eines Absturzes heruntergefahren wird).

Verzögerte Abrufe können auch mit einem [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen werden, wenn sie nicht mehr erforderlich sind, um weitere unnötige Kosten zu vermeiden.

## Quoten

Verzögerte Abrufe werden gebündelt und gesendet, sobald der Tab geschlossen wird; zu diesem Zeitpunkt gibt es keine Möglichkeit für den Benutzer, sie abzubrechen. Um zu vermeiden, dass Dokumente dieses Bandbreite verwenden, um unbegrenzte Datenmengen über das Netzwerk zu senden, wird das Gesamtkontingent für ein oberstes Dokument auf 640 KiB begrenzt.

Aufrufer von `fetchLater()` sollten vorsichtig sein und in fast allen Fällen `QuotaExceededError`-Fehler abfangen, insbesondere wenn sie Drittanbieter-JavaScript einbetten.

Da diese Obergrenze die Bandbreite für verzögerten Abruf zu einer knappen Ressource macht, die zwischen mehreren Reporting-Origins (zum Beispiel mehreren RUM-Bibliotheken) und Subframes aus mehreren Origins geteilt werden muss, bietet die Plattform eine vernünftige Standardaufteilung dieses Kontingents. Darüber hinaus bietet sie die {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} und {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} [Erlaubnisrichtlinien](/de/docs/Web/HTTP/Guides/Permissions_Policy), um es bei Bedarf anders zu teilen.

Das Gesamtkontingent für `fetchLater()` beträgt 640 KiB pro Dokument. Standardmäßig wird es in ein 512 KiB Top-Level-Kontingent und ein 128 KiB gemeinsames Kontingent unterteilt:

- Das 512 KiB Top-Level-Kontingent ist standardmäßig für alle `fetchLater()`-Anfragen, die vom Top-Level-Dokument und direkten Subframes mit dieser Origin gemacht werden.
- Das 128 KiB gemeinsame Kontingent ist standardmäßig für alle `fetchLater()`-Anfragen, die in Subframes mit Cross-Origin gemacht werden (zum Beispiel `<iframe>`, `<object>`, `<embed>` und `<frame>`-Elemente).

`fetchLater()`-Anfragen können an jede URL geschickt werden und sind nicht auf den gleichen Origin wie das Dokument oder das Subframe beschränkt, daher ist es wichtig, zwischen Anfragen zu unterscheiden, die im Top-Level-Dokumentinhalt (ob zu eigenen oder zu Drittanbieter-Origins) und solchen, die in Subframes gemacht werden, zu unterscheiden.

Zum Beispiel, wenn ein Top-Level-`a.com`-Dokument ein `<script>` enthält, das eine `fetchLater()`-Anfrage an `analytics.example.com` stellt, wäre diese Anfrage durch das Top-Level-512 KiB-Limit gebunden. Alternativ, wenn das Top-Level-Dokument ein `<iframe>` mit einer Quelle von `analytics.example.com` einbettet, das eine `fetchLater()`-Anfrage macht, wäre diese Anfrage durch das 128 KiB-Limit gebunden.

### Quotenlimits nach Reporting-Origin und Subframe

Nur 64 KiB des 512 KiB Top-Level-Kontingents können gleichzeitig für denselben Reporting-Origin verwendet werden (den Origin der Anfrage-URL). Dies verhindert, dass Drittanbieter-Bibliotheken opportunistisch Kontingent reservieren, bevor sie Daten zu senden haben.

Jedes Cross-Origin-Subframe erhält ein 8 KiB Kontingent aus dem geteilten 128 KiB Kontingent bei seiner Hinzufügung zum DOM (unabhängig davon, ob `fetchLater()` in diesem Subframe verwendet wird oder nicht). Das bedeutet, dass im Allgemeinen nur die ersten 16 Cross-Origin-Subframes, die zu einer Seite hinzugefügt werden, `fetchLater()` verwenden können, da sie das 128 KiB-Kontingent aufbrauchen.

### Erhöhen von Subframe-Kontingenten durch Teilen des Top-Level-Kontingents

Der Top-Level-Origin kann ausgewählten Cross-Origin-Subframes ein erhöhtes Kontingent von 64 KiB zuweisen, das aus dem größeren Top-Level-512 KiB-Limit entnommen wird. Dies geschieht durch Auflisten dieser Origins in der {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} Permissions Policy-Direktive. Dies wird zugewiesen, wenn das Subframe zum DOM hinzugefügt wird, wodurch weniger Kontingent für das Top-Level-Dokument und direkte gleiche Origin-Subframes bleibt. Mehrere gleich-Origin-Subdomänen können jeweils ein 64 KiB-Kontingent erhalten.

### Einschränken des gemeinsamen Kontingents

Der Top-Level-Origin kann auch das 128 KiB gemeinsame Kontingent auf benannte Cross-Origin-Subframes beschränken, indem er diese Origins in der {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} Permissions Policy-Direktive auflistet. Er kann auch das gesamte 128 KiB Standard-Subframe-Kontingent widerrufen und stattdessen das volle 640 KiB-Kontingent für sich selbst und alle benannten `deferred-fetch` Cross-Origins behalten, indem er die {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} Permissions Policy auf `()` setzt.

### Delegieren von Quoten an Subframes von Subframes

Standardmäßig erhalten Subframes von Subframes kein Kontingent und können daher `fetchLater()` nicht verwenden. Subframes, die das erhöhte 64 KiB-Kontingent erhalten haben, können das gesamte 64 KiB-Kontingent an weitere Subframes delegieren und ihnen die Nutzung von `fetchLater()` erlauben, indem sie ihre eigene `deferred-fetch` Permissions Policy setzen. Sie können nur ihr volles Kontingent an weitere Subframes delegieren, nicht Teile davon, und können keine neuen Kontingente spezifizieren. Subframes, die das minimale 8 KiB-Kontingent verwenden, können keine Quoten an Subframes delegieren. Um Kontingente delegiert zu bekommen, müssen Sub-Subframes sowohl in den Top-Level- als auch in den Subframe-`deferred-fetch`-{{httpheader('Permissions-Policy')}}-Direktiven enthalten sein.

### Wenn Quoten überschritten werden

Wenn Quoten überschritten werden, wird ein `QuotaExceededError` ausgelöst, wenn die [`fetchLater()`](/de/docs/Web/API/Window/fetchLater)-Methode aufgerufen wird, um die verzögerte Anfrage zu starten.

Permissions Policy-Prüfungen sind nicht von Quotenprüfungen unterscheidbar. Der Aufruf von `fetchLater()` wird sowohl dann einen `QuotaExceededError` auslösen, wenn das Kontingent tatsächlich überschritten wurde, als auch wenn das Kontingent über eine Permissions Policy für diesen Origin eingeschränkt wurde.

Aufrufer von `fetchLater()` sollten vorsichtig sein und in fast allen Fällen `QuotaExceededError`-Fehler abfangen, insbesondere wenn sie Drittanbieter-JavaScript einbetten.

## Kontingentbeispiele

### Aufbrauchen des minimalen Kontingents

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. Ein `<iframe src="https://b.com/page">` erhält 64 KiB, wenn es dem Top-Level-Dokument hinzugefügt wird, aus dem Top-Level-512 KiB-Limit.
2. Ein `<iframe src="https://c.com/page">` ist nicht aufgelistet und erhält daher 8 KiB, wenn es dem Top-Level-Dokument hinzugefügt wird, aus dem 128 KiB geteilten Limit.
3. Weitere 15 Cross-Origin-iFrames würden jeweils 8 KiB erhalten, wenn sie dem Top-Level-Dokument hinzugefügt werden (ähnlich wie `c.com`).
4. Das nächste Cross-Origin-iFrame würde kein Kontingent erhalten.
5. Wenn eines der Cross-Origin-iFrames entfernt wird, werden seine verzögerten Abrufe gesendet.
6. Das nächste Cross-Origin-iFrame _würde_ ein 8 KiB-Kontingent erhalten, da wieder Kontingent verfügbar ist.

### Widerrufen des eingeschränkten minimalen Kontingents für benannte Ursprünge

```http
Permissions-Policy: deferred-fetch-minimal=("https://b.com")
```

1. `<iframe src="https://b.com/page">` erhält 8 KiB, wenn es dem Top-Level-Dokument hinzugefügt wird.
2. `<iframe src="https://c.com/page">` erhält kein Kontingent, wenn es dem Top-Level-Dokument hinzugefügt wird.
3. Das Top-Level-Dokument und seine gleich-Ursprungsnachkommen können bis zu 512 KiB verwenden.

### Gesamten Widerruf des minimalen Kontingents mit Ausnahmen auf oberster Ebene

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. `<iframe src="https://b.com/page">` erhält 64 KiB, wenn es dem Top-Level-Dokument hinzugefügt wird.
2. `<iframe src="https://c.com/page">` erhält kein Kontingent, wenn es dem Top-Level-Dokument hinzugefügt wird.
3. Das Top-Level-Dokument und seine gleich-Ursprungsnachkommen können bis zu das volle 640 KiB verwenden, aber das wird auf 574 KiB reduziert, wenn ein `b.com` Subframe erstellt wird (oder noch weniger, wenn mehrere `b.com` Subframes erstellt werden, die jeweils ein 64 KiB-Kontingent zugewiesen bekommen).

### Gesamten Widerruf des minimalen Kontingents ohne Ausnahmen

```http
Permissions-Policy: deferred-fetch-minimal=()
```

1. Das Top-Level-Dokument und seine gleich-Ursprungsnachkommen können das volle 640 KiB verwenden.
2. Subframes erhalten kein Kontingent und können `fetchLater()` nicht verwenden.

### Gleich-Ursprung-Subframes teilen Kontingent mit dem Top-Level und können an Subframes delegieren

Angenommen ein Top-Level-Dokument auf `a.com`, das ein Subframe von `a.com` einbettet, das ein Subframe von `b.com` einbettet, und keine expliziten Permission Policies.

1. Das Top-Level-Dokument von `a.com` hat das Standard-512 KiB-Kontingent.
2. `<iframe src="https://a.com/embed">` teilt das 512 KiB-Kontingent, wenn es dem Top-Level-Dokument hinzugefügt wird.
3. `<iframe src="https://b.com/embed">` erhält ein 8 KiB-Kontingent, wenn es dem Top-Level-Dokument hinzugefügt wird.

### Gleich-Ursprung-Subframes können nicht das Kontingent mit dem Top-Level teilen, wenn sie durch ein Cross-Origin-Subframe getrennt sind

Angenommen ein Top-Level-Dokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das ein Subframe von `<iframe src="https://a.com/embed">` einbettet, und keine expliziten Permission Policies.

1. Das Top-Level-Dokument von `a.com` hat das Standard-512 KiB-Kontingent.
2. `<iframe src="https://b.com/">` teilt das 8 KiB-Kontingent.
3. `<iframe src="https://a.com/embed">` erhält kein Kontingent; auch wenn dies gleich-Ursprung mit dem Top-Origin ist, ist es durch ein Cross-Origin getrennt.

### Sekundäre Subframes von Subframes erhalten standardmäßig kein Kontingent

Angenommen ein Top-Level-Dokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das ein `<iframe src="https://c.com/">` einbettet, und keine expliziten Permission Policies.

1. Der Top-Level-Rahmen von `a.com` hat das Standard-512 KiB-Kontingent.
2. `<iframe src="https://b.com/">` erhält 8 KiB vom Standard-geteilten Kontingent.
3. `<iframe src="https://c.com/">` erhält kein Kontingent.

### Erteilen des vollen Kontingents an ein weiteres Subframe

Angenommen ein Top-Level-Dokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das ein `<iframe src="https://c.com/">` einbettet.

Angenommen, `a.com` hat die folgende Erlaubnispolitik:

```http
Permissions-Policy: deferred-fetch=("https://c.com" "https://c.com")
```

Und, angenommen, `b.com` hat die folgende Erlaubnispolitik:

```http
Permissions-Policy: deferred-fetch=("https://c.com")
```

1. Der Top-Level-Rahmen von `a.com` hat das Standard-512 KiB-Kontingent.
2. `<iframe src="https://b.com/">` erhält 64 KiB vom Standardkontingent.
3. `<iframe src="https://b.com/">` delegiert sein volles Kontingent von 8 KiB an `c.com`. `b.com` kann `fetchLater()` nicht verwenden.
4. `<iframe src="https://c.com/">` erhält 8 KiB Kontingent.

### Weiterleitungen übertragen kein Kontingent

Angenommen ein Top-Level-Dokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das zu `c.com` weiterleitet, und keine expliziten Top-Level-Erlaubnispolitiken.

1. Der Top-Level-Rahmen von `a.com` hat das Standard-512 KiB-Kontingent.
2. `<iframe src="https://b.com/">` erhält 8 KiB vom Standard-geteilten Kontingent.
3. Die 8 KiB werden nicht an `c.com` transferiert, wenn `<iframe src="https://b.com/">` dorthin weiterleitet, aber die 8 KiB werden nicht freigegeben.

### Sandboxed gleich-Ursprung-iFrames sind effektiv separate Ursprünge

Als Beispiel, wenn das folgende `<iframe>` auf `https://www.example.com` eingebettet ist:

```html
<iframe src="https://www.example.com/iframe" sandbox="allow-scripts"></iframe>
```

Dies würde nicht als "gleich-Ursprung" betrachtet werden, obwohl es auf dem gleichen Ursprung wie das Top-Level-Dokument gehostet wird, da das `<iframe>` in einer Sandbox-Umgebung ist. Daher sollte es standardmäßig ein 8 KiB-Kontingent aus dem insgesamt geteilten 128 KiB-Kontingent zugewiesen bekommen.

### Deaktivieren von `fetchLater()` aus iFrames

Sie können das `<iframe>`-[`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow)-Attribut verwenden, um zu verhindern, dass `fetchLater()`-Kontingent dem `<iframe>` zugewiesen wird:

```html
<iframe
  src="https://www.example.com/iframe"
  allow="deferred-fetch;deferred-fetch-minimal;"></iframe>
```

Der `allow="deferred-fetch"`-Direktive ist erforderlich, um zu verhindern, dass gleich-Ursprung-iFrames das 512 KiB-Kontingent verwenden, und der `allow="deferred-fetch-minimal"`-Direktive ist erforderlich, um zu verhindern, dass Cross-Origin-iFrames das 128 KiB-Kontingent verwenden. Das Einbeziehen beider Direktiven wird verhindern, dass beide Kontingente verwendet werden, unabhängig vom `src`-Wert.

### Beispiele, die einen `QuotaExceededError` werfen

```js
// Maximum of 64KiB per origin
const url = "<72KiB of characters>";
fetchLater(url);

// Maximum of 64KiB per origin including headers
fetchLater("https://origin.example.com", { headers: headersExceeding64KiB });

// Maximum of 64KiB per origin including body and headers
fetchLater("<32KiB of characters>", { headers: headersExceeding32KiB });

// Maximum of 64KiB per origin including body
fetchLater("https://origin.example.com", {
  method: "POST",
  body: bodyExceeding64KiB,
});

// Maximum of 64KiB per origin including body and automatically added headers
fetchLater("<62KiB of characters>" /* with a 3kb referrer */);
```

### Beispiele, die schließlich einen `QuotaExceededError` werfen

In der folgenden Abfolge, die im Top-Level-Dokument enthalten ist, würden die ersten beiden Anfragen erfolgreich sein, aber die dritte würde einen Fehler werfen. Das liegt daran, dass, obwohl das Gesamtkontingent von 640 KiB nicht überschritten wurde, die dritte Anfrage das Kontingent für den Berichterstattungsursprung für `https://a.example.com` überschreiten würde und einen Fehler auslösen würde.

```js
fetchLater("https://a.example.com", { method: "POST", body: a40KiBBody });
fetchLater("https://b.example.com", { method: "POST", body: a40KiBBody });
fetchLater("https://a.example.com", { method: "POST", body: a40KiBBody });
```

### Weiterleitungen von Subframes zurück zum Top-Level-Origin ermöglichen die Nutzung des Top-Level-Kontingents

Angenommen ein Top-Level-Dokument bei `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das zu `a.com` weiterleitet, und keine expliziten Top-Level-Erlaubnispolitiken:

1. Der Top-Level-Rahmen von `a.com` hat das Standard-512 KiB-Kontingent.
2. `<iframe src="https://b.com/">` erhält 8 KiB vom Standard-geteilten Kontingent von 128 KiB.
3. Die 8 KiB werden nicht an `a.com` transferiert, wenn `<iframe src="https://b.com/">` dorthin weiterleitet, aber es kann das volle Top-Level-Kontingent wieder teilen, und das zuvor zugewiesene 8 KiB-Kontingent wird freigegeben.
