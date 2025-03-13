---
title: Drittanbieter-Cookies
slug: Web/Privacy/Guides/Third-party_cookies
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

Dieser Artikel erklärt, was Drittanbieter-Cookies sind, beschreibt die damit verbundenen Probleme und erklärt, wie Sie diese Probleme umgehen können.

## Was sind Drittanbieter-Cookies?

Ein [Cookie](/de/docs/Web/HTTP/Guides/Cookies) ist mit einer bestimmten Domain und einem bestimmten Schema (in der Regel `https`) verknüpft und kann auch mit Subdomains verknüpft sein, wenn das {{HTTPHeader("Set-Cookie")}}-Attribut `Domain` gesetzt ist.

- Wenn die Cookie-Domain und das Schema mit der aktuellen Seite übereinstimmen, die der Benutzer betrachtet (die URL, die in der Adressleiste des Browsers angezeigt wird), wird das Cookie als von derselben Website wie die Seite stammend betrachtet und als _First-Party-Cookie_ bezeichnet.
- Wenn die Domain und das Schema unterschiedlich sind, wird das Cookie nicht als von derselben Website stammend betrachtet und als _Drittanbieter-Cookie_ bezeichnet.

> [!NOTE]
> Drittanbieter-Cookies werden manchmal als _Cross-Site-Cookies_ bezeichnet. Dies ist wohl ein genauerer Name, da _Drittanbieter-Cookies_ implizieren, dass sie im Besitz eines Drittunternehmens oder einer Drittorganisation sind. Das Verhalten und die potenziellen Probleme sind jedoch die gleichen, unabhängig davon, ob Sie alle beteiligten Websites besitzen oder nicht. Beispielsweise könnte eine Website Ressourcen wie Bilder von einer anderen Domain abrufen, die sie besitzen.

Ein First-Party-Cookie kann gesetzt werden, wenn ein Benutzer erstmals eine Seite besucht, einem internen Link zu einer anderen Seite auf derselben Website folgt oder eine auf derselben Website befindliche Ressource anfordert (z. B. ein eingebettetes Bild, Webfont oder JavaScript-Datei).

Drittanbieter-Cookies werden in den folgenden gängigen Situationen gesendet:

- Wenn ein Link auf einer Website angeklickt wird, um zu einer anderen Website zu navigieren.
- Wenn eine Seite Komponenten von anderen Websites einbettet, wie Bilder oder andere Dokumente, die in {{htmlelement("iframe")}}s eingebettet sind (oft als _Drittanbieter-Inhalte_ bezeichnet). Zusätzlich zur ursprünglichen Anforderung für die Komponente können diese Komponenten weitere Anforderungen generieren, die weitere Drittanbieter-Cookies setzen.

## Wofür werden Drittanbieter-Cookies verwendet?

Drittanbieter-Cookies, die beim Klicken auf Links zu anderen Websites gesetzt werden, werden für eine Vielzahl von Zwecken verwendet. Beispielsweise könnten Sie einen Partnerlink zu einer Partner-Website haben und ein Cookie setzen, wenn der Benutzer dem Link folgt, damit ein Belohnungsbanner mit einem Rabatt angezeigt werden kann, wenn ein bestimmtes Produkt gekauft wird, oder eine Provision an den Versicherer zurückgezahlt werden kann.

Auch Drittanbieter-Inhalte, die Cookies setzen, haben viele unterschiedliche Verwendungen. Beispielsweise könnten Sie ein Anmelde-Widget auf mehreren verschiedenen, aber verwandten Websites eingebettet haben, das ein Cookie auf allen Seiten teilt, das bestätigt, dass der Benutzer angemeldet ist, sodass er sich nicht auf jeder Site erneut anmelden muss.

Weitere Anwendungsfälle für Drittanbieter-Cookies umfassen:

- Teilen von Benutzerpräferenzen oder Theme-Informationen über mehrere Websites hinweg.
- Erhebung von Analysen über mehrere Websites hinweg.
- Zählen von Anzeigenimpressionen und Aufzeichnen von Benutzerinteressen, um Ad-Tech-Plattformen zu ermöglichen, relevantere Anzeigen zu schalten.

