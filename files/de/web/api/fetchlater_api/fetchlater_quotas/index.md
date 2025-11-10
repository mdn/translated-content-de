---
title: fetchLater() Quoten
slug: Web/API/fetchLater_API/fetchLater_quotas
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{DefaultAPISidebar("fetchLater API")}}{{SeeCompatTable}}

Zurückgestellte Abrufe durch die [`fetchLater()` API](/de/docs/Web/API/fetchLater_API) werden gesammelt und gesendet, sobald der Tab geschlossen wird. In diesem Moment gibt es keine Möglichkeit für den Benutzer, diese abzubrechen. Um zu vermeiden, dass Dokumente dieses Bandbreite ausnutzen, um unbegrenzte Datenmengen über das Netzwerk zu senden, setzt die API Quoten dafür, wie viel Daten aufgeschoben werden können, um später gesendet zu werden.

Diese Quoten können durch die Direktiven {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} und {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} der [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Guides/Permissions_Policy) verwaltet werden.

## Überblick

Das gesamte Kontingent für `fetchLater()` beträgt 640KiB pro Dokument. Standardmäßig ist dies in ein 512KiB-Kontingent auf oberster Ebene und ein 128KiB-geteiltes Kontingent unterteilt:

- Das 512KiB-Kontingent auf oberster Ebene ist standardmäßig für alle `fetchLater()`-Anfragen gedacht, die vom Dokument der obersten Ebene und direkten Unterrahmen gemacht werden, die diesen Ursprung verwenden.
- Das 128KiB-geteilte Kontingent ist standardmäßig für alle `fetchLater()`-Anfragen, die in Cross-Origin-Unterrahmen (zum Beispiel `<iframe>`, `<object>`, `<embed>` und `<frame>` Elemente) gemacht werden.

`fetchLater()`-Anfragen können an jede URL gestellt werden und sind nicht auf den gleichen Ursprung wie das Dokument oder den Unterrahmen beschränkt. Daher ist es wichtig, zwischen Anfragen zu unterscheiden, die im Inhalt des Dokuments der obersten Ebene gemacht werden (unabhängig ob an Erst- oder Drittanbieter-Ursprünge) und denen, die in Unterrahmen gemacht werden.

Zum Beispiel, wenn ein Hauptdokument `a.com` ein `<script>` enthält, das eine `fetchLater()`-Anfrage an `analytics.example.com` stellt, wäre diese Anfrage durch das Kontingent der obersten Ebene von 512KiB gebunden. Alternativ, wenn das Hauptdokument ein `<iframe>` mit einer Quelle von `analytics.example.com` einbettet, das eine `fetchLater()`-Anfrage stellt, wäre diese Anfrage durch die 128KiB-Grenze gebunden.

## Kontingentgrenzen nach Berichtsersteller-Ursprung und Unterrahmen

Nur 64KiB des 512KiB-Kontingents auf oberster Ebene können gleichzeitig für denselben Berichtsersteller-Ursprung (den Ursprungs-URL der Anfrage) verwendet werden. Dies verhindert, dass Drittanbieter-Bibliotheken das Kontingent opportunistisch reservieren, bevor sie Daten zu senden haben.

Jedem Cross-Origin-Unterrahmen wird standardmäßig eine 8KiB-Quote aus dem geteilten 128KiB-Kontingent zugewiesen, wenn der Unterrahmen dem DOM hinzugefügt wird (ob `fetchLater()` in diesem Unterrahmen benutzt wird oder nicht). Das bedeutet, dass im Allgemeinen nur die ersten 16 Cross-Origin-Unterrahmen, die zu einer Seite hinzugefügt werden, `fetchLater()` verwenden können, da sie das 128KiB-Kontingent nutzen.

## Erhöhen der Unterrahmenkontingente durch Teilen des Kontingents der obersten Ebene

