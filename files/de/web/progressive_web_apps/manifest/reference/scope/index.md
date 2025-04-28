---
title: scope
slug: Web/Progressive_web_apps/Manifest/Reference/scope
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `scope` Manifestmitglied wird verwendet, um den obersten URL-Pfad anzugeben, der die Seiten und Unterverzeichnisse Ihrer Webanwendung enthält.
Wenn Benutzer Ihre Web-App installieren und nutzen, bieten Seiten _im Scope_ eine app-ähnliche Oberfläche.
Wenn Benutzer zu Seiten außerhalb des App-Scopes navigieren, erleben sie weiterhin die app-ähnliche Oberfläche, aber die Browser zeigen UI-Elemente wie die URL-Leiste an, um den Kontextwechsel anzuzeigen.

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

  - : Ein String, der eine URL darstellt.
    Die URL kann absolut oder relativ sein.
    Wenn der Wert relativ ist, wird er relativ zur URL der Manifestdatei aufgelöst.

    Wenn `scope` im Manifest nicht angegeben ist oder der Wert ungültig ist (d.h. kein String, keine gültige URL oder `start_url` nicht im angegebenen `scope` enthalten ist), wird der effektive Scope auf den `start_url`-Wert gesetzt, nachdem sein Dateiname, seine Abfrage und Fragment entfernt wurden.

## Beschreibung

Das `scope` Mitglied definiert die URLs, die Teil der installierten Erfahrung Ihrer Web-App sind.
Browser verwenden `scope`, um zu bestimmen, ob eine Seite im {{Glossary("Application_context", "Anwendungskontext")}} Ihrer Web-App ist.

### Verhalten innerhalb und außerhalb des Scopes

Eine URL wird als "innerhalb des Scopes" betrachtet, wenn ihr Pfad mit dem im `scope` definierten URL-Pfad beginnt.
Zum Beispiel, wenn der `scope` auf `/app/` gesetzt ist, werden die URLs `/app/`, `/app/page.html` und `/app/dashboard/index.html` als innerhalb des Scopes angesehen, während `/` oder `/page.html` es nicht sind.

Wenn Benutzer Ihre installierte Web-App öffnen, erleben sie eine app-ähnliche Oberfläche.
Für Seiten innerhalb des Scopes bewahren Browser den Anwendungskontext und die app-ähnliche Erfahrung.
Wenn Benutzer zu Seiten außerhalb des App-Scopes navigieren, erleben sie weiterhin im Wesentlichen die app-ähnliche Oberfläche; jedoch zeigen auf diesen Seiten Browser zusätzliche UI-Elemente wie die URL-Leiste an.
Dies hilft Benutzern zu verstehen, dass sie Seiten außerhalb des definierten Scopes der App anzeigen.

> [!NOTE]
> Das `scope` Mitglied verhindert nicht, dass Benutzer zu App-Seiten außerhalb des definierten Scopes navigieren.
> Navigationen außerhalb des Scopes werden von Browsern nicht blockiert und dürfen in einem neuen obersten Browsing-Kontext geöffnet werden.

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

- Beim Anzeigen von Seiten und Unterverzeichnissen unter `/trails/` (wie `trail-list.html` und `/trails/settings/index.html`) erleben Benutzer die app-ähnliche Oberfläche ohne die Browsersteuerungen (Bild auf der linken Seite).
- Beim Navigieren zu Seiten in Unterverzeichnissen wie `/blog/`, die außerhalb des Scopes der App liegen, bleibt die App-Oberfläche erhalten, aber Benutzer sehen die Website-Adresse und andere Browsersteuerungen (Bild auf der rechten Seite).

| Seite im Scope                                                                                     | Seite außerhalb des Scopes                                                                                |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| ![Seite mit Wanderweg-Liste zeigt app-ähnliche Oberfläche ohne Browsersteuerungen](trail-list.png) | ![Blog-Seite zeigt Website-Adresse und Browsersteuerungen während beibehaltener App-Oberfläche](blog.png) |

### Auswirkung von Scope auf tief verlinkte Seiten

Andere Anwendungen können direkt auf bestimmte Seiten Ihrer Web-App verlinken.
Das `scope` Mitglied beeinflusst, wie diese tief verlinkten Seiten angezeigt werden, es ist jedoch nicht erforderlich, damit tiefes Verlinken funktioniert.

Betrachten Sie das frühere Beispiel der Web-App zum Erkunden von Wanderwegen, bei der der `scope` auf `/trails/` gesetzt ist:

- Wenn ein Link zu `https://trailnav.app/trails/saratoga-gap-trail.html` in sozialen Medien geteilt wird, sehen Benutzer, die die Trail Navigator App installiert haben, diese Seite in der App-Oberfläche ohne Browsersteuerungen.
- Wird ein Link zu `https://trailnav.app/blog/trail-safety.html` geteilt, sehen diese Benutzer die Blog-Seite in der App-ähnlichen Oberfläche, aber mit sichtbarer Website-Adresse und Browsersteuerungen, da sie außerhalb des definierten Scopes liegt.