Veranschaulichen wir das oben genannte Beispiel des Anmelde-Widgets mit einem fiktiven Unternehmen, das separate Domains für seinen Onlineshop (`shop.site`), Diskussionsforen der Community (`forum.site`) und Kundenservice und Rücksendungen (`service.site`) hat.

Jede der drei Sites hat ein eingebettetes Anmelde-Widget, das unter `auth.site` gehostet wird, um den Anmeldestatus auf allen Sites zu erhalten. Ein Benutzer kann sich auf einer dieser Seiten anmelden, wodurch ein Cookie im Browser für `auth.site` mit einer Sitzungs-ID gesetzt wird. Wenn der Benutzer zu einer der anderen Sites geht, hat die eingebettete `auth.site`-Instanz Zugriff auf das Sitzungs-ID-Cookie, das beim ersten Anmelden des Benutzers auf einer Site gesetzt wurde. Sie kann es an den Server senden, überprüfen, ob es noch gültig ist, und den Benutzer sofort auf dieser Site anmelden.

![visuelle Darstellung des oben beschriebenen Drittanbieter-Anmeldesystems](https://mdn.github.io/shared-assets/images/diagrams/http/cookies/3pc-example.png)

## Was ist das Problem mit Drittanbieter-Cookies?

Die oben genannten Anwendungsfälle klingen harmlos genug. Drittanbieter-Cookies können jedoch auch ohne die Zustimmung des Benutzers für illegitime Zwecke verwendet werden, die technisch nicht von gültigen Anwendungsfällen unterscheidbar sind.

Ein Klick auf einen Link zu einem Drittanbieter oder die Interaktion mit in einem `<iframe>` eingebetteten Drittanbieter-Inhalten (z. B. das Ausfüllen eines Formulars oder das Klicken auf einen Button) könnte dazu führen, dass Cookies gesetzt werden, die die Informationen des Benutzers in die Hände von jemandem legen, von dem er es nicht erwartet hat. Diese Informationen könnten verwendet werden, um:

- Benutzer im Web mit zielgerichteten Anzeigen zu verfolgen, wann immer sie nach Informationen zu einem bestimmten Produkt suchen.
- Benutzer mit Spam-E-Mails oder Telefonanrufen zu kontaktieren.
- Ihr Verhalten zu manipulieren, um bestimmte Optionen auszuwählen, die Einnahmen aus Partnerprogrammen erhöhen oder Statistiken manipulieren.

Einzeln betrachtet sind solche Fälle schlimm genug, aber es wird schlimmer. Drittanbieter-Server können Informationen aus mehreren Drittanbieter-Cookies kombinieren, die über verschiedene Websites gesetzt werden, auf denen Drittanbieter-Inhalte eingebettet sind, um ein detailliertes Profil des Browserverlaufs, der Interessen, Gewohnheiten und persönlichen Informationen eines Benutzers zu erstellen. Dies kann verwendet werden, um unheimliche, aufdringliche Benutzererfahrungen zu schaffen, Benutzer zu betrügen oder sogar Identitätsdiebstahl zu begehen.

In solchen Fällen werden Drittanbieter-Cookies als _Tracking-Cookies_ bezeichnet.

> [!NOTE]
> Benutzerinformationen, die auf illegale Weise gewonnen werden, werden oft auch an andere Dritte verkauft, was das Problem weiter multipliziert.

Gesetze wie die [Datenschutz-Grundverordnung](https://gdpr.eu/) (GDPR) in der Europäischen Union und das [California Consumer Privacy Act](https://www.oag.ca.gov/privacy/ccpa) (CCPA) haben geholfen, indem sie Unternehmen gesetzlich verpflichtet haben, transparent über die von ihnen gesetzten Cookies und gesammelten Informationen zu sein. Beispiele sind, dass Kunden in die Datensammlung einwilligen, ihnen ermöglichen, zu sehen, welche Daten ein Unternehmen über sie speichert, und die Daten löschen lassen, wenn sie es wünschen. Dennoch ist es für Kunden nicht immer klar, wie ihre Daten verwendet werden.

## Wie gehen Browser mit Drittanbieter-Cookies um?

Browser-Anbieter wissen, dass Benutzer das oben beschriebene Verhalten nicht mögen, und haben daher alle begonnen, Drittanbieter-Cookies standardmäßig zu blockieren, während sie auch Ausnahmen und Heuristiken in ihren Quellcode aufnehmen, um langanhaltende Probleme mit Drittanbieter-Cookies auf beliebten Websites zu umgehen.

- Mozillas [Anti-Tracking-Politik](https://wiki.mozilla.org/Security/Anti_tracking_policy) hat dazu geführt, dass Firefox standardmäßig Drittanbieter-Cookies von bekannten Trackern blockiert (siehe [Firefox-Tracking-Schutz](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection) und [Erweiterter Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop)). Der Erweiterte Tracking-Schutz kann auf Standard, Streng oder Benutzerdefiniert eingestellt werden. Der [Standardmodus](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_standard-enhanced-tracking-protection) aktiviert den [Gesamten Cookie-Schutz](https://blog.mozilla.org/en/products/firefox/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/), der Drittanbieter-Cookies ein separates Cookie-Glas pro Site gibt, wodurch Cross-Site-Tracking verhindert wird. Im [Strengen Modus](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) blockiert Firefox alle Drittanbieter-Cookies.
- Apple hat ebenfalls eine ähnliche [Tracking-Verhinderungspolitik](https://webkit.org/tracking-prevention-policy/); dies hat zu einem ähnlichen Satz von Drittanbieter-Cookie-Schutzmaßnahmen geführt, die standardmäßig aktiviert sind; siehe [Intelligent Tracking Prevention](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp) (ITP) für Details.
- Zum Zeitpunkt der Erstellung dieses Artikels blockiert Google Chrome standardmäßig nur im Inkognito-Modus Drittanbieter-Cookies, obwohl Benutzer es so einstellen können, dass es immer Drittanbieter-Cookies blockiert, wenn sie dies wünschen, über `chrome://settings`. Google hat damit begonnen, Drittanbieter-Cookies für einen begrenzten Prozentsatz der Chrome-Nutzer zu deaktivieren, um die Auswirkungen zu testen, während gleichzeitig Technologien entwickelt werden, die wichtige Anwendungsfälle ermöglichen, ohne Drittanbieter-Cookies zu benötigen. Siehe [Ersetzen von Drittanbieter-Cookies](#ersetzen_von_drittanbieter-cookies) für Details.
- Edge blockiert Tracker von nicht besuchten Websites und blockiert bekannte schädliche Tracker standardmäßig. Zum Zeitpunkt der Erstellung dieses Artikels beginnt Microsoft auch, die Blockierung von Drittanbieter-Cookies in Edge standardmäßig zu erkunden. Siehe [Tracking-Prävention](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/tracking-prevention) für weitere Informationen.
- Der [Brave-Browser](https://brave.com/) blockiert standardmäßig Tracking-Cookies.

Es ist möglich, die Nutzung von Drittanbieter-Cookies in Firefox fallweise über die Browsereinstellungen zuzulassen. In Safari jedoch sind die Kontrollmöglichkeiten stärker eingeschränkt — Sie können das Verhindern von Cross-Site-Tracking ausschalten, aber das Zulassen des Zugriffs auf Drittanbieter-Cookies pro Frame kann nur auf Code-Ebene über die [Storage Access API](/de/docs/Web/API/Storage_Access_API) erfolgen.

> [!NOTE]
> Drittanbieter-Cookies (oder nur Tracking-Cookies) können auch durch Browsererweiterungen blockiert werden.

Das Blockieren von Cookies kann dazu führen, dass einige Drittanbieter-Komponenten (wie z. B. Social-Media-Widgets) nicht wie beabsichtigt funktionieren. Da Browser weitere Einschränkungen für Drittanbieter-Cookies auferlegen, sollten Entwickler beginnen, nach Möglichkeiten zu suchen, ihre Abhängigkeit davon zu reduzieren: siehe [Ersetzen von Drittanbieter-Cookies](#ersetzen_von_drittanbieter-cookies).

## Nutzung von Drittanbieter-Cookies

### Aktivierung von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attribut ermöglicht es Servern, anzugeben, ob/wann Drittanbieter-Cookies gesendet werden. Wenn Sie `SameSite` in Ihren `Set-Cookie`-Headern nicht angeben, wird der Standardwert `Lax` verwendet. Dies weist den Browser an, keine Drittanbieter-Cookies zu senden, außer wenn der Benutzer von einer anderen Website zur Ursprungsseite des Cookies navigiert. Dies ist nützlich, wenn Sie Cookies sofort senden möchten, sobald ein Benutzer von einer anderen Website zu Ihrer Website navigiert, um beispielsweise die Erfahrung sofort zu personalisieren, sobald sie dort ankommen.

Dies ist jedoch nicht gut, wenn Sie plattformübergreifende Inhalte auf mehreren Websites in `<iframe>`s einbetten möchten und auf Drittanbieter-Cookies für Funktionalität angewiesen sind, beispielsweise im Fall des oben betrachteten Anmeldebeispiels. In solchen Fällen müssen Sie explizit `SameSite=None` setzen, um dem Browser zu erlauben, diese Cookies weiterzugeben:

```http
Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
```

Beachten Sie, dass wenn `SameSite=None` gesetzt ist, auch das `Secure`-Attribut gesetzt werden muss — `SameSite=None` erfordert einen _sicheren Kontext_. Im obigen Beispiel haben wir auch das `HttpOnly`-Attribut gesetzt, um den JavaScript-Zugriff auf das Cookie (z. B. über [`Document.cookie`](/de/docs/Web/API/Document/cookie)) zu deaktivieren. Cookies, die sensible Informationen speichern, sollten immer das `HttpOnly`-Attribut gesetzt haben — es wäre wirklich unsicher, sie für JavaScript zugänglich zu machen. Diese Maßnahme hilft, Cross-Site-Scripting-Angriffe ([XSS](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss)) zu mildern.

> [!NOTE]
> Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](/de/docs/Web/HTTP/Guides/Cookies#removal_defining_the_lifetime_of_a_cookie) haben.

### Übergang von Drittanbieter-Cookies

Es gibt mehrere Strategien, um Websites bei der Minimierung von Ausfällen in Browsern zu helfen, in denen Drittanbieter-Cookies blockiert werden:

1. Überprüfen Sie Ihre Nutzung von Drittanbieter-Cookies. Cookies müssen das `SameSite=None`-Attribut gesetzt haben, um in einem Cross-Site-Kontext verwendet zu werden. Daher können Sie Drittanbieter-Cookies identifizieren, indem Sie nach `SameSite=None` in Ihrem Code suchen oder in Ihren Browser-DevTools nach gespeicherten `SameSite=None`-Cookies suchen, z. B. im [Firefox Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/). Chromes [Issues-Panel](https://developer.chrome.com/docs/devtools/issues/) [meldet auch Probleme mit der Blockierung von Drittanbieter-Cookies](https://developers.google.com/privacy-sandbox/cookies/prepare/audit-cookies#chrome-dev-tools) zusammen mit einer Liste betroffener Cookies.
2. Testen Sie Ihre Funktionalität mit blockierten Drittanbieter-Cookies, um zu sehen, was nicht mehr funktioniert. Möglicherweise stellen Sie fest, dass einige Cookies nicht mehr benötigt werden.
3. Zumindest anfangs könnten Sie Ihren Code robuster machen, sodass er eine weniger personalisierte Erfahrung bietet, wenn Daten aus Drittanbieter-Cookies nicht verfügbar sind, anstatt ihn ganz brechen zu lassen. Folgen Sie den Prinzipien des {{Glossary("Graceful_degradation", "Graceful Degradation")}}.
4. Sammeln Sie Daten auf alternative Weise, z. B. durch Benutzerumfragen oder Quizze, oder sehen Sie sich bereits vorhandene Daten an, um Trends abzuleiten (z. B. Auftragsverläufe).
5. Verwenden Sie einen alternativen clientseitigen Speicherkmechanismus wie [Web Storage](/de/docs/Web/API/Web_Storage_API), um Daten zu speichern, oder ziehen Sie eine serverseitige Lösung in Betracht.
6. Wenn Ihre Drittanbieter-Cookies nur auf einer kleinen Anzahl von verwandten, bekannten Websites verwendet werden, können Sie die [Storage Access API](/de/docs/Web/API/Storage_Access_API) und/oder [Related Website Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) verwenden, um den Zugriff auf plattformübergreifende Cookies nur für diese spezifischen Websites zu erlauben. Storage Access fordert den Benutzer auf, die Erlaubnis für eine Website zu geben, Drittanbieter-Cookies pro Frame zu verwenden.
   - Wenn Sie bereits eine Lösung mit der Storage Access API für Firefox oder Safari implementiert haben, ist dies ein guter Zeitpunkt, Ihre Implementierung mit dem Chrome-Verhalten zu überprüfen, das in Version 119 aktualisiert wurde, um volle Unterstützung zu bieten.
   - Related Website Sets können als fortschrittliche Erweiterung der Storage Access API betrachtet werden: Die API kann auf die gleiche Weise verwendet werden, aber Websites im Set werden die Benutzer nicht um Erlaubnis bitten, auf Drittanbieter-Cookies zuzugreifen.
7. Wenn Ihre Drittanbieter-Cookies auf einer 1:1-Basis mit den Top-Level-Sites verwendet werden, auf denen sie generiert werden, könnten Sie [Cookies Mit Unabhängigem Partitioniertem Status](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) (CHIPS, aka partitionierte Cookies) verwenden, um Ihre Cookies in partitionierten Speicher mit einem separaten Cookie-Glas pro Top-Level-Site zu aktivieren. Dies erfordert lediglich das Hinzufügen des `partitioned`-Attributs zu Ihren bestehenden plattformübergreifenden Cookies. Sie können dann uneingeschränkt verwendet werden, können jedoch nicht mit anderen Sites geteilt werden. Beachten Sie, dass CHIPS derzeit nur in Chromium verfügbar sind.

## Ersetzen von Drittanbieter-Cookies

Mehrere Funktionen stehen Entwicklern zur Verfügung, die Drittanbieter-Cookies nicht mehr verwenden möchten, um die Privatsphäre der Benutzer zu respektieren und das Tracking zu minimieren, während sie weiterhin verwandte Anwendungsfälle implementieren. Einige dieser Funktionen befinden sich in einem frühen experimentellen Stadium, es lohnt sich jedoch, sie zu berücksichtigen, wenn Sie mit den Vorbereitungen für die Zukunft beginnen.

Sie können beginnen, die verschiedenen im [Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox)Projekt von Google verfügbaren Funktionen zu erkunden, um zu sehen, ob sie zu Ihrem Anwendungsfall passen (diese sind derzeit experimentell und nur in Chromium verfügbar):

- [Federiertes Anmelde-Management](/de/docs/Web/API/FedCM_API) (FedCM) API: Ermöglicht föderierte Identitätsdienste, die es Benutzern ermöglichen, sich bei mehreren Websites und Diensten anzumelden.
- [Private State Tokens](https://developers.google.com/privacy-sandbox/protections/private-state-tokens): Ermöglicht Betrugs- und Spamabwehr, indem begrenzte, nicht identifizierende Informationen zwischen Websites ausgetauscht werden.
- [Topics API](/de/docs/Web/API/Topics_API): Ermöglicht interessenbasierte Werbung und Inhaltsanpassung.
- [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience): Verwenden Sie Daten aus einer App oder Website, um eine Werbung auszuwählen, wenn der Benutzer eine andere App oder Website besucht.
- [Attribution Reporting API](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting): Ermöglicht die Messung von Anzeigenimpressionen und -konversionen.

## Siehe auch

- [HTTP Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- [Privatsphäre im Web](/de/docs/Web/Privacy)