Der Top-Level-Ursprung kann ausgewählten Cross-Origin-Unterrahmen ein erhöhte Kontingent von 64KiB geben, indem es aus dem größeren 512KiB-Kontingent der obersten Ebene entnommen wird. Dies geschieht, indem diese Ursprünge in der {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} Berechtigungsrichtlinie aufgeführt werden. Diese wird zugeteilt, wenn der Unterrahmen dem DOM hinzugefügt wird, wodurch weniger Kontingent für das Dokument der obersten Ebene und direkte gleichartige Ursprungsrahmen verbleibt. Mehrere gleichartige Unterdomänen können jeweils ein 64KiB-Kontingent erhalten.

## Einschränkung des geteilten Kontingents

Der Top-Level-Ursprung kann auch das 128KiB-geteilte Kontingent auf benannte Cross-Origin-Unterrahmen beschränken, indem er diese Ursprünge in der {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} Berechtigungsrichtlinie aufführt. Es kann auch das gesamte 128KiB-Standardkontingent für Unterrahmen widerrufen und stattdessen das volle 640KiB-Kontingent für sich selbst und alle benannten `deferred-fetch` Cross-Ursprünge behalten, indem es die {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} Berechtigungsrichtlinie auf `()` setzt.

## Delegation von Kontingenten an Unterrahmen von Unterrahmen

Standardmäßig werden Unterrahmen von Unterrahmen kein Kontingent zugewiesen und können daher `fetchLater()` nicht verwenden. Unterrahmen, denen das erhöhte 64KiB-Kontingent zugewiesen wurde, können das volle 64KiB-Kontingent an weitere Unterrahmen delegieren und ihnen erlauben, `fetchLater()` durch das Setzen ihrer eigenen `deferred-fetch` Berechtigungsrichtlinie zu verwenden. Sie können nur ihr volles Kontingent an weitere Unterrahmen delegieren, nicht Teile davon, und können keine neuen Kontingente festlegen. Unterrahmen, die das minimale 8KiB-Kontingent verwenden, können keine Kontingente an Unterrahmen delegieren. Um Kontingente delegiert zu bekommen, müssen Unterrahmen sowohl in den `deferred-fetch` {{httpheader('Permissions-Policy')}} Direktiven auf oberster Ebene als auch im Unterrahmen enthalten sein.

## Wenn Kontingente überschritten werden

Wenn Kontingente überschritten werden, wird ein `QuotaExceededError` ausgelöst, wenn die [`fetchLater()`](/de/docs/Web/API/Window/fetchLater) Methode aufgerufen wird, um die zurückgestellte Anfrage zu starten.

Berechtigungsrichtlinienprüfungen sind von Quotenprüfungen nicht unterscheidbar. Der Aufruf von `fetchLater()` löst einen `QuotaExceededError` sowohl dann aus, wenn das Kontingent tatsächlich überschritten wurde als auch wenn das Kontingent für diesen Ursprung durch eine Berechtigungsrichtlinie eingeschränkt wurde.

Aufrufer von `fetchLater()` sollten defensiv sein und `QuotaExceededError` Fehler in fast allen Fällen abfangen, besonders wenn sie Drittanbieter-JavaScript einbetten.

## Beispiele

### Nutzung des minimalen Kontingents

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. Ein `<iframe src="https://b.com/page">` erhält 64KiB beim Hinzufügen zum Dokument der obersten Ebene aus dem 512KiB-Limit der obersten Ebene.
2. Ein `<iframe src="https://c.com/page">` ist nicht aufgelistet und erhält daher 8KiB beim Hinzufügen zum Dokument der obersten Ebene aus dem 128KiB geteilten Limit.
3. 15 weitere Cross-Origin-Iframes würden jeweils 8KiB beim Hinzufügen zum Dokument der obersten Ebene erhalten (ähnlich wie `c.com`).
4. Dem nächsten Cross-Origin-Iframe würde kein Kontingent gewährt.
5. Wenn eines der Cross-Origin-Iframes entfernt wird, werden seine zurückgestellten Abrufe gesendet.
6. Das nächste Cross-Origin-Iframe _würde_ ein 8KiB-Kontingent erhalten, da das Kontingent wieder verfügbar ist.

### Einschränkung des minimalen Kontingents auf benannte Ursprünge widerrufen

```http
Permissions-Policy: deferred-fetch-minimal=("https://b.com")
```

