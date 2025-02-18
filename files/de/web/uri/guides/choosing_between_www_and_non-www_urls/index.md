---
title: Die Wahl zwischen www und nicht-www URLs
short-title: Die Verwendung von 'www' in URLs
slug: Web/URI/Guides/Choosing_between_www_and_non-www_URLs
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

Eine häufige Frage von Website-Besitzern lautet, ob sie 'www' (`www.beispiel.com`) oder 'nicht-www' (`beispiel.com`) URLs wählen sollen. Diese Seite bietet einige Ratschläge, was ideal ist.

## Was sind Domainnamen?

In einer HTTP-URL wird die erste Zeichenkette, die auf das initiale `http://` oder `https://` folgt, als Domainname bezeichnet. Dieser Domainname wird auf einem Server gehostet, auf dem sich das Dokument befindet.

Ein Server ist nicht notwendigerweise ein physischer Rechner: Mehrere Server können auf demselben physischen Rechner sein. Oder ein einzelner Server kann von mehreren Maschinen betrieben werden, die zusammenarbeiten, um die Antwort zu liefern oder die Last der Anfragen zwischen ihnen zu verteilen. Der wesentliche Punkt ist, dass semantisch _ein Domainname einen einzelnen Server repräsentiert_.

## Muss ich mich für eine Option für meine Website entscheiden?

- **Ja**, Sie müssen sich für eine entscheiden und dabei bleiben. Die Wahl, welche als Ihre kanonische Adresse dient, liegt bei Ihnen, aber wenn Sie eine gewählt haben, bleiben Sie konsequent. Dies lässt Ihre Website für Nutzer und Suchmaschinen einheitlicher erscheinen. Dies beinhaltet, dass Sie immer auf die gewählte Domain verlinken (was nicht schwer sein dürfte, wenn Sie relative URLs auf Ihrer Website verwenden) und stets Links (z. B. per E-Mail oder soziale Netzwerke) zur selben Domain teilen.
- **Nein**, Sie können beide verwenden. Wichtig ist, dass Sie klar und konsistent vorgeben, welche die offizielle Domain ist. **Diese offizielle Domain wird _kanonische_ Adresse genannt.** Alle Ihre absoluten Links sollten diese verwenden. Dennoch kann die andere Domain weiterhin funktionsfähig sein: HTTP erlaubt zwei Techniken, um Ihren Nutzern oder Suchmaschinen klar zu machen, welche Domain die kanonische ist, während die nicht-kanonische Domain dennoch funktioniert und die erwarteten Seiten bereitstellt.

Wählen Sie also eine Ihrer Domains als Ihre kanonische! Es gibt zwei Techniken, mit denen die nicht-kanonische Domain weiterhin verwendet werden kann.

## Techniken für kanonische URLs

Es gibt unterschiedliche Methoden, um auszuwählen, welche Website _kanonisch_ ist.

### Verwendung von HTTP 301-Weiterleitungen

In diesem Fall müssen Sie den Server, der die HTTP-Anfragen empfängt (was höchstwahrscheinlich derselbe für 'www'- und 'nicht-www'-URLs ist), so konfigurieren, dass er auf jede Anfrage an die nicht-kanonische Domain mit einer passenden HTTP-Antwort {{HTTPStatus(301)}} reagiert. Dies führt dazu, dass der Browser, der versucht, auf die nicht-kanonischen URLs zuzugreifen, zu den kanonischen Äquivalenten umgeleitet wird. Wenn Sie z. B. 'nicht-www'-URLs als kanonischen Typ gewählt haben, sollten Sie alle 'www'-URLs zu ihren Äquivalenten ohne 'www' umleiten.

Beispiel:

1. Ein Server erhält eine Anfrage für `http://www.beispiel.org/whaddup` (wenn die kanonische Domain beispiel.org ist).
2. Der Server antwortet mit dem Code {{HTTPStatus(301)}} und dem Header {{HTTPHeader("Location")}} `Location: http://beispiel.org/whaddup`.
3. Der Client stellt eine Anfrage an die Adresse unter der kanonischen Domain: `http://beispiel.org/whaddup`.

Das [HTML5 boilerplate project](https://github.com/h5bp/html5-boilerplate) enthält ein Beispiel, [wie man einen Apache-Server so konfiguriert, dass eine Domain zur anderen weiterleitet](https://github.com/h5bp/html5-boilerplate/blob/7a22a33d4041c479d0962499e853501073811887/.htaccess#L219-L258).

### Verwendung von `<link rel="canonical">`

Es ist möglich, ein spezielles HTML-Element {{HTMLElement("link")}} auf einer Seite hinzuzufügen, um anzugeben, was die kanonische Adresse der Seite ist. Dies hat keine Auswirkungen auf den menschlichen Leser der Seite, signalisiert aber Suchmaschinen-Crawlern, wo die Seite tatsächlich beheimatet ist. Auf diese Weise indizieren Suchmaschinen nicht dieselbe Seite mehrmals, was möglicherweise dazu führt, dass sie als doppelte Inhalte oder Spam angesehen wird, und sogar dazu führen kann, dass Ihre Seite aus den Suchmaschinenergebnissen entfernt oder herabgestuft wird.

Wenn ein solches Tag hinzugefügt wird, liefern Sie für beide Domains denselben Inhalt, teilen den Suchmaschinen jedoch mit, welche URL kanonisch ist. Im vorherigen Beispiel würde `http://www.beispiel.org/whaddup` denselben Inhalt bedienen wie `http://beispiel.org/whaddup`, jedoch mit einem zusätzlichen {{htmlelement("link")}}-Element im Kopfbereich:

```html
<link href="http://example.org/whaddup" rel="canonical" />
```

Im Gegensatz zum vorherigen Fall werden im Browserverlauf 'www' und 'nicht-www'-URLs als unabhängige Einträge behandelt.

## Sorgen Sie dafür, dass Ihre Seite für beide funktioniert

Mit diesen Techniken können Sie Ihren Server so konfigurieren, dass er für beide Domains korrekt antwortet, sowohl für die www-vorgehängte als auch die nicht-www-vorgehängte Domain. Es ist empfehlenswert, dies zu tun, da Sie nicht vorhersagen können, welche URL Nutzer in die Adressleiste ihres Browsers eintippen. Es geht darum, sich dafür zu entscheiden, welchen Typ Sie als kanonische Adresse nutzen möchten, und dann den anderen Typ darauf umzuleiten.

## Entscheidungshilfen

Dies ist ein sehr subjektives Thema — es könnte als [bikeshedding](https://bikeshed.com/) diskutiert werden. Wenn Sie tiefer eintauchen möchten, finden Sie hier einige Ressourcen:

- [Optionen für bare Domains](https://www.netlify.com/blog/2020/03/26/how-to-set-up-netlify-dns-custom-domains-cname-and-a-records/#options-for-bare-domains) auf netlify.com (2020)
- [WWW vs non-WWW – Which Is Better for WordPress SEO?](https://www.wpbeginner.com/beginners-guide/www-vs-non-www-which-is-better-for-wordpress-seo/) auf wpbeginner.com (2023)

## Siehe auch

- [Statistiken darüber, was Menschen in die Adressleiste eingeben](https://www.chrisfinke.com/2011/07/25/what-do-people-type-in-the-address-bar/) (2011)
