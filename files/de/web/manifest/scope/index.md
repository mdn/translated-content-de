---
title: scope
slug: Web/Manifest/scope
l10n:
  sourceCommit: 1e660f71a4741c5fdf36bb7ac8dc7acfbc9cfb49
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `scope`-Manifest-Mitglied wird verwendet, um den obersten URL-Pfad anzugeben, der die Seiten und Unterverzeichnisse Ihrer Webanwendung enthält. Wenn Benutzer Ihre Web-App installieren und nutzen, bieten Seiten _innerhalb des Geltungsbereichs_ eine App-ähnliche Oberfläche. Wenn Benutzer zu Seiten außerhalb des Anwendungsbereichs navigieren, erleben sie weiterhin die App-ähnliche Oberfläche, aber Browser zeigen UI-Elemente wie die URL-Leiste an, um den Kontextwechsel anzuzeigen.

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

  - : Ein String, der eine URL darstellt. Die URL kann absolut oder relativ sein. Wenn der Wert relativ ist, wird er relativ zur URL der Manifest-Datei aufgelöst.

    Wenn `scope` im Manifest nicht angegeben ist oder der Wert ungültig ist (d.h. kein String, keine gültige URL oder `start_url` nicht innerhalb des angegebenen `scope`), wird der effektive Geltungsbereich auf den `start_url`-Wert festgelegt, nachdem sein Dateiname, seine Abfrage und sein Fragment entfernt wurden.

## Beschreibung

Das `scope`-Mitglied definiert die URLs, die Teil der installierten Erfahrung Ihrer Web-App sind. Browser verwenden `scope`, um festzustellen, ob eine Seite innerhalb des {{Glossary("Application_context", "Anwendungskontexts")}} Ihrer Web-App liegt.

### Verhalten innerhalb und außerhalb des Geltungsbereichs

Eine URL wird als "innerhalb des Geltungsbereichs" betrachtet, wenn ihr Pfad mit dem im `scope` definierten URL-Pfad beginnt. Wenn beispielsweise der `scope` auf `/app/` gesetzt ist, dann werden die URLs `/app/`, `/app/page.html` und `/app/dashboard/index.html` alle als innerhalb des Geltungsbereichs betrachtet, während `/` oder `/page.html` dies nicht sind.

Wenn Benutzer Ihre installierte Web-App öffnen, erleben sie eine App-ähnliche Oberfläche. Für Seiten im Geltungsbereich erhalten Browser den Anwendungskontext und behalten die App-ähnliche Erfahrung bei. Wenn Benutzer zu Seiten außerhalb des Anwendungsbereichs navigieren, erleben sie weiterhin im Wesentlichen die App-ähnliche Oberfläche; jedoch zeigen die Browser in diesen Seiten zusätzliche UI-Elemente wie die URL-Leiste an. Dies hilft den Benutzern zu verstehen, dass sie Seiten außerhalb des definierten Anwendungsbereichs betrachten.

> [!NOTE]
> Das `scope`-Mitglied verhindert nicht, dass Benutzer zu Anwendungsseiten außerhalb des definierten Geltungsbereichs navigieren. Navigationen außerhalb des Geltungsbereichs werden von Browsern nicht blockiert und nicht in einem neuen obersten Browsing-Kontext geöffnet.

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

Mit dem Geltungsbereich, der auf `/trails/` gesetzt ist:

- Beim Betrachten von Seiten und Unterverzeichnissen unter `/trails/` (wie `trail-list.html` und `/trails/settings/index.html`) erleben Benutzer die App-ähnliche Oberfläche ohne die Browser-Steuerelemente (Bild links).
- Beim Navigieren zu Seiten in Unterverzeichnissen wie `/blog/`, die außerhalb des Anwendungsbereichs der App liegen, bleibt die App-ähnliche Oberfläche bestehen, aber Benutzer sehen die Website-Adresse und andere Browser-Steuerelemente (Bild rechts).

| Seite im Geltungsbereich                                                                            | Seite außerhalb des Geltungsbereichs                                                                                              |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ![Trail-Anzeigeseite zeigt die App-ähnliche Oberfläche ohne Browser-Steuerelemente](trail-list.png) | ![Blog-Seite zeigt die Website-Adresse und Browser-Steuerelemente, während die App-ähnliche Oberfläche erhalten bleibt](blog.png) |

### Auswirkungen des Geltungsbereichs auf tief verlinkte Seiten

Andere Anwendungen können direkt auf bestimmte Seiten Ihrer Web-App tief verlinken. Das `scope`-Mitglied beeinflusst, wie diese tief verlinkten Seiten angezeigt werden, ist aber nicht erforderlich, damit das Deep-Linking funktioniert.

Betrachten Sie das vorherige Beispiel der Web-App zum Erkunden von Wanderwegen, wobei der Geltungsbereich auf `/trails/` gesetzt ist:

- Wenn ein Link zu `https://trailnav.app/trails/saratoga-gap-trail.html` in sozialen Medien geteilt wird, sehen Benutzer mit der installierten Trail Navigator App diese Seite in der App-Oberfläche ohne Browser-Steuerelemente.
- Wenn ein Link zu `https://trailnav.app/blog/trail-safety.html` geteilt wird, sehen diese Benutzer die Blog-Seite in der App-ähnlichen Oberfläche, aber mit sichtbarer Website-Adresse und Browser-Steuerelementen, da er außerhalb des definierten Anwendungsbereichs der App liegt.

