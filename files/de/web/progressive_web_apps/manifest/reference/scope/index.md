---
title: scope
slug: Web/Progressive_web_apps/Manifest/Reference/scope
l10n:
  sourceCommit: 79189712c064f07334a6be25eccf4853a04af038
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `scope`-Manifestmitglied wird verwendet, um den obersten URL-Pfad anzugeben, der die Seiten und Unterverzeichnisse Ihrer Webanwendung enthält. Wenn Benutzer Ihre Web-App installieren und verwenden, bieten Seiten _innerhalb des Bereichs_ eine App-ähnliche Benutzeroberfläche. Wenn Benutzer zu Seiten außerhalb des Bereichs der App navigieren, erleben sie weiterhin die App-ähnliche Oberfläche, aber Browser zeigen UI-Elemente wie die URL-Leiste an, um den Kontextwechsel anzuzeigen.

## Syntax

```json-nolint
/* Absolute URL */
"scope": "https://example.com/myapp/"

/* Relative URL */
"scope": "/myapp/"

/* Scope limited to a specific directory */
"scope": "/myapp/dashboard/"
```

### Werte

- `scope`

  - : Ein String, der eine URL darstellt. Die URL kann absolut oder relativ sein. Ist der Wert relativ, wird er relativ zur URL der Manifestdatei aufgelöst.

    Wenn `scope` im Manifest nicht angegeben ist oder der Wert ungültig ist (d.h. kein String, keine gültige URL oder `start_url` nicht innerhalb des angegebenen `scope`), wird der effektive Bereich auf den Wert von `start_url` gesetzt, nachdem dessen Dateiname, Abfrage und Fragment entfernt wurden.

## Beschreibung

Das `scope`-Mitglied definiert die URLs, die Teil der installierten Erfahrung Ihrer Web-App sind. Browser verwenden `scope`, um festzustellen, ob sich eine Seite im {{Glossary("Application_context", "Anwendungskontext")}} Ihrer Web-App befindet.

### Verhalten innerhalb und außerhalb des Bereichs

Eine URL wird als "innerhalb des Bereichs" betrachtet, wenn ihr Pfad mit dem in `scope` definierten URL-Pfad beginnt. Zum Beispiel, wenn `scope` auf `/app/` gesetzt ist, dann werden die URLs `/app/`, `/app/page.html` und `/app/dashboard/index.html` als innerhalb des Bereichs betrachtet, während `/` oder `/page.html` nicht dazugehören.

Wenn Benutzer Ihre installierte Web-App öffnen, erleben sie eine App-ähnliche Benutzeroberfläche. Für Seiten im Bereich behalten Browser den Anwendungskontext bei und bewahren die App-ähnliche Erfahrung. Wenn Benutzer zu Seiten außerhalb des Bereichs der App navigieren, erleben sie weiterhin weitgehend die App-ähnliche Oberfläche; in diesen Seiten zeigen Browser jedoch zusätzliche UI-Elemente wie die URL-Leiste an. Das hilft Benutzern zu verstehen, dass sie Seiten außerhalb des definierten Bereichs der App betrachten.

> [!NOTE]
> Das `scope`-Mitglied verhindert nicht, dass Benutzer zu App-Seiten außerhalb des definierten Bereichs navigieren. Navigationen außerhalb des Bereichs werden von Browsern nicht blockiert und dürfen in einem neuen obersten Browser-Kontext geöffnet werden.

Betrachten Sie eine Web-App zum Erkunden von Wanderwegen mit der folgenden Verzeichnisstruktur:

```plain
web-app/
├── manifest.json
├── trails/
│   ├── index.html
│   ├── trail-list.html
│   ├── settings/
│   │   └── index.html
│   └── saratoga-gap-trail.html
├── blog/
│   └── index.html
```

Mit dem Bereich auf `/trails/` gesetzt:

- Beim Anzeigen von Seiten und Unterverzeichnissen unter `/trails/` (wie `trail-list.html` und `/trails/settings/index.html`) erleben Benutzer die App-ähnliche Oberfläche ohne die Browsersteuerungen (links im Bild).
- Beim Navigieren zu Seiten in Unterverzeichnissen wie `/blog/`, die außerhalb des Bereichs der App liegen, bleibt die App-ähnliche Oberfläche erhalten, aber Benutzer sehen die Website-Adresse und andere Browsersteuerungen (rechts im Bild).

| Seite im Bereich                                                                                | Seite außerhalb des Bereichs                                                                                          |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| ![Traillisten-Seite, die App-ähnliche Oberfläche ohne Browsersteuerungen zeigt](trail-list.png) | ![Blog-Seite, die Website-Adresse und Browsersteuerungen zeigt, während die App-ähnliche Oberfläche bleibt](blog.png) |

### Einfluss des Bereichs auf tief verlinkte Seiten

Andere Anwendungen können direkt auf bestimmte Seiten Ihrer Web-App tief verlinken. Das `scope`-Mitglied beeinflusst, wie diese tief verlinkten Seiten angezeigt werden, ist jedoch nicht erforderlich, damit das Deep Linking funktioniert.

Betrachten Sie das vorherige Beispiel der Web-App zum Erkunden von Wanderwegen, wobei `scope` auf `/trails/` gesetzt ist:

- Wenn ein Link zu `https://trailnav.app/trails/saratoga-gap-trail.html` in sozialen Medien geteilt wird, sehen Benutzer mit installierter Trail Navigator-App diese Seite in der App-Oberfläche ohne Browsersteuerungen.
- Wenn ein Link zu `https://trailnav.app/blog/trail-safety.html` geteilt wird, sehen diese Benutzer die Blog-Seite in der App-ähnlichen Benutzeroberfläche, jedoch mit sichtbarer Website-Adresse und Browsersteuerungen, da sie außerhalb des definierten Bereichs der App liegt.

Dieses Verhalten hilft Benutzern zu verstehen, ob sie Seiten innerhalb oder außerhalb des Bereichs der App betrachten, selbst wenn sie auf App-Seiten über externe Links zugreifen.

### Fallback-Bereichsverhalten

Der `scope` ist ungültig, wenn `start_url` keine Teilmenge der `scope`-URL ist. Zum Beispiel:

- **Gültig**: `scope` ist `/app/`, und `start_url` ist `/app/home.html`.
- **Ungültig**: `scope` ist `/app/`, und `start_url` ist `/index.html`.

Wenn `scope` fehlt oder ungültig ist, wird er standardmäßig auf den `start_url`-Wert gesetzt, nachdem dessen Dateiname, Abfrage und Fragment entfernt wurden. Beachten Sie, dass, wenn `start_url` ebenfalls undefiniert (oder ungültig) ist, er standardmäßig die Seite nimmt, die auf das Manifest verweist. Dies stellt sicher, dass der Bereich standardmäßig von der Seite beginnt, die die Installation ausgelöst hat.

Zum Beispiel:

- Wenn `start_url` `https://example.com/app/index.html?user=123#home` ist, wird der Bereich `https://example.com/app/` sein.
- Wenn `start_url` `/pages/welcome.html` ist, wird der Bereich auf demselben Ursprung `/pages/` sein.
- Wenn `start_url` `/pages/` ist (der abschließende Schrägstrich ist wichtig), wird der Bereich `/pages/` sein.

Wenn Sie auf das Fallback-Verhalten von `scope` setzen, stellen Sie sicher, dass die URLs aller Seiten in Ihrer App mit dem übergeordneten Pfad von `start_url` beginnen. Um Probleme mit der Bereichsbestimmung auf diese Weise zu vermeiden, wird empfohlen, den `scope` explizit in Ihrer Manifestdatei anzugeben.

### Mechanismus zur Bereichsübereinstimmung

Die Zeichenfolgenübereinstimmung für die Bereichs-URL verwendet eine einfache Präfixübereinstimmung, nicht die Pfadstruktur. Zum Beispiel, wenn der `scope` als `/prefix` gesetzt ist, wird er URLs abgleichen, die mit `/prefix` beginnen, einschließlich `/prefix-of/index.html` und `/prefix/index.html`. Beachten Sie, dass `/prefix-of/index.html` übereinstimmt, obwohl `prefix-of` keine genaue Übereinstimmung mit dem `scope` `/prefix` ist.

Aus diesem Grund wird empfohlen, einen `scope` festzulegen, der mit einem `/` endet. Das Setzen des `scope` als `/prefix/` stellt sicher, dass es nur mit den Seiten innerhalb des `/prefix/`-Verzeichnisses übereinstimmt und unbeabsichtigte Übereinstimmungen verhindert.

## Beispiele

### Angabe einer absoluten URL für den Bereich

Angenommen, die Manifestdatei für Ihre Web-App wird von `https://hikingapp.com/index.html` verlinkt, und Sie möchten, dass der Bereich alle Unterverzeichnisse umfasst. Sie können diesen Bereich mit einer absoluten URL angeben, die denselben Ursprung wie die URL der Manifestdatei hat, wie unten gezeigt. Dies stellt sicher, dass Seiten wie `https://hikingapp.com/store` und `https://hikingapp.com/company` Teil Ihrer Web-App sind.

```json
{
  "scope": "https://hikingapp.com/"
}
```

### Angabe einer relativen URL für den Bereich

Wenn die URL Ihrer Manifestdatei `https://hikingapp.com/resources/manifest.json` ist und Sie möchten, dass der Bereich `https://hikingapp.com/app/` ist, können Sie ihn als relative URL definieren:

```json
{
  "scope": "../app/"
}
```

### Definition einer Web-App für einen bestimmten Abschnitt Ihrer Website

Wenn Sie eine Website mit mehreren Abschnitten haben, aber möchten, dass sich Ihre Web-App auf einen bestimmten Abschnitt konzentriert, können Sie den `scope` so definieren:

```json
{
  "name": "My Hiking Web App",
  "start_url": "https://hikingapp.com/store/",
  "scope": "https://hikingapp.com/store/"
}
```

Mit dieser Einrichtung gehören Seiten wie `https://hikingapp.com/store/products` zu Ihrer Web-App, aber `https://hikingapp.com/company/` liegt außerhalb des Bereichs Ihrer Web-App. Bei URLs, die außerhalb des Bereichs liegen, können Browser unterschiedliche UI-Elemente anzeigen, um Benutzer darüber zu informieren, dass sie den Bereich der App verlassen haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) Manifestmitglied
- {{Glossary("Application_context", "Anwendungskontext")}}