1. `<iframe src="https://b.com/page">` erhält 8KiB beim Hinzufügen zum Dokument der obersten Ebene.
2. `<iframe src="https://c.com/page">` erhält kein Kontingent beim Hinzufügen zum Dokument der obersten Ebene.
3. Das Hauptdokument und seine gleichartigen Nachkommen können bis zu 512KiB verwenden.

### Das minimale Kontingent ganz widerrufen mit Ausnahmen auf oberster Ebene

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. `<iframe src="https://b.com/page">` erhält 64KiB beim Hinzufügen zum Dokument der obersten Ebene.
2. `<iframe src="https://c.com/page">` erhält kein Kontingent beim Hinzufügen zum Hauptdokument.
3. Das Hauptdokument und seine gleichartigen Nachkommen können das volle 640KiB-Kontingent verwenden, aber das wird auf 574KiB reduziert, wenn ein `b.com`-Unterrahmen erstellt wird (oder noch weniger, wenn mehrere `b.com`-Unterrahmen erstellt werden, jeder von diesen wird ein 64KiB-Kontingent zugewiesen).

### Das minimale Kontingent ganz ohne Ausnahmen widerrufen

```http
Permissions-Policy: deferred-fetch-minimal=()
```

1. Das Hauptdokument und seine gleichartigen Nachkommen können das volle 640KiB-Kontingent verwenden.
2. Unterrahmen wird kein Kontingent zugewiesen und können `fetchLater()` nicht verwenden.

### Gleichartige Unterrahmen teilen das Kontingent mit der obersten Ebene und können es an Unterrahmen delegieren

Angenommen, ein Hauptdokument auf `a.com`, das einen Unterrahmen von `a.com` einbettet, der einen Unterrahmen von `b.com` einbettet, und keine expliziten Berechtigungsrichtlinien.

1. Das Hauptdokument von `a.com` hat das Standardkontingent von 512KiB.
2. `<iframe src="https://a.com/embed">` teilt das 512KiB-Kontingent beim Hinzufügen zum Hauptdokument.
3. `<iframe src="https://b.com/embed">` erhält ein 8KiB-Kontingent beim Hinzufügen zum Hauptdokument.

### Gleichartige Unterrahmen können das Kontingent mit der obersten Ebene nicht teilen, wenn sie durch einen Cross-Origin-Unterrahmen getrennt sind

Angenommen, ein Hauptdokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das einen Unterrahmen von `<iframe src="https://a.com/embed">` einbettet, und keine expliziten Berechtigungsrichtlinien.

1. Das Hauptdokument von `a.com` hat das Standardkontingent von 512KiB.
2. `<iframe src="https://b.com/">` teilt das 8KiB-Kontingent.
3. `<iframe src="https://a.com/embed">` erhält kein Kontingent; obwohl dies denselben Ursprung wie der Top-Ursprung hat, ist es durch einen Cross-Origin getrennt.

### Sekundäre Unterrahmen von Unterrahmen erhalten standardmäßig kein Kontingent

Angenommen, ein Hauptdokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das ein `<iframe src="https://c.com/">` einbettet, und keine expliziten Berechtigungsrichtlinien.

1. Der obere Rahmen von `a.com` hat das Standardkontingent von 512KiB.
2. `<iframe src="https://b.com/">` erhält 8KiB des standardmäßig geteilten Kontingents.
3. `<iframe src="https://c.com/">` erhält kein Kontingent.

### Zuweisen des vollen Kontingents an einen weiteren Unterrahmen

Angenommen, ein Hauptdokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das ein `<iframe src="https://c.com/">` einbettet.

Angenommen, `a.com` hat die folgende Berechtigungsrichtlinie:

```http
Permissions-Policy: deferred-fetch=("https://c.com" "https://c.com")
```

Und, angenommen, `b.com` hat die folgende Berechtigungsrichtlinie:

```http
Permissions-Policy: deferred-fetch=("https://c.com")
```