Dieses Verhalten hilft den Benutzern zu verstehen, ob sie Seiten innerhalb oder außerhalb des Anwendungsbereichs der App betrachten, auch wenn sie die Anwendungsseiten über externe Links aufrufen.

### Fallback-Verhalten bei Geltungsbereich

Der `scope` ist ungültig, wenn `start_url` nicht eine Teilmenge der `scope`-URL ist. Zum Beispiel:

- **Gültig**: `scope` ist `/app/`, und `start_url` ist `/app/home.html`.
- **Ungültig**: `scope` ist `/app/`, und `start_url` ist `/index.html`.

Wenn `scope` fehlt oder ungültig ist, wird es standardmäßig auf den `start_url`-Wert festgelegt, nachdem dessen Dateiname, Abfrage und Fragment entfernt wurden. Beachten Sie, dass, wenn `start_url` auch undefiniert (oder ungültig) ist, es standardmäßig auf die Seite gesetzt wird, die auf das Manifest verweist. Dies stellt sicher, dass der Anwendungsbereich standardmäßig von der Seite aus beginnt, die die Installation ausgelöst hat.

Zum Beispiel:

- Wenn `start_url` `https://example.com/app/index.html?user=123#home` ist, wird der Geltungsbereich `https://example.com/app/` sein.
- Wenn `start_url` `/pages/welcome.html` ist, wird der Geltungsbereich `/pages/` auf demselben Ursprung sein.
- Wenn `start_url` `/pages/` ist (der abschließende Schrägstrich ist wichtig), wird der Geltungsbereich `/pages/` sein.

Wenn Sie auf das Fallback-Verhalten von `scope` angewiesen sind, stellen Sie sicher, dass die URLs aller Seiten Ihrer App mit dem übergeordneten Pfad von `start_url` beginnen. Um Probleme mit der Bestimmung des Geltungsbereichs auf diese Weise zu vermeiden, wird empfohlen, `scope` in Ihrer Manifestdatei ausdrücklich anzugeben.

### Mechanismus des Geltungsbereichsabgleichs

Das Zeichenfolgenabgleich für die Geltungsbereichs-URL verwendet einen einfachen Präfixabgleich, nicht die Pfadstruktur. Wenn zum Beispiel der `scope` als `/prefix` festgelegt ist, werden URLs abgeglichen, die mit `/prefix` beginnen, einschließlich `/prefix-of/index.html` und `/prefix/index.html`. Beachten Sie, dass `/prefix-of/index.html` übereinstimmt, obwohl `prefix-of` keine exakte Übereinstimmung mit dem Geltungsbereich `/prefix` ist.

Aus diesem Grund wird empfohlen, einen Geltungsbereich festzulegen, der mit einem `/` endet. Wenn der `scope` als `/prefix/` festgelegt ist, wird sichergestellt, dass er nur mit den Seiten innerhalb des `/prefix/`-Verzeichnisses übereinstimmt und unerwünschte Übereinstimmungen verhindert.

## Beispiele

### Absoluter URL für den Geltungsbereich angeben

Angenommen, die Manifestdatei Ihrer Web-App ist von `https://hikingapp.com/index.html` aus verlinkt, und Sie möchten, dass der Geltungsbereich alle Unterverzeichnisse umfasst. Sie können diesen Geltungsbereich mit einer absoluten URL angeben, die gleichursprünglich mit der URL der Manifestdatei ist, wie unten gezeigt. Dadurch wird sichergestellt, dass Seiten wie `https://hikingapp.com/store` und `https://hikingapp.com/company` Teil Ihrer Web-App sind.

```json
{
  "scope": "https://hikingapp.com/"
}
```

### Relative URL für den Geltungsbereich angeben

Wenn die URL Ihrer Manifestdatei `https://hikingapp.com/resources/manifest.json` ist und Sie möchten, dass der Geltungsbereich `https://hikingapp.com/app/` ist, können Sie ihn als relative URL definieren:

```json
{
  "scope": "../app/"
}
```

### Eine Web-App für einen bestimmten Abschnitt Ihrer Website definieren

Wenn Sie eine Website mit mehreren Abschnitten haben, aber Ihre Web-App sich auf einen bestimmten Abschnitt konzentrieren soll, können Sie den `scope` wie folgt definieren:

```json
{
  "name": "My Hiking Web App",
  "start_url": "https://hikingapp.com/store/",
  "scope": "https://hikingapp.com/store/"
}
```

Mit dieser Konfiguration sind Seiten wie `https://hikingapp.com/store/products` Teil Ihrer Web-App, aber `https://hikingapp.com/company/` liegt außerhalb des Anwendungsbereichs Ihrer Web-App. Für URLs außerhalb des Anwendungsbereichs können Browser unterschiedliche UI-Elemente anzeigen, um Benutzer darüber zu informieren, dass sie sich außerhalb des Anwendungsbereichs der App bewegt haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`start_url`](/de/docs/Web/Manifest/start_url) Manifestmitglied
- {{Glossary("Application_context", "Anwendungskontext")}}
