---
title: scope
slug: Web/Progressive_web_apps/Manifest/Reference/scope
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `scope`-Element im Manifest wird verwendet, um den obersten URL-Pfad anzugeben, der die Seiten und Unterverzeichnisse Ihrer Webanwendung enthält.
Wenn Benutzer Ihre Web-App installieren und nutzen, bieten Seiten _innerhalb des Umfangs_ eine App-ähnliche Oberfläche.
Wenn Nutzer zu Seiten außerhalb des App-Umfangs navigieren, erleben sie weiterhin die App-ähnliche Oberfläche, aber Browser zeigen UI-Elemente wie die URL-Leiste an, um den Wechsel des Kontexts anzuzeigen.

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

  - : Ein String, der eine URL repräsentiert.
    Die URL kann absolut oder relativ sein.
    Wenn der Wert relativ ist, wird er relativ zur URL der Manifestdatei aufgelöst.

    Wenn `scope` im Manifest nicht angegeben ist oder der Wert ungültig ist (d.h. kein String, keine gültige URL oder `start_url` ist nicht innerhalb des angegebenen `scope`), wird der effektive Umfang auf den Wert von `start_url` gesetzt, nachdem der Dateiname, die Abfrage und das Fragment entfernt wurden.

## Beschreibung

Das `scope`-Element definiert die URLs, die Teil der installierten Erfahrung Ihrer Webanwendung sind.
Browser verwenden `scope`, um festzustellen, ob eine Seite innerhalb des {{Glossary("Application_context", "Anwendungskontexts")}} Ihrer Webanwendung liegt.

### Verhalten innerhalb und außerhalb des Umfangs

Eine URL gilt als "innerhalb des Umfangs", wenn ihr Pfad mit dem im `scope` definierten URL-Pfad beginnt.
Zum Beispiel, wenn der `scope` auf `/app/` gesetzt ist, werden die URLs `/app/`, `/app/page.html` und `/app/dashboard/index.html` alle als innerhalb des Umfangs betrachtet, während `/` oder `/page.html` nicht innerhalb des Umfangs liegen.

Wenn Benutzer Ihre installierte Web-App öffnen, erleben sie eine App-ähnliche Oberfläche.
Für Seiten innerhalb des Umfangs bewahren Browser den Anwendungskontext und erhalten die App-ähnliche Erfahrung.
Wenn Benutzer zu Seiten außerhalb des App-Umfangs navigieren, erleben sie weiterhin weitgehend die App-ähnliche Oberfläche; jedoch zeigen Browser auf diesen Seiten zusätzliche UI-Elemente wie die URL-Leiste.
Dies hilft Benutzern zu verstehen, dass sie Seiten außerhalb des definierten Umfangs der App betrachten.

> [!NOTE]
> Das `scope`-Element verhindert nicht, dass Benutzer zu Seiten der App außerhalb des definierten Umfangs navigieren.
> Navigationen außerhalb des Umfangs werden von Browsern nicht blockiert und nicht in einem neuen obersten Browser-Kontext geöffnet.

Betrachten Sie eine Web-App zur Erkundung von Wanderwegen mit der folgenden Verzeichnisstruktur:

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

Mit dem `scope` auf `/trails/` gesetzt:

- Beim Betrachten von Seiten und Unterverzeichnissen unter `/trails/` (wie `trail-list.html` und `/trails/settings/index.html`) erleben die Benutzer die App-ähnliche Oberfläche ohne die Browser-Steuerelemente (Bild links).
- Bei der Navigation zu Seiten in Unterverzeichnissen wie `/blog/`, die außerhalb des Umfangs der App liegen, bleibt die App-ähnliche Oberfläche erhalten, aber die Benutzer sehen die Webadresse und andere Browser-Steuerelemente (Bild rechts).

| Seite im Umfang                                                                                            | Seite außerhalb des Umfangs                                                                                         |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| ![Seite mit Wanderwegliste zeigt eine App-ähnliche Oberfläche ohne Browser-Steuerelemente](trail-list.png) | ![Blog-Seite zeigt Webadresse und Browser-Steuerelemente, während sie die App-ähnliche Oberfläche erhält](blog.png) |

### Auswirkungen des Umfangs auf tief verknüpfte Seiten

Andere Anwendungen können direkt auf bestimmte Seiten Ihrer Webanwendung tief verlinken.
Das `scope`-Element beeinflusst, wie diese tief verknüpften Seiten angezeigt werden, es ist jedoch nicht erforderlich, damit tiefes Verlinken funktioniert.

Betrachten Sie das vorherige Beispiel der Web-App zur Erkundung von Wanderwegen, wo der `scope` auf `/trails/` gesetzt ist:

- Wenn ein Link zu `https://trailnav.app/trails/saratoga-gap-trail.html` in sozialen Medien geteilt wird, sehen Benutzer mit der Trail Navigator-App diese Seite in der App-Oberfläche ohne Browser-Steuerelemente.
- Wenn ein Link zu `https://trailnav.app/blog/trail-safety.html` geteilt wird, sehen diese Benutzer die Blog-Seite in der App-ähnlichen Oberfläche, aber mit der Webadresse und sichtbaren Browser-Steuerelementen, da sie sich außerhalb des vom App definierten Umfangs befindet.

