---
title: fetchLater() Kontingente
slug: Web/API/fetchLater_API/fetchLater_quotas
l10n:
  sourceCommit: 6554598011aad3c338b589ffb2dcec37ae6595c1
---

{{DefaultAPISidebar("fetchLater API")}}{{SeeCompatTable}}

Zurückgestellte [`fetchLater()` API](/de/docs/Web/API/fetchLater_API) Anforderungen werden gesammelt und gesendet, sobald der Tab geschlossen wird. An diesem Punkt gibt es keine Möglichkeit für den Benutzer, sie abzubrechen. Um Situationen zu vermeiden, in denen Dokumente diese Bandbreite missbrauchen, um unbegrenzte Datenmengen über das Netzwerk zu senden, setzt die API Kontingente dafür, wie viele Daten später gesendet werden können.

Diese Kontingente können über die {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} und {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) Direktiven verwaltet werden.

## Überblick

Das Gesamtkontingent für `fetchLater()` beträgt 640KiB pro Dokument. Standardmäßig ist dieses aufgeteilt in ein 512KiB-Kontingent für die oberste Ebene und ein 128KiB-geteiltes Kontingent:

- Das 512KiB-Kontingent für die oberste Ebene ist standardmäßig für alle `fetchLater()` Anfragen, die vom Hauptdokument und direkten Subframes mit diesem Ursprung gemacht werden.
- Das 128KiB-geteilte Kontingent ist standardmäßig für alle `fetchLater()` Anfragen, die in cross-origin Subframes gemacht werden (z.B. `<iframe>`, `<object>`, `<embed>`, und `<frame>` Elemente).

`fetchLater()` Anfragen können zu jeder URL gemacht werden und sind nicht auf den gleichen Ursprung wie das Dokument oder das Subframe beschränkt. Daher ist es wichtig, zwischen Anfragen zu unterscheiden, die im Inhalt des Hauptdokuments gemacht werden (sei es zu Erst- oder Drittanbieter-Ursprüngen) und jenen, die in Subframes gestellt werden.

Zum Beispiel: Wenn ein oberstes Dokument `a.com` ein `<script>` enthält, das eine `fetchLater()`-Anfrage an `analytics.example.com` stellt, fällt diese Anfrage unter das 512KiB-Limit für die oberste Ebene. Alternativ, wenn das Hauptdokument ein `<iframe>` mit der Quelle `analytics.example.com` einbettet, das eine `fetchLater()`-Anfrage stellt, fällt diese Anfrage unter das 128KiB-Limit.

## Kontingentgrenzen nach Berichterstellungsursprung und Subframe

Nur 64KiB des 512KiB-Kontingents für die oberste Ebene können gleichzeitig für den gleichen Berichterstellungsursprung (den Ursprung der Anforderungs-URL) genutzt werden. Dies verhindert, dass Drittanbieter-Bibliotheken vorsorglich Kontingent reservieren, bevor sie Daten zu senden haben.

Jedes cross-origin Subframe erhält standardmäßig ein 8KiB-Kontingent aus dem 128KiB-geteilten Kontingent, das zugewiesen wird, wenn das Subframe dem DOM hinzugefügt wird (ob `fetchLater()` in diesem Subframe verwendet wird oder nicht). Das bedeutet, dass im Allgemeinen nur die ersten 16 cross-origin Subframes, die zu einer Seite hinzugefügt werden, `fetchLater()` verwenden können, da sie das 128KiB-Kontingent verbrauchen.

## Erhöhung der Subframe-Kontingente durch Teilen des Kontingents der obersten Ebene

Der Ursprung der obersten Ebene kann ausgewählten cross-origin Subframes ein erhöhtes Kontingent von 64KiB zuweisen, das aus dem größeren 512KiB-Limit der obersten Ebene stammt. Dies geschieht, indem diese Ursprünge in der {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} Permissions Policy Direktive aufgeführt werden. Dies wird zugewiesen, wenn das Subframe dem DOM hinzugefügt wird, wodurch weniger Kontingent für das Hauptdokument und direkte Subframes mit dem gleichen Ursprung verbleibt. Mehrere Subdomains mit dem gleichen Ursprung können jeweils ein 64KiB-Kontingent erhalten.

