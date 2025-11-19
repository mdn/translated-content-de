---
title: scope
slug: Web/Progressive_web_apps/Manifest/Reference/scope
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das `scope`-Manifestmitglied wird verwendet, um den obersten URL-Pfad anzugeben, der die Seiten und Unterverzeichnisse Ihrer Webanwendung enthält. Wenn Benutzer Ihre Web-App installieren und verwenden, bieten Seiten _innerhalb des Scopes_ eine app-ähnliche Oberfläche. Wenn Benutzer zu Seiten außerhalb des App-Scopes navigieren, erleben sie dennoch die app-ähnliche Oberfläche, aber Browser zeigen UI-Elemente wie die URL-Leiste an, um den Kontextwechsel anzuzeigen.

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
  - : Ein String, der eine URL darstellt. Die URL kann absolut oder relativ sein. Wenn der Wert relativ ist, wird er gegen die URL der Manifestdatei aufgelöst.

    Wenn `scope` im Manifest nicht angegeben oder der Wert ungültig ist (d.h. kein String, keine gültige URL oder `start_url` nicht innerhalb des angegebenen `scope`), wird der effektive Scope auf den Wert von `start_url` gesetzt, nachdem dessen Dateiname, Abfrage und Fragment entfernt wurden.

## Beschreibung

Das `scope`-Mitglied definiert die URLs, die Teil der installierten Erfahrung Ihrer Web-App sind. Browser verwenden `scope`, um festzustellen, ob sich eine Seite im {{Glossary("Application_context", "Anwendungskontext")}} Ihrer Web-App befindet.

### Verhalten von Seiten innerhalb und außerhalb des Scopes

Eine URL gilt als "innerhalb des Scopes", wenn ihr Pfad mit dem im `scope` definierten URL-Pfad beginnt. Beispielsweise, wenn der `scope` auf `/app/` gesetzt ist, dann werden die URLs `/app/`, `/app/page.html` und `/app/dashboard/index.html` als innerhalb des Scopes betrachtet, während `/` oder `/page.html` nicht dazugehören.

Wenn Benutzer Ihre installierte Web-App öffnen, erleben sie eine app-ähnliche Oberfläche. Bei Seiten innerhalb des Scopes behalten Browser den Anwendungskontext bei und bewahren die app-ähnliche Erfahrung. Wenn Benutzer zu Seiten außerhalb des Apps-Scopes navigieren, erleben sie weiterhin die app-ähnliche Oberfläche; jedoch zeigen Browser auf diesen Seiten zusätzliche UI-Elemente wie die URL-Leiste an. Dies hilft Benutzern zu verstehen, dass sie Seiten außerhalb des definierten Scopes der App anzeigen.

> [!NOTE]
> Das `scope`-Mitglied verhindert nicht, dass Benutzer zu App-Seiten außerhalb des definierten Scopes navigieren. Externe Navigationen werden von Browsern nicht blockiert und dürfen in einem neuen Top-Level-Browsing-Kontext geöffnet werden.

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

Mit dem Scope auf `/trails/` gesetzt:

- Beim Betrachten von Seiten und Unterverzeichnissen unter `/trails/` (wie `trail-list.html` und `/trails/settings/index.html`) erleben Benutzer die app-ähnliche Oberfläche ohne die Browsersteuerelemente (Bild links).
- Beim Navigieren zu Seiten in Unterverzeichnissen wie `/blog/`, die außerhalb des Scopes der App liegen, bleibt die app-ähnliche Oberfläche erhalten, jedoch sehen die Benutzer die Webseitenadresse und andere Browsersteuerelemente (Bild rechts).

| Seite im Scope                                                                                                           | Seite außerhalb des Scopes                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| ![Seite mit der Auflistung von Wegen, die eine app-ähnliche Oberfläche ohne Browsersteuerelemente zeigt](trail-list.png) | ![Blog-Seite, die Webseitenadresse und Browsersteuerelemente zeigt, während die app-ähnliche Oberfläche beibehalten wird](blog.png) |

### Auswirkung des Scopes auf tief verlinkte Seiten

Andere Anwendungen können direkt auf bestimmte Seiten Ihrer Web-App verlinken. Das `scope`-Mitglied beeinflusst, wie diese tief verlinkten Seiten angezeigt werden, ist jedoch nicht erforderlich, damit Deep Linking funktioniert.

Betrachten Sie das vorherige Beispiel der Web-App zum Erkunden von Wanderwegen, bei dem der `scope` auf `/trails/` gesetzt ist:

- Wenn ein Link zu `https://trailnav.app/trails/saratoga-gap-trail.html` in sozialen Medien geteilt wird, sehen Benutzer mit der installierten Trail Navigator-App diese Seite in der App-Oberfläche ohne Browsersteuerelemente.
- Wenn ein Link zu `https://trailnav.app/blog/trail-safety.html` geteilt wird, sehen diese Benutzer die Blog-Seite in der app-ähnlichen Oberfläche, jedoch mit der Webseitenadresse und den Browsersteuerelementen sichtbar, da sie außerhalb des definierten Scopes der App liegt.

Dieses Verhalten hilft Benutzern zu verstehen, ob sie Seiten innerhalb oder außerhalb des Scopes der App anzeigen, auch wenn die App-Seiten über externe Links aufgerufen werden.

### Fallback-Verhalten des Scopes

Der `scope` ist ungültig, wenn `start_url` keine Teilmenge der `scope`-URL ist. Zum Beispiel:

- **Gültig**: `scope` ist `/app/`, und `start_url` ist `/app/home.html`.
- **Ungültig**: `scope` ist `/app/`, und `start_url` ist `/index.html`.

Wenn `scope` fehlt oder ungültig ist, wird es standardmäßig auf den `start_url`-Wert gesetzt, nachdem dessen Dateiname, Abfrage und Fragment entfernt wurden. Beachten Sie, dass wenn `start_url` ebenfalls undefiniert (oder ungültig) ist, wird standardmäßig die Seite genommen, die auf das Manifest verlinkt. Dies stellt sicher, dass der Scope standardmäßig von der Seite ausgeht, die die Installation ausgelöst hat.

Zum Beispiel:

- Wenn `start_url` `https://example.com/app/index.html?user=123#home` ist, wird der Scope `https://example.com/app/` sein.
- Wenn `start_url` auf `/pages/welcome.html` gesetzt ist, wird der Scope `/pages/` auf demselben Ursprung sein.
- Wenn `start_url` auf `/pages/` (das abschließende Schrägstrich ist wichtig) gesetzt ist, wird der Scope `/pages/` sein.

Wenn Sie sich auf das Fallback-Verhalten von `scope` verlassen, stellen Sie sicher, dass URLs aller Seiten in Ihrer App mit dem übergeordneten Pfad von `start_url` beginnen. Um Probleme mit der Scope-Erkennung auf diese Weise zu vermeiden, wird empfohlen, `scope` explizit in Ihrer Manifestdatei anzugeben.

### Mechanismus des Scopematching

Das String-Matching für die Scope-URL verwendet ein einfaches Präfix-Matching, nicht die Pfadstruktur. Beispielsweise, wenn der `scope` als `/prefix` gesetzt ist, wird er URLs zuordnen, die mit `/prefix` beginnen, einschließlich `/prefix-of/index.html` und `/prefix/index.html`. Beachten Sie, dass `/prefix-of/index.html` übereinstimmt, obwohl `prefix-of` keine genaue Übereinstimmung mit dem Scope `/prefix` ist.

Aus diesem Grund wird empfohlen, einen Scope mit einem abschließenden `/` zu definieren. Das Setzen des `scope` als `/prefix/` stellt sicher, dass es nur die Seiten im Verzeichnis `/prefix/` zugeordnet wird, um unbeabsichtigte Übereinstimmungen zu vermeiden.

## Beispiele

### Festlegung einer absoluten URL für den Scope

Angenommen, die Manifestdatei Ihrer Web-App ist von `https://hikingapp.com/index.html` verlinkt, und Sie möchten, dass der Scope alle Unterverzeichnisse umfasst. Sie können diesen Scope mit einer absoluten URL angeben, die denselben Ursprung wie die Manifestdatei-URL hat, wie unten gezeigt. Dies stellt sicher, dass Seiten wie `https://hikingapp.com/store` und `https://hikingapp.com/company` Teil Ihrer Web-App sind.

```json
{
  "scope": "https://hikingapp.com/"
}
```

### Festlegung einer relativen URL für den Scope

Wenn die URL Ihrer Manifestdatei `https://hikingapp.com/resources/manifest.json` ist und Sie möchten, dass der Scope `https://hikingapp.com/app/` ist, können Sie ihn als relative URL definieren:

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

Mit diesem Setup sind Seiten wie `https://hikingapp.com/store/products` Teil Ihrer Web-App, aber `https://hikingapp.com/company/` liegt außerhalb des Scopes Ihrer Web-App. Für URLs außerhalb des Scopes können Browser unterschiedliche UI-Elemente anzeigen, um Benutzer darauf hinzuweisen, dass sie sich außerhalb des App-Scopes bewegt haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) Manifest-Mitglied
- {{Glossary("Application_context", "Anwendungskontext")}}