Dieses Verhalten hilft den Benutzern zu verstehen, ob sie Seiten innerhalb oder außerhalb des App-Umfangs betrachten, auch wenn sie auf die App-Seiten über externe Links zugreifen.

### Standardverhalten des Umfangs

Der `scope` ist ungültig, wenn `start_url` kein Teil der `scope`-URL ist. Zum Beispiel:

- **Gültig**: `scope` ist `/app/`, und `start_url` ist `/app/home.html`.
- **Ungültig**: `scope` ist `/app/`, und `start_url` ist `/index.html`.

Wenn `scope` fehlt oder ungültig ist, wird er standardmäßig auf den `start_url`-Wert gesetzt, nachdem der Dateiname, die Abfrage und das Fragment entfernt wurden.
Beachten Sie, dass, wenn `start_url` ebenfalls undefiniert (oder ungültig) ist, er standardmäßig auf die Seite gesetzt wird, die auf das Manifest verlinkt.
Dies stellt sicher, dass der Umfang standardmäßig bei der Seite beginnt, die die Installation ausgelöst hat.

Zum Beispiel:

- Wenn `start_url` `https://example.com/app/index.html?user=123#home` ist, wird der Umfang `https://example.com/app/`.
- Wenn `start_url` `/pages/welcome.html` ist, wird der Umfang auf demselben Ursprungsserver `/pages/`.
- Wenn `start_url` `/pages/` ist (der abschließende Schrägstrich ist wichtig), wird der Umfang `/pages/`.

Wenn Sie sich auf das Standardverhalten des `scope` verlassen, stellen Sie sicher, dass die URLs aller Seiten in Ihrer App mit dem übergeordneten Pfad von `start_url` beginnen.
Um Probleme mit der Bestimmung des Umfangs auf diese Weise zu vermeiden, wird empfohlen, den `scope` explizit in Ihrer Manifestdatei anzugeben.

### Mechanismus zur Übereinstimmung des Umfangs

Die String-Matching-Methode für die Scope-URL verwendet einen einfachen Präfix-Abgleich, nicht die Pfadstruktur.
Zum Beispiel, wenn der `scope` als `/prefix` gesetzt ist, passt er zu URLs, die mit `/prefix` beginnen, einschließlich `/prefix-of/index.html` und `/prefix/index.html`. Beachten Sie, dass `/prefix-of/index.html` übereinstimmt, auch wenn `prefix-of` nicht exakt dem Umfang `/prefix` entspricht.

Aus diesem Grund wird empfohlen, einen Scope mit einem abschließenden `/` zu definieren.
Das Festlegen des `scope` als `/prefix/` stellt sicher, dass es nur zu den Seiten im Verzeichnis `/prefix/` passt, wodurch unbeabsichtigte Übereinstimmungen vermieden werden.

## Beispiele

### Angabe einer absoluten URL für den Umfang

Angenommen, die Manifestdatei Ihrer Web-App ist von `https://hikingapp.com/index.html` verlinkt und Sie möchten, dass der Umfang alle Unterverzeichnisse umfasst. Sie können diesen Umfang mit einer absoluten URL angeben, die denselben Ursprung wie die Manifestdatei-URL hat, wie unten gezeigt. Dies stellt sicher, dass Seiten wie `https://hikingapp.com/store` und `https://hikingapp.com/company` Teil Ihrer Web-App sind.

```json
{
  "scope": "https://hikingapp.com/"
}
```

### Angabe einer relativen URL für den Umfang

Wenn die URL Ihrer Manifestdatei `https://hikingapp.com/resources/manifest.json` ist und Sie möchten, dass der Umfang `https://hikingapp.com/app/` ist, können Sie ihn als eine relative URL definieren:

```json
{
  "scope": "../app/"
}
```

### Definition einer Web-App für einen bestimmten Abschnitt Ihrer Website

Wenn Sie eine Website mit mehreren Abschnitten haben, aber möchten, dass Ihre Web-App sich auf einen bestimmten Abschnitt konzentriert, können Sie den `scope` wie folgt definieren:

```json
{
  "name": "My Hiking Web App",
  "start_url": "https://hikingapp.com/store/",
  "scope": "https://hikingapp.com/store/"
}
```

Mit diesem Setup sind Seiten wie `https://hikingapp.com/store/products` Teil Ihrer Web-App, aber `https://hikingapp.com/company/` liegt außerhalb des Umfangs Ihrer Web-App. Für URLs außerhalb des Umfangs können Browser unterschiedliche UI-Elemente anzeigen, um Benutzern mitzuteilen, dass sie sich vom Umfang der App entfernt haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) Manifest-Element
- {{Glossary("Application_context", "Anwendungskontext")}}