## Einschränkung des geteilten Kontingents

Der Ursprung der obersten Ebene kann auch das 128KiB-geteilte Kontingent auf benannte cross-origin Subframes beschränken, indem er diese Ursprünge in der {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} Permissions Policy aufführt. Er kann auch das gesamte 128KiB-Standard-Subframe-Kontingent widerrufen und stattdessen das volle 640KiB-Kontingent für sich und alle benannten `deferred-fetch` Cross-Origens behalten, indem er die {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} Permissions Policy auf `()` setzt.

## Quoten an Subframes von Subframes delegieren

Standardmäßig wird Subframes von Subframes kein Kontingent zugewiesen, und sie können daher `fetchLater()` nicht verwenden. Subframes, denen das erhöhte 64KiB-Kontingent zugewiesen wurde, können ihr volles 64KiB-Kontingent an weitere Subframes delegieren und ihnen erlauben, `fetchLater()` zu verwenden, indem sie ihre eigene `deferred-fetch` Permissions Policy setzen. Sie können ihr volles Kontingent nur an weitere Subframes delegieren, nicht Teile davon, und sie können keine neuen Kontingente festlegen. Subframes, die das minimale 8KiB-Kontingent nutzen, können keine Kontingente an Subframes delegieren. Um Kontingente zu erhalten, müssen Sub-Subframes sowohl in den `deferred-fetch` {{httpheader('Permissions-Policy')}} Direktiven der obersten Ebene als auch in jenen des Subframes enthalten sein.

## Überschreitung der Kontingente

Wenn Kontingente überschritten werden, wird ein `QuotaExceededError` ausgelöst, wenn die Methode [`fetchLater()`](/de/docs/Web/API/Window/fetchLater) aufgerufen wird, um die zurückgestellte Anfrage zu initiieren.

Permissions Policy Prüfungen sind von Kontingentprüfungen nicht unterscheidbar. Der Aufruf von `fetchLater()` wird einen `QuotaExceededError` sowohl auslösen, wenn das Kontingent tatsächlich überschritten wurde als auch wenn das Kontingent für diesen Ursprung durch eine Permissions Policy eingeschränkt wurde.

Aufrufer von `fetchLater()` sollten defensiv sein und `QuotaExceededError` Fehler in fast allen Fällen abfangen, besonders wenn sie Drittanbieter-JavaScript einbetten.

## Beispiele

### Verwendung des minimalen Kontingents

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. Ein `<iframe src="https://b.com/page">` erhält 64KiB, sobald es dem Hauptdokument hinzugefügt wird, aus dem 512KiB-Limit der obersten Ebene.
2. Ein `<iframe src="https://c.com/page">` ist nicht aufgeführt und erhält daher 8KiB, sobald es dem Hauptdokument aus dem 128KiB-geteilten Limit hinzugefügt wird.
3. 15 weitere cross-origin iframes würden jeweils 8KiB erhalten, wenn sie dem Hauptdokument hinzugefügt werden (ähnlich `c.com`).
4. Das nächste cross-origin iframe würde kein Kontingent erhalten.
5. Wenn eines der cross-origin iframes entfernt wird, werden seine zurückgestellten Fetches gesendet.
6. Das nächste cross-origin iframe _würde_ ein 8KiB-Kontingent erhalten, da wieder Kontingent verfügbar ist.

### Widerruf der Einschränkung des minimalen Kontingents auf benannte Ursprünge

```http
Permissions-Policy: deferred-fetch-minimal=("https://b.com")
```

1. `<iframe src="https://b.com/page">` erhält 8KiB, sobald es dem Hauptdokument hinzugefügt wird.
2. `<iframe src="https://c.com/page">` erhält kein Kontingent, sobald es dem Hauptdokument hinzugefügt wird.
3. Das Hauptdokument und seine Nachkommen mit gleichem Ursprung können bis zu 512KiB nutzen.

