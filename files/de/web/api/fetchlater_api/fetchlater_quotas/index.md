---
title: fetchLater()-Quoten
slug: Web/API/fetchLater_API/fetchLater_quotas
l10n:
  sourceCommit: 8c0f4d9b9d335105107b15be55e06ca5619a0054
---

{{DefaultAPISidebar("fetchLater API")}}{{SeeCompatTable}}

Aufgeschobene Abrufe der [fetchLater() API](/de/docs/Web/API/fetchLater_API) werden gesammelt und gesendet, sobald der Tab geschlossen wird. Zu diesem Zeitpunkt gibt es keine Möglichkeit für den Benutzer, diese abzubrechen. Um Situationen zu vermeiden, in denen Dokumente dieses Bandbreite nutzen, um unbegrenzte Datenmengen über das Netzwerk zu senden, setzt die API Quoten, wie viele Daten aufgeschoben gesendet werden können.

Diese Quoten können durch die {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} und {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) Direktiven verwaltet werden.

## Übersicht

Das Gesamtkontingent für `fetchLater()` beträgt 640KiB pro Dokument. Standardmäßig ist dies in ein 512KiB Hauptkontingent und ein 128KiB gemeinsames Kontingent unterteilt:

- Das 512KiB Hauptkontingent ist standardmäßig für alle `fetchLater()`-Anfragen des Hauptdokuments und direkten Unterrahmen, die diesen Ursprung verwenden.
- Das 128KiB gemeinsame Kontingent ist standardmäßig für `fetchLater()`-Anfragen gedacht, die in cross-origin Unterrahmen (zum Beispiel `<iframe>`, `<object>`, `<embed>` und `<frame>` Elemente) gestellt werden.

`fetchLater()`-Anfragen können an jede URL gesendet werden und sind nicht auf denselben Ursprung wie das Dokument oder der Unterrahmen beschränkt. Es ist daher wichtig, zwischen Anfragen im Hauptdokumentinhalt (ob zu Ursprüngen von Erstanbietern oder Drittanbietern) und denen in Unterrahmen zu unterscheiden.

Wenn zum Beispiel ein Hauptdokument `a.com` ein `<script>` enthält, das eine `fetchLater()`-Anfrage an `analytics.example.com` sendet, wäre diese Anfrage durch das Hauptlimit von 512KiB begrenzt. Wenn das Hauptdokument einen `<iframe>` mit einer Quelle von `analytics.example.com` einbettet, der eine `fetchLater()`-Anfrage sendet, wäre diese Anfrage durch das 128KiB-Limit begrenzt.

## Kontingentgrenzen nach Berichtsursprung und Unterrahmen

Nur 64KiB des 512KiB-Hauptkontingents können gleichzeitig für denselben Berichtsursprung (den Ursprung der Anforderungs-URL) verwendet werden. Dies verhindert, dass Drittanbieter-Bibliotheken das Kontingent opportunistisch reservieren, bevor sie Daten zum Senden haben.

Jeder cross-origin Unterrahmen erhält ein 8KiB Kontingent aus dem gemeinsamen 128KiB Kontingent, das zugewiesen wird, wenn der Unterrahmen dem DOM hinzugefügt wird (unabhängig davon, ob `fetchLater()` in diesem Unterrahmen verwendet wird oder nicht). Dies bedeutet, dass im Allgemeinen nur die ersten 16 cross-origin Unterrahmen, die einer Seite hinzugefügt werden, `fetchLater()` verwenden können, da sie das 128KiB Kontingent aufbrauchen.

## Erhöhung der Unterrahmenkontingente durch Teilen des Hauptkontingents

Der Hauptursprung kann ausgewählten cross-origin Unterrahmen ein erhöhtes Kontingent von 64KiB gewähren, das dem größeren 512KiB Hauptkontingent entnommen wird. Dies erfolgt, indem diese Ursprünge im {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} Permissions Policy direktiv aufgeführt werden. Dieses wird zugewiesen, wenn der Unterrahmen dem DOM hinzugefügt wird, wodurch weniger Kontingent für das Hauptdokument und direkte gleichursprüngliche Unterrahmen übrig bleibt. Mehrere gleichursprüngliche Subdomains können jeweils ein 64KiB Kontingent erhalten.

## Einschränkung des gemeinsamen Kontingents

Der Hauptursprung kann auch das 128KiB gemeinsame Kontingent auf benannte cross-origin Unterrahmen beschränken, indem er diese Ursprünge in der {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} Permissions Policy auflistet. Er kann auch das gesamte 128KiB Standard-Unterrahmenkontingent widerrufen und stattdessen das volle 640KiB Kontingent für sich selbst und alle benannten `deferred-fetch` cross-origins behalten, indem er die {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} Permissions Policy auf `()` setzt.