1. Der obere Rahmen von `a.com` hat das Standardkontingent von 512KiB.
2. `<iframe src="https://b.com/">` erhält 64KiB des Standardkontingents.
3. `<iframe src="https://b.com/">` delegiert sein volles Kontingent von 8KiB an `c.com`. `b.com` kann `fetchLater()` nicht verwenden.
4. `<iframe src="https://c.com/">` erhält 8KiB Kontingent.

### Umleitungen übertragen kein Kontingent

Angenommen, ein Hauptdokument auf `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das eine Umleitung zu `c.com` hat, und keine expliziten Berechtigungsrichtlinien auf oberster Ebene.

1. Der obere Rahmen von `a.com` hat das Standardkontingent von 512KiB.
2. `<iframe src="https://b.com/">` erhält 8KiB des standardmäßig geteilten Kontingents.
3. Die 8KiB werden nicht an `c.com` übertragen, wenn `<iframe src="https://b.com/">` dorthin umgeleitet wird, aber die 8KiB werden nicht freigegeben.

### In einem Sandbox-Umgebung eingebettete gleichartige Iframes sind im Wesentlichen separate Ursprünge

Zum Beispiel, wenn das folgende `<iframe>` auf `https://www.example.com` eingebettet wird:

```html
<iframe src="https://www.example.com/iframe" sandbox="allow-scripts"></iframe>
```

Dies würde nicht als "gleichartiger Ursprung" betrachtet werden, obwohl es auf demselben Ursprung wie das Hauptdokument gehostet wird, da das `<iframe>` in einer Sandbox-Umgebung ist. Daher sollte es standardmäßig mit einem 8KiB-Kontingent aus dem insgesamt geteilten 128KiB-Kontingent ausgestattet werden.

### `fetchLater()` von Iframes nicht zulassen

Sie können das `<iframe>` [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut verwenden, um zu verhindern, dass `fetchLater()`-Kontingent an das `<iframe>` vergeben wird:

```html
<iframe
  src="https://www.example.com/iframe"
  allow="deferred-fetch;deferred-fetch-minimal;"></iframe>
```

Die Direktive `allow="deferred-fetch"` ist notwendig, um zu verhindern, dass gleichartige Iframes das 512KiB-Kontingent nutzen, und die Direktive `allow="deferred-fetch-minimal"` ist notwendig, um zu verhindern, dass Cross-Origin-Iframes das 128KiB-Kontingent nutzen. Das Einschließen beider Direktiven verhindert, dass beide Kontingente verwendet werden, unabhängig vom `src`-Wert.

### Beispiele, die einen `QuotaExceededError` auslösen

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

### Beispiele, die schließlich einen `QuotaExceededError` auslösen

In der folgenden Sequenz, die im Hauptdokument enthalten ist, würden die ersten beiden Anfragen erfolgreich sein, aber die dritte würde fehlschlagen. Grund dafür ist, dass selbst wenn das gesamte 640KiB-Kontingent nicht überschritten wurde, die dritte Anfrage die Berichtserstellungs-Ursprungs-Grenze für `https://a.example.com` überschreitet und ausgelöst würde.

```js
fetchLater("https://a.example.com", { method: "POST", body: a40KiBBody });
fetchLater("https://b.example.com", { method: "POST", body: a40KiBBody });
fetchLater("https://a.example.com", { method: "POST", body: a40KiBBody });
```

### Umleitungen von Unterrahmen zurück zum Ursprung der obersten Ebene ermöglichen die Nutzung des Kontingents der obersten Ebene

Angenommen, ein Hauptdokument bei `a.com`, das ein `<iframe src="https://b.com/">` einbettet, das eine Umleitung zu `a.com` macht, und keine expliziten Permissions Policies auf oberster Ebene:

1. Der obere Rahmen von `a.com` hat das Standardkontingent von 512KiB.
2. `<iframe src="https://b.com/">` erhält 8KiB des standardmäßig geteilten Kontingents von 128KiB.
3. Die 8KiB werden nicht an `a.com` übertragen, wenn `<iframe src="https://b.com/">` dorthin umgeleitet wird, aber es kann das volle Top-Level-Kontingent wieder teilen, und das zuvor zugewiesene 8KiB-Kontingent wird freigegeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fetchLater()` API](/de/docs/Web/API/fetchLater_API)