### Widerruf des minimalen Kontingents insgesamt mit Ausnahmen für die oberste Ebene

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. `<iframe src="https://b.com/page">` erhält 64KiB, sobald es dem Hauptdokument hinzugefügt wird.
2. `<iframe src="https://c.com/page">` erhält kein Kontingent, sobald es dem Hauptdokument hinzugefügt wird.
3. Das Hauptdokument und seine Nachkommen mit gleichem Ursprung können bis zu 640KiB nutzen, aber dies wird auf 574KiB reduziert, wenn ein `b.com` Subframe erstellt wird (oder sogar weniger, wenn mehrere `b.com` Subframes erstellt werden, von denen jedes ein 64KiB-Kontingent erhält).

### Widerruf des minimalen Kontingents insgesamt ohne Ausnahmen

```http
Permissions-Policy: deferred-fetch-minimal=()
```

1. Das Hauptdokument und seine Nachkommen mit gleichem Ursprung können das volle 640KiB nutzen.
2. Subframes wird kein Kontingent zugewiesen, und sie können `fetchLater()` nicht verwenden.

### Subframes mit gleichem Ursprung teilen das Kontingent mit der obersten Ebene und können an Subframes delegieren

Angenommen: Ein Hauptdokument auf `a.com`, das ein Subframe von `a.com` einbettet, welches ein Subframe von `b.com` einbettet, und keine expliziten Permissions Policies.

1. Das Hauptdokument von `a.com` hat das Standardkontingent von 512KiB.
2. `<iframe src="https://a.com/embed">` teilt das Kontingent von 512KiB, sobald es dem Hauptdokument hinzugefügt wird.
3. `<iframe src="https://b.com/embed">` erhält ein 8KiB-Kontingent, sobald es dem Hauptdokument hinzugefügt wird.

### Subframes mit gleichem Ursprung können das Kontingent nicht mit der obersten Ebene teilen, wenn sie durch ein cross-origin Subframe getrennt sind

Angenommen: Ein Hauptdokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, welches ein Subframe von `<iframe src="https://a.com/embed">` einbettet, und keine expliziten Permissions Policies.

1. Das Hauptdokument von `a.com` hat das Standardkontingent von 512KiB.
2. `<iframe src="https://b.com/">` teilt das 8KiB-Kontingent.
3. `<iframe src="https://a.com/embed">` erhält kein Kontingent; obwohl es den gleichen Ursprung wie der Hauptursprung hat, ist es durch ein Cross-Origin getrennt.

### Sekundäre Subframes von Subframes erhalten standardmäßig kein Kontingent

Angenommen: Ein Hauptdokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, welches ein `<iframe src="https://c.com/">` einbettet, und keine expliziten Permissions Policies.

1. Das Hauptdokument von `a.com` hat das Standardkontingent von 512KiB.
2. `<iframe src="https://b.com/">` erhält 8KiB des Standard-geteilten Kontingents.
3. `<iframe src="https://c.com/">` erhält kein Kontingent.

### Gewährung des vollen Kontingents an ein weiteres Subframe

Angenommen: Ein Hauptdokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, welches ein `<iframe src="https://c.com/">` einbettet.

Angenommen, `a.com` hat die folgende Permissions Policy:

```http
Permissions-Policy: deferred-fetch=("https://c.com" "https://c.com")
```

Und angenommen, `b.com` hat die folgende Permissions Policy:

```http
Permissions-Policy: deferred-fetch=("https://c.com")
```

1. Der Hauptframe von `a.com` hat das Standardkontingent von 512KiB.
2. `<iframe src="https://b.com/">` erhält 64KiB des Standardkontingents.
3. `<iframe src="https://b.com/">` delegiert sein volles Kontingent von 8KiB an `c.com`. `b.com` kann `fetchLater()` nicht verwenden.
4. `<iframe src="https://c.com/">` erhält 8KiB Kontingent.

### Weiterleitungen übertragen kein Kontingent

Angenommen: Ein Hauptdokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, welches auf `c.com` umleitet, und keine expliziten top-level Permission Policies.