## Zuteilung von Kontingenten an Unterrahmen von Unterrahmen

Im Standardfall werden Unterrahmen von Unterrahmen kein Kontingent zugewiesen und können daher `fetchLater()` nicht verwenden. Unterrahmen mit dem erhöhten 64KiB Kontingent können das volle 64KiB Kontingent an weitere Unterrahmen delegieren und ihnen die Verwendung von `fetchLater()` ermöglichen, indem sie ihre eigene `deferred-fetch` Permissions Policy setzen. Sie können nur ihr vollständiges Kontingent an weitere Unterrahmen delegieren, nicht Teile davon, und können keine neuen Kontingente spezifizieren. Unterrahmen, die das minimale 8KiB Kontingent verwenden, können keine Kontingente an Unterrahmen delegieren. Um ein Kontingent zugeteilt zu bekommen, müssen Sub-Subrahmen sowohl in der `deferred-fetch` {{httpheader('Permissions-Policy')}} Direktive des Haupt- als auch des Unterrahmens enthalten sein.

## Wenn Kontingente überschritten werden

Wenn Kontingente überschritten werden, wird ein `QuotaExceededError` ausgelöst, wenn die [`fetchLater()`](/de/docs/Web/API/Window/fetchLater) Methode aufgerufen wird, um die aufgeschobene Anfrage zu initiieren.

Berechtigungsrichtlinienprüfungen sind von Kontingentprüfungen nicht unterscheidbar. Das Aufrufen von `fetchLater()` wird einen `QuotaExceededError` auslösen, sowohl wenn das Kontingent tatsächlich überschritten wird, als auch wenn das Kontingent für diesen Ursprung über eine Berechtigungsrichtlinie eingeschränkt wurde.

Aufrufer von `fetchLater()` sollten defensiv sein und `QuotaExceededError`-Fehler in fast allen Fällen abfangen, insbesondere wenn sie JavaScript von Drittanbietern einbinden.

## Beispiele

### Nutzung des minimalen Kontingents

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. Ein `<iframe src="https://b.com/page">` erhält 64KiB, nachdem es dem Hauptdokument hinzugefügt wurde, aus dem 512KiB Hauptlimit.
2. Ein `<iframe src="https://c.com/page">` ist nicht aufgeführt und erhält daher beim Hinzufügen zum Hauptdokument 8KiB aus dem 128KiB gemeinsamen Limit.
3. 15 weitere cross-origin iframes würden jeweils 8KiB beim Hinzufügen zum Hauptdokument erhalten (ähnlich wie `c.com`).
4. Das nächste cross-origin iframe würde kein Kontingent zugewiesen bekommen.
5. Wenn eines der cross-origin iframes entfernt wird, werden dessen aufgeschobene Abrufe gesendet.
6. Das nächste cross-origin iframe würde ein 8KiB Kontingent erhalten, da wieder Kontingent verfügbar ist.

### Beschränkung des minimalen Kontingents auf benannte Ursprünge widerrufen

```http
Permissions-Policy: deferred-fetch-minimal=("https://b.com")
```

1. `<iframe src="https://b.com/page">` erhält 8KiB beim Hinzufügen zum Hauptdokument.
2. `<iframe src="https://c.com/page">` erhält kein Kontingent beim Hinzufügen zum Hauptdokument.
3. Das Hauptdokument und seine gleichursprünglichen Nachkommen können bis zu 512KiB verwenden.

### Widerrufen des minimalen Kontingents insgesamt mit Ausnahmen auf oberster Ebene

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. `<iframe src="https://b.com/page">` erhält 64KiB beim Hinzufügen zum Hauptdokument.
2. `<iframe src="https://c.com/page">` erhält kein Kontingent beim Hinzufügen zum Hauptdokument.
3. Das Hauptdokument und seine gleichursprünglichen Nachkommen können bis zu 640KiB nutzen, aber das wird auf 574KiB reduziert, wenn ein `b.com` Unterrahmen erstellt wird (oder sogar weniger, wenn mehrere `b.com` Unterrahmen erstellt werden, von denen jeder ein 64KiB Kontingent zugewiesen bekommt).

### Widerrufen des minimalen Kontingents insgesamt ohne Ausnahmen

```http
Permissions-Policy: deferred-fetch-minimal=()
```

1. Das Hauptdokument und seine gleichursprünglichen Nachkommen können das volle 640KiB verwenden.
2. Unterrahmen bekommen kein Kontingent zugewiesen und können `fetchLater()` nicht verwenden.

### Gleichursprüngliche Unterrahmen teilen sich das Kontingent mit der Hauptsache und können an Unterrahmen delegieren

Angenommen, ein Hauptdokument auf `a.com`, das einen Unterrahmen von `a.com` einbettet, der einen Unterrahmen von `b.com` einbettet, und keine expliziten Berechtigungsrichtlinien.

