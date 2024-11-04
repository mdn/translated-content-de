---
title: scope
slug: Web/Manifest/scope
l10n:
  sourceCommit: 831041c061c4a6ab673d2f4b8efc37d374bdaaca
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `scope`-Mitglied im Manifest wird verwendet, um den obersten URL-Pfad anzugeben, der die Seiten und Unterverzeichnisse Ihrer Webanwendung enthält. Wenn Benutzer Ihre Web-App installieren und verwenden, bieten Seiten _im Geltungsbereich_ eine App-ähnliche Oberfläche. Wenn Benutzer zu Seiten außerhalb des Anwendungsbereichs navigieren, erleben sie weiterhin die App-ähnliche Oberfläche, jedoch zeigen die Browser UI-Elemente wie die URL-Leiste an, um auf die veränderte Kontext hinweisen.

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

  - : Ein Zeichenfolgenwert, der eine URL darstellt. Die URL kann absolut oder relativ sein. Wenn der Wert relativ ist, wird er gegen die URL der Manifestdatei aufgelöst. Die [`start_url`](/de/docs/Web/Manifest/start_url) muss innerhalb des definierten Bereichs liegen.

    Wenn `scope` nicht angegeben ist oder der Wert ungültig ist (d. h. keine Zeichenfolge, keine gültige URL oder `start_url` liegt nicht im Bereich), wird der `start_url`-Wert als Fallback verwendet, wobei Dateiname, Anfrage und Fragment entfernt werden.

## Beschreibung

Das `scope`-Mitglied definiert die URLs, die Teil der installierten Erfahrung Ihrer Web-App sind. Browser verwenden `scope`, um zu bestimmen, ob eine Seite innerhalb des {{Glossary("Application_context", "Anwendungskontextes")}} Ihrer Web-App liegt.

### Verhalten innerhalb und außerhalb des Geltungsbereichs

Eine URL gilt als "innerhalb des Geltungsbereichs", wenn ihr Pfad mit dem in `scope` definierten URL-Pfad beginnt. Wenn beispielsweise der `scope` auf `/app/` gesetzt ist, gelten die URLs `/app/`, `/app/page.html` und `/app/dashboard/index.html` alle als innerhalb des Geltungsbereichs, während `/` oder `/page.html` nicht innerhalb des Geltungsbereichs sind.

Wenn Benutzer Ihre installierte Web-App öffnen, erleben sie eine App-ähnliche Oberfläche. Für in den Geltungsbereich fallende Seiten bewahren Browser den Anwendungskontext und die App-ähnliche Erfahrung. Wenn Benutzer zu Seiten außerhalb des Anwendungsbereichs navigieren, erleben sie weiterhin die App-ähnliche Oberfläche; jedoch werden auf diesen Seiten zusätzliche UI-Elemente wie die URL-Leiste angezeigt. Dies hilft den Benutzern zu verstehen, dass sie Seiten außerhalb des definierten Bereichs der App betrachten.

> [!NOTE]
> Das `scope`-Mitglied verhindert nicht, dass Benutzer zu App-Seiten außerhalb des definierten Bereichs navigieren. Navigationen außerhalb des Geltungsbereichs werden von Browsern nicht blockiert und nicht in einem neuen obersten Browsing-Kontext geöffnet.

Betrachten Sie eine Web-App zum Erkunden von Wanderwegen mit folgender Verzeichnisstruktur:

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

- Beim Anzeigen von Seiten und Unterverzeichnissen unter `/trails/` (wie `trail-list.html` und `/trails/settings/index.html`) erleben Benutzer die App-ähnliche Oberfläche ohne die Browser-Steuerelemente (Bild auf der linken Seite).
- Beim Navigieren zu Seiten in Unterverzeichnissen wie `/blog/`, die außerhalb des Geltungsbereichs der App liegen, bleibt die App-ähnliche Oberfläche bestehen, aber Benutzer sehen die Website-Adresse und andere Browser-Steuerelemente (Bild auf der rechten Seite).

| Seite im Geltungsbereich                                                                                         | Seite außerhalb des Geltungsbereichs                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| ![Seite zur Auflistung von Wegen zeigt eine App-ähnliche Oberfläche ohne Browser-Steuerelemente](trail-list.png) | ![Blog-Seite zeigt die Website-Adresse und Browser-Steuerelemente an, während die App-ähnliche Oberfläche beibehalten wird](blog.png) |

### Auswirkungen des Bereichs auf tiefgelinkte Seiten

Andere Anwendungen können direkt zu bestimmten Seiten Ihrer Web-App verlinken. Das `scope`-Mitglied beeinflusst, wie diese tiefgelinkten Seiten angezeigt werden, ist jedoch nicht erforderlich, damit das Deeplinking funktioniert.

Betrachten Sie das vorherige Beispiel der Web-App zum Erkunden von Wanderwegen, bei dem der Bereich auf `/trails/` gesetzt ist:

- Wenn ein Link zu `https://trailnav.app/trails/saratoga-gap-trail.html` in sozialen Medien geteilt wird, sehen Benutzer mit der Trail Navigator-App diese Seite in der Oberfläche der App ohne Browser-Steuerelemente.
- Wenn ein Link zu `https://trailnav.app/blog/trail-safety.html` geteilt wird, sehen diese Benutzer die Blog-Seite in der App-ähnlichen Oberfläche, jedoch mit sichtbarer Website-Adresse und Browser-Steuerelementen, da er außerhalb des definierten Bereichs der App liegt.

Dieses Verhalten hilft den Benutzern zu verstehen, ob sie Seiten innerhalb oder außerhalb des Geltungsbereichs der App betrachten, selbst beim Zugriff auf App-Seiten über externe Links.

### Fallback-Verhalten des Bereichs

Der `scope` ist ungültig, wenn `start_url` keine Teilmenge der `scope`-URL ist. Zum Beispiel:

- Gültig: `scope` ist `/app/` und `start_url` ist `/app/home.html`.
- Ungültig: `scope` ist `/app/` und `start_url` ist `/index.html`.

Wenn `scope` fehlt oder ungültig ist, wird als Standard `start_url` verwendet, wobei der Dateiname, die Anfrage und das Fragment entfernt werden. Zum Beispiel:

- Wenn `start_url` `https://example.com/app/index.html?user=123#home` ist, wird der Bereich `https://example.com/app/`.
- Wenn `start_url` `/pages/welcome.html` ist, wird der Bereich `/pages/` auf dem gleichen Ursprung sein.
- Wenn `start_url` `/pages/` ist (der abschließende Schrägstrich ist wichtig), wird der Bereich `/pages/`.

Wenn Sie auf das Fallback-Verhalten von `scope` vertrauen, stellen Sie sicher, dass die URLs aller Seiten in Ihrer App mit dem übergeordneten Pfad von `start_url` beginnen. Um Probleme mit der Bereichsbestimmung auf diese Weise zu vermeiden, wird empfohlen, den `scope` explizit in Ihrer Manifestdatei anzugeben.

### Mechanismus zum Abgleich des Bereichs

Die Zeichenfolgenabgleichung für die Bereichs-URL verwendet einen einfachen Präfixabgleich, nicht die Pfadstruktur. Wenn beispielsweise der `scope` als `/prefix` festgelegt ist, werden URLs beginnend mit `/prefix` abgeglichen, einschließlich `/prefix-of/index.html` und `/prefix/index.html`. Beachten Sie, dass `/prefix-of/index.html` abgeglichen wird, auch wenn `prefix-of` kein exakter Abgleich mit dem Bereich `/prefix` ist.

Aus diesem Grund wird empfohlen, einen Bereich mit einem abschließenden `/` zu definieren. Wenn der `scope` als `/prefix/` festgelegt ist, wird sichergestellt, dass er nur mit den Seiten im `/prefix/`-Verzeichnis übereinstimmt und unbeabsichtigte Übereinstimmungen verhindert.

## Beispiele

### Festlegen einer absoluten URL für den Bereich

Angenommen, die Manifestdatei für Ihre Web-App ist von `https://hikingapp.com/index.html` verlinkt, und Sie möchten, dass der Bereich alle Unterverzeichnisse umfasst. Diesen Bereich können Sie mit einer absoluten URL festlegen, die gleichen Ursprungs wie die URL der Manifestdatei ist, wie unten gezeigt. Dies stellt sicher, dass Seiten wie `https://hikingapp.com/store` und `https://hikingapp.com/company` Teil Ihrer Web-App sind.

```json
{
  "scope": "https://hikingapp.com/"
}
```

### Festlegen einer relativen URL für den Bereich

Wenn die URL Ihrer Manifestdatei `https://hikingapp.com/resources/manifest.json` ist und Sie den Bereich auf `https://hikingapp.com/app/` setzen möchten, können Sie ihn als relative URL definieren:

```json
{
  "scope": "../app/"
}
```

### Definieren einer Web-App für einen bestimmten Abschnitt Ihrer Website

Wenn Sie eine Website mit mehreren Abschnitten haben, aber Ihre Web-App auf einen bestimmten Abschnitt konzentrieren möchten, können Sie den `scope` wie folgt definieren:

```json
{
  "name": "My Hiking Web App",
  "start_url": "https://hikingapp.com/store/",
  "scope": "https://hikingapp.com/store/"
}
```

Mit diesem Setup sind Seiten wie `https://hikingapp.com/store/products` Teil Ihrer Web-App, aber `https://hikingapp.com/company/` liegt außerhalb des Bereichs Ihrer Web-App. Für URLs außerhalb des Geltungsbereichs können Browser unterschiedliche UI-Elemente anzeigen, um den Benutzern mitzuteilen, dass sie den Bereich der App verlassen haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`start_url`](/de/docs/Web/Manifest/start_url) Manifestmitglied
- {{Glossary("Application_context", "Anwendungskontext")}}