1. Der Hauptframe von `a.com` hat das Standardkontingent von 512KiB.
2. `<iframe src="https://b.com/">` erhält 8KiB des Standard-geteilten Kontingents.
3. Die 8KiB werden nicht auf `c.com` übertragen, wenn `<iframe src="https://b.com/">` dorthin umleitet, aber die 8KiB werden nicht freigegeben.

### Sandboxed-Same-Origin-Frames sind effektiv separate Ursprünge

Als Beispiel, wenn das folgende `<iframe>` auf `https://www.example.com` eingebettet ist:

```html
<iframe src="https://www.example.com/iframe" sandbox="allow-scripts"></iframe>
```

Dieses würde nicht als "gleicher Ursprung" betrachtet werden, obwohl es auf dem gleichen Ursprung wie das Hauptdokument gehostet wird, da das `<iframe>` sich in einer sandboxed Umgebung befindet. Daher sollte es standardmäßig ein 8KiB-Kontingent aus dem gesamten 128KiB-geteilten Kontingent erhalten.

### Deaktivierung von `fetchLater()` aus iframes

Sie können das `<iframe>` [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut verwenden, um zu verhindern, dass das `fetchLater()` Kontingent dem `<iframe>` zugewiesen wird:

```html
<iframe
  src="https://www.example.com/iframe"
  allow="deferred-fetch;deferred-fetch-minimal;"></iframe>
```

Die `allow="deferred-fetch"` Direktive ist erforderlich, um zu verhindern, dass iframes mit gleichem Ursprung das 512KiB-Kontingent aufbrauchen, und die `allow="deferred-fetch-minimal"` Direktive ist erforderlich, um zu verhindern, dass Cross-Origin iframes das 128KiB-Kontingent aufbrauchen. Die Aufnahme beider Direktiven verhindert, dass beide Kontingente genutzt werden, unabhängig vom Wert von `src`.

### Beispiele, die einen `QuotaExceededError` werfen

```js
// Maximum of 64KiB per origin
fetchLater(a_72_kb_url);

// Maximum of 64KiB per origin including headers
fetchLater("https://origin.example.com", { headers: headers_exceeding_64kb });

// Maximum of 64KiB per origin including body and headers
fetchLater(a_32_kib_url, { headers: headers_exceeding_32kib });

// Maximum of 64KiB per origin including body
fetchLater("https://origin.example.com", {
  method: "POST",
  body: body_exceeding_64_kib,
});

// Maximum of 64KiB per origin including body and automatically added headers
fetchLater(a_62_kib_url /* with a 3kb referrer */);
```

### Beispiele, die schließlich einen `QuotaExceededError` werfen

In der folgenden Sequenz, enthalten im Hauptdokument, würden die ersten zwei Anfragen erfolgreich sein, aber die dritte würde einen Fehler verursachen. Das liegt daran, dass, obwohl das Gesamt-Kontingent von 640KiB nicht überschritten wurde, die dritte Anfrage das Berichterstellungs-Ursprungs-Kontingent für `https://a.example.com` überschreitet und einen Fehler verursachen würde.

```js
fetchLater("https://a.example.com", { method: "POST", body: a_40kb_body });
fetchLater("https://b.example.com", { method: "POST", body: a_40kb_body });
fetchLater("https://a.example.com", { method: "POST", body: a_40kb_body });
```

### Weiterleitungen von Subframes zurück zum Hauptursprung ermöglichen die Nutzung des Hauptkontingents

Angenommen: Ein Hauptdokument bei `a.com`, das `<iframe src="https://b.com/">` einbettet, welches auf `a.com` umleitet, und keine expliziten top-level Permission Policies:

1. Der Hauptframe von `a.com` hat das Standardkontingent von 512KiB.
2. `<iframe src="https://b.com/">` erhält 8KiB des Standard-geteilten Kontingents von 128KiB.
3. Die 8KiB werden nicht auf `a.com` übertragen, wenn `<iframe src="https://b.com/">` dorthin umleitet, aber es kann das volle top-level Kontingent erneut teilen, und das zuvor zugewiesene 8KiB-Kontingent wird freigegeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fetchLater()` API](/de/docs/Web/API/fetchLater_API)