1. Das Hauptdokument von `a.com` hat das Standard 512KiB Kontingent.
2. `<iframe src="https://a.com/embed">` teilt das 512KiB Kontingent beim Hinzufügen zum Hauptdokument.
3. `<iframe src="https://b.com/embed">` erhält 8KiB Kontingent beim Hinzufügen zum Hauptdokument.

### Gleichursprüngliche Unterrahmen können das Kontingent nicht mit dem Hauptdokument teilen, wenn sie durch einen cross-origin Unterrahmen getrennt werden

Angenommen, ein Hauptdokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das einen Unterrahmen von `<iframe src="https://a.com/embed">` einbettet, und keine expliziten Berechtigungsrichtlinien.

1. Das Hauptdokument von `a.com` hat das Standard 512KiB Kontingent.
2. `<iframe src="https://b.com/">` teilt das 8KiB Kontingent.
3. `<iframe src="https://a.com/embed">` erhält kein Kontingent; obwohl es gleichursprünglich mit dem Hauptursprung ist, ist es durch ein cross-origin getrennt.

### Sekundäre Unterrahmen von Unterrahmen erhalten standardmäßig kein Kontingent

Angenommen, ein Hauptdokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das ein `<iframe src="https://c.com/">` einbettet, und keine expliziten Berechtigungsrichtlinien.

1. Der Hauptframe von `a.com` hat das Standard 512KiB Kontingent.
2. `<iframe src="https://b.com/">` erhält 8KiB des Standard gemeinsamen Kontingents.
3. `<iframe src="https://c.com/">` erhält kein Kontingent.

### Gewährung des vollen Kontingents an einen weiteren Unterrahmen

Angenommen, ein Hauptdokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das ein `<iframe src="https://c.com/">` einbettet.

Angenommen, dass `a.com` die folgende Berechtigungsrichtlinie hat:

```http
Permissions-Policy: deferred-fetch=("https://c.com" "https://c.com")
```

Und, angenommen, dass `b.com` die folgende Berechtigungsrichtlinie hat:

```http
Permissions-Policy: deferred-fetch=("https://c.com")
```

1. Der Hauptframe von `a.com` hat das Standard 512KiB Kontingent.
2. `<iframe src="https://b.com/">` erhält 64KiB des Standardkontingents.
3. `<iframe src="https://b.com/">` delegiert sein volles Kontingent von 8KiB an `c.com`. `b.com` kann `fetchLater()` nicht verwenden.
4. `<iframe src="https://c.com/">` erhält 8KiB Kontingent.

### Redirects übertragen kein Kontingent

Angenommen, ein Hauptdokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das zu `c.com` weiterleitet, und keine expliziten Berechtigungsrichtlinien auf oberster Ebene.

1. Der Hauptframe von `a.com` hat das Standard 512KiB Kontingent.
2. `<iframe src="https://b.com/">` erhält 8KiB des Standard gemeinsamen Kontingents.
3. Die 8KiB werden nicht auf `c.com` übertragen, wenn `<iframe src="https://b.com/">` dorthin umleitet, aber die 8KiB werden nicht freigegeben.

### Redirects von Unterrahmen zurück zum Hauptursprung erlauben die Nutzung des Hauptkontingents

Angenommen, ein Hauptdokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das zu `a.com` weiterleitet, und keine expliziten Berechtigungsrichtlinien auf oberster Ebene.

1. Der Hauptframe von `a.com` hat das Standard 512KiB Kontingent.
2. `<iframe src="https://b.com/">` erhält 8KiB des Standard gemeinsamen Kontingents.
3. Die 8KiB werden nicht auf `a.com` übertragen, wenn `<iframe src="https://b.com/">` dorthin umleitet, aber sie können das volle Hauptkontingent wieder nutzen, und die 8KiB werden freigegeben.

### Beispiele, die einen `QuotaExceededError` auslösen

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

### Beispiele, die schließlich einen `QuotaExceededError` auslösen

In der folgenden Sequenz, die im Hauptdokument enthalten ist, würden die ersten beiden Anfragen erfolgreich sein, aber die dritte würde fehlschlagen. Das liegt daran, dass die dritte Anfrage, obwohl das gesamte 640KiB Kontingent nicht überschritten wurde, das Berichtsursprungskontingent für `https://a.example.com` überschreitet und eine Ausnahme auslöst.

```js
fetchLater("https://a.example.com", { method: "POST", body: a_40kb_body });
fetchLater("https://b.example.com", { method: "POST", body: a_40kb_body });
fetchLater("https://a.example.com", { method: "POST", body: a_40kb_body });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fetchLater()` API](/de/docs/Web/API/fetchLater_API)