Dieses Verhalten hilft Benutzern zu verstehen, ob sie Seiten innerhalb oder außerhalb des App-Scopes ansehen, auch wenn sie die App-Seiten über externe Links aufrufen.

### Fallback-Verhalten des Scopes

Der `scope` ist ungültig, wenn `start_url` keine Teilmenge der `scope` URL ist. Zum Beispiel:

- **Gültig**: `scope` ist `/app/`, und `start_url` ist `/app/home.html`.
- **Ungültig**: `scope` ist `/app/`, und `start_url` ist `/index.html`.

Wenn `scope` fehlt oder ungültig ist, wird es auf den `start_url`-Wert nach Entfernen seines Dateinamens, seiner Abfrage und seines Fragments zurückgesetzt.
Beachten Sie, dass wenn `start_url` ebenfalls nicht definiert (oder ungültig) ist, es standardmäßig die Seite wird, die auf das Manifest verweist.
So wird sichergestellt, dass der Scope standardmäßig an der Seite beginnt, die die Installation ausgelöst hat.

Zum Beispiel:

- Wenn `start_url` `https://example.com/app/index.html?user=123#home` ist, wird der Scope `https://example.com/app/`.
- Wenn `start_url` `/pages/welcome.html` ist, wird der Scope `/pages/` am gleichen Ursprung sein.
- Wenn `start_url` `/pages/` ist (der abschließende Schrägstrich ist wichtig), wird der Scope `/pages/`.

Wenn Sie sich auf das Fallback-Verhalten von `scope` verlassen, stellen Sie sicher, dass die URLs aller Seiten in Ihrer App mit dem übergeordneten Pfad von `start_url` beginnen.
Um Probleme bei der Scop-Bestimmung zu vermeiden, wird empfohlen, `scope` explizit in Ihrer Manifestdatei anzugeben.

### Mechanismus des Scope-Matchings

Die Zeichenkettenübereinstimmung der Scope-URL verwendet eine einfache Präfixübereinstimmung, nicht die Pfadstruktur.
Zum Beispiel, wenn der `scope` auf `/prefix` gesetzt ist, wird er URLs, die mit `/prefix` beginnen, zuordnen, einschließlich `/prefix-of/index.html` und `/prefix/index.html`. Beachten Sie, dass `/prefix-of/index.html` übereinstimmt, obwohl `prefix-of` keine exakte Übereinstimmung mit dem Scope `/prefix` ist.

Aus diesem Grund wird empfohlen, einen Scope zu definieren, der mit `/` endet.
Das Setzen des `scope` als `/prefix/` stellt sicher, dass er nur die Seiten im Verzeichnis `/prefix/` zuordnet und unbeabsichtigte Übereinstimmungen verhindert.

## Beispiele

### Angabe einer absoluten URL für den Scope

Angenommen, die Manifestdatei für Ihre Web-App ist mit `https://hikingapp.com/index.html` verlinkt, und Sie möchten, dass der Scope alle Unterverzeichnisse umfasst. Sie können diesen Scope mit einer absoluten URL angeben, die sich im selben Ursprung wie die URL der Manifestdatei befindet, wie unten gezeigt. Dies stellt sicher, dass Seiten wie `https://hikingapp.com/store` und `https://hikingapp.com/company` Teil Ihrer Web-App sind.

```json
{
  "scope": "https://hikingapp.com/"
}
```

### Angabe einer relativen URL für den Scope

Wenn die URL Ihrer Manifestdatei `https://hikingapp.com/resources/manifest.json` ist und Sie möchten, dass der Scope `https://hikingapp.com/app/` ist, können Sie ihn als relative URL definieren:

```json
{
  "scope": "../app/"
}
```

### Definition einer Web-App für einen bestimmten Abschnitt Ihrer Website

Wenn Sie eine Website mit mehreren Abschnitten haben, aber Ihre Web-App auf einen bestimmten Abschnitt konzentrieren möchten, können Sie den `scope` wie folgt definieren:

```json
{
  "name": "My Hiking Web App",
  "start_url": "https://hikingapp.com/store/",
  "scope": "https://hikingapp.com/store/"
}
```

Mit dieser Konfiguration sind Seiten wie `https://hikingapp.com/store/products` Teil Ihrer Web-App, aber `https://hikingapp.com/company/` liegt außerhalb des Scopes Ihrer Web-App. Für URLs außerhalb des Scopes können Browser unterschiedliche UI-Elemente anzeigen, um Benutzer darüber zu informieren, dass sie sich außerhalb des Scopes der App bewegt haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) Manifestmitglied
- {{Glossary("Application_context", "Anwendungskontext")}}
