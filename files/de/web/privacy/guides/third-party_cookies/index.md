---
title: Drittanbieter-Cookies
slug: Web/Privacy/Guides/Third-party_cookies
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

Dieser Artikel erklärt, was Drittanbieter-Cookies sind, beschreibt die damit verbundenen Probleme und erklärt, wie Sie diese Probleme umgehen können.

## Was sind Drittanbieter-Cookies?

Ein [Cookie](/de/docs/Web/HTTP/Cookies) ist mit einer bestimmten Domain und einem Schema (normalerweise `https`) verbunden und kann auch mit Subdomains verbunden sein, wenn das {{HTTPHeader("Set-Cookie")}} `Domain`-Attribut gesetzt ist.

- Wenn die Cookie-Domain und das Schema mit der aktuellen Seite übereinstimmen, die der Benutzer betrachtet (die URL, die in der Adressleiste des Browsers angezeigt wird), wird das Cookie als vom selben Standort wie die Seite stammend betrachtet und als _Erstanbieter-Cookie_ bezeichnet.
- Wenn die Domain und das Schema unterschiedlich sind, wird das Cookie nicht als vom selben Standort stammend betrachtet und als _Drittanbieter-Cookie_ bezeichnet.

> [!NOTE]
> Drittanbieter-Cookies werden manchmal als _cross-site cookies_ bezeichnet. Dies ist möglicherweise ein genauerer Name, da _Drittanbieter-Cookies_ im Besitz eines Drittunternehmens oder einer Drittorganisation implizieren. Das Verhalten und die potenziellen Probleme sind jedoch unabhängig davon, ob Sie alle beteiligten Websites besitzen, gleich. Beispielsweise könnte eine Website Ressourcen wie Bilder von einer anderen Domain beziehen, die sie besitzt.

Ein Erstanbieter-Cookie kann gesetzt werden, wenn ein Benutzer zuerst eine Seite besucht, einem internen Link zu einer anderen Seite auf derselben Website folgt oder eine Ressource anfordert, die sich auf derselben Website befindet (z. B. ein eingebettetes Bild, Webschriftart oder JavaScript-Datei).

Drittanbieter-Cookies werden in den folgenden gängigen Situationen gesendet:

- Wenn ein Link auf einer Website angeklickt wird, um zu einer anderen Website zu navigieren.
- Wenn eine Seite Komponenten von anderen Websites einbettet, wie z. B. Bilder oder andere Dokumente, die in {{htmlelement("iframe")}}s eingebettet sind (häufig als _Drittanbieter-Inhalte_ bezeichnet). Neben der ursprünglichen Anfrage für die Komponente können diese Komponenten weitere Anfragen generieren, die mehr Drittanbieter-Cookies setzen.

## Wofür werden Drittanbieter-Cookies verwendet?

Drittanbieter-Cookies, die beim Anklicken von Links zu anderen Websites gesetzt werden, werden für verschiedene Zwecke verwendet. Beispielsweise könnten Sie einen Affiliate-Link zu einer Partnerseite haben und ein Cookie setzen, wenn der Benutzer dem Link folgt, damit ein Belohnungsbanner mit einem Rabatt angezeigt werden kann, wenn ein bestimmtes Produkt gekauft wird, oder eine Provision an den Verweisenden zurückfließen kann.

Drittanbieter-Inhalte, die Cookies setzen, haben ebenfalls viele unterschiedliche Verwendungen. Beispielsweise könnten Sie ein Anmelde-Widget auf mehreren verschiedenen, aber verwandten Websites eingebettet haben, das ein Cookie über alle Websites hinweg teilt, das bestätigt, dass der Benutzer angemeldet ist, sodass er sich nicht auf jeder Website erneut anmelden muss.

Weitere Anwendungsfälle für Drittanbieter-Cookies sind:

- Teilen von Benutzerpräferenzen oder Themeninformationen über mehrere Websites hinweg.
- Sammeln von Analysen über mehrere Websites hinweg.
- Zählen von Anzeigenimpressionen und Aufzeichnen von Benutzerinteressen, um Ad-Tech-Plattformen zu ermöglichen, relevantere Anzeigen zu schalten.

Lassen Sie uns das oben erwähnte Beispiel des Anmelde-Widgets mit einem fiktiven Unternehmen weiter veranschaulichen, das separate Domains für seinen Online-Shop (`shop.site`), Diskussionsforen der Community (`forum.site`) und Kundenservice und Rückgaben (`service.site`) hat.

Jede der drei Websites hat ein eingebettetes Anmelde-Widget, das bei `auth.site` gehostet wird, um den Anmeldestatus über die Websites hinweg aufrechtzuerhalten. Ein Benutzer kann sich bei einer dieser Websites anmelden, wodurch ein Cookie im Browser für `auth.site` gesetzt wird, das eine Sitzungs-ID enthält. Wenn der Benutzer zu einer der anderen Websites wechselt, hat das eingebettete `auth.site`-Exemplar Zugriff auf das Sitzungs-ID-Cookie, das beim ersten Anmelden auf der ersten Website gesetzt wurde. Es kann dieses an den Server senden, überprüfen, ob es noch gültig ist, und sich sofort bei dieser Website anmelden.

![Visuelle Darstellung der obigen Beschreibung des Drittanbieter-Anmeldesystems](https://mdn.github.io/shared-assets/images/diagrams/http/cookies/3pc-example.png)

## Was ist das Problem mit Drittanbieter-Cookies?

Die obigen Anwendungsfälle klingen harmlos genug. Allerdings können Drittanbieter-Cookies auch ohne Einwilligung des Benutzers für illegitime Zwecke verwendet werden, die technisch nicht von gültigen Anwendungsfällen zu unterscheiden sind.

Das Folgen eines Links zu einer Drittanbieter-Website oder die Interaktion mit Drittanbieter-Inhalten in einem `<iframe>` (z. B. Ausfüllen eines Formulars oder Klicken auf einen Button) könnte dazu führen, dass Cookies gesetzt werden, die Benutzerdaten in die Hände von jemandem legen, von dem sie es nicht erwartet haben. Diese Informationen könnten verwendet werden, um:

- Benutzer im Web mit gezielten Anzeigen zu verfolgen, wann immer sie nach Informationen zu einem bestimmten Produkt suchen.
- Benutzer mit Spam-E-Mails oder Telefonanrufen zu belästigen.
- Ihr Verhalten zu manipulieren, um bestimmte Optionen zu wählen, die die Affiliate-Einnahmen erhöhen oder Statistiken manipulieren.

Einzeln sind solche Fälle schon schlimm genug, aber es wird noch schlimmer. Drittanbieter-Server können Informationen aus mehreren Drittanbieter-Cookies, die auf verschiedenen Websites gesetzt wurden, auf denen Drittanbieter-Inhalte eingebettet sind, kombinieren, um ein detailliertes Profil der Browserhistorie, Interessen, Gewohnheiten und persönlichen Informationen eines Benutzers zu erstellen. Dies kann verwendet werden, um gruselige, invasive Benutzererfahrungen zu schaffen, Benutzer zu betrügen oder sogar Identitätsdiebstahl zu begehen.

In solchen Fällen werden Drittanbieter-Cookies als _Tracking-Cookies_ bezeichnet.

> [!NOTE]
> Benutzerinformationen, die durch illegitime Mittel erlangt werden, werden auch häufig an andere Dritte verkauft, was das Problem weiter verschärft.

Gesetze wie die [Datenschutz-Grundverordnung](https://gdpr.eu/) (DSGVO) in der Europäischen Union und der [California Consumer Privacy Act](https://www.oag.ca.gov/privacy/ccpa) (CCPA) haben geholfen, indem Unternehmen gesetzlich verpflichtet werden, transparent über die gesetzten Cookies und die gesammelten Informationen zu sein. Beispiele hierfür sind die Aufforderung an Kunden, in eine solche Datenerfassung einzuwilligen, ihnen zu ermöglichen, die Daten, die ein Unternehmen über sie besitzt, einzusehen und zu löschen, wenn sie dies wünschen. Allerdings ist es für Kunden immer noch nicht immer klar, wie ihre Daten verwendet werden.

## Wie gehen Browser mit Drittanbieter-Cookies um?

Browseranbieter wissen, dass Benutzer das oben beschriebene Verhalten nicht mögen, und haben daher begonnen, Drittanbieter-Cookies standardmäßig zu blockieren, während sie auch Ausnahmen und Heuristiken in ihren Quellcode integriert haben, um langjährige Drittanbieter-Cookie-Probleme mit beliebten Websites zu lösen.

- Mozillas [Anti-Tracking-Policy](https://wiki.mozilla.org/Security/Anti_tracking_policy) hat dazu geführt, dass Firefox Drittanbieter-Cookies von bekannten Trackern standardmäßig blockiert (siehe [Firefox-Tracking-Schutz](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection) und [Erweiterter Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop)). Der erweiterte Tracking-Schutz kann auf Standard, Streng oder Benutzerdefiniert eingestellt werden. Der [Standardmodus](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_standard-enhanced-tracking-protection) aktiviert [Total Cookie Protection](https://blog.mozilla.org/en/products/firefox/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/), die Drittanbieter-Cookies ein separates Cookie-Glas pro Site zuweist und somit Cross-Site-Tracking verhindert. Im [Strengen Modus](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) blockiert Firefox alle Drittanbieter-Cookies.
- Apple hat auch eine ähnliche [Tracking-Präventionsrichtlinie](https://webkit.org/tracking-prevention-policy/); Die Beachtung dieser hat zu einem ähnlichen Satz von Drittanbieter-Cookie-Schutzmaßnahmen geführt, die standardmäßig aktiviert sind; siehe [Intelligent Tracking Prevention](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp) (ITP) für Details.
- Zum Zeitpunkt des Schreibens blockiert Google Chrome standardmäßig Drittanbieter-Cookies nur im Inkognito-Modus, obwohl Benutzer es so einstellen können, dass es Drittanbieter-Cookies dauerhaft blockiert, wenn sie dies wünschen, über `chrome://settings`. Google hat begonnen, Drittanbieter-Cookies für einen begrenzten Prozentsatz von Chrome-Benutzern zu deaktivieren, um die Auswirkungen zu testen, die dies haben wird, während gleichzeitig Technologien entwickelt werden, die die wichtigsten Anwendungsfälle ohne Drittanbieter-Cookies unterstützen. Weitere Informationen finden Sie unter [Ersetzen von Drittanbieter-Cookies](#ersetzen_von_drittanbieter-cookies).
- Edge blockiert Tracker von nicht besuchten Sites und blockiert standardmäßig bekannte schädliche Tracker. Zum Zeitpunkt des Schreibens beginnt Microsoft auch, die standardmäßige Blockierung von Drittanbieter-Cookies in Edge zu erkunden. Weitere Informationen finden Sie unter [Tracking-Prävention](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/tracking-prevention).
- Der [Brave-Browser](https://brave.com/) blockiert Tracking-Cookies standardmäßig.

Es ist möglich, die Verwendung von Drittanbieter-Cookies auf Einzelfallbasis in Firefox über die Browsereinstellungen zu erlauben. In Safari hingegen ist die Kontrolle eingeschränkter – Sie können die Cross-Site-Tracking-Prävention deaktivieren, aber der Zugriff auf Drittanbieter-Cookies pro Rahmen kann nur auf Codeebene über die [Storage Access API](/de/docs/Web/API/Storage_Access_API) erfolgen.

> [!NOTE]
> Drittanbieter-Cookies (oder nur Tracking-Cookies) können auch durch Browser-Erweiterungen blockiert werden.

Das Blockieren von Cookies kann dazu führen, dass einige Drittanbieter-Komponenten (wie Social-Media-Widgets) nicht wie beabsichtigt funktionieren. Da Browser weitere Einschränkungen für Drittanbieter-Cookies auferlegen, sollten Entwickler nach Möglichkeiten suchen, ihre Abhängigkeit von ihnen zu reduzieren: siehe [Ersetzen von Drittanbieter-Cookies](#ersetzen_von_drittanbieter-cookies).

## Verwendung von Drittanbieter-Cookies

### Aktivieren von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) Attribut ermöglicht es Servern festzulegen, ob/wann Drittanbieter-Cookies gesendet werden. Wenn Sie `SameSite` in Ihren `Set-Cookie`-Headern nicht angeben, wird der Standardwert `Lax` verwendet. Dies weist den Browser an, keine Drittanbieter-Cookies zu senden, es sei denn, der Benutzer navigiert zur Ursprungswebsite des Cookies von einer anderen Website. Dies ist nützlich, wenn Sie Cookies sofort senden möchten, sobald ein Benutzer von einer anderen Website zu Ihrer Website navigiert, um beispielsweise die Erfahrung sofort zu personalisieren, wenn sie dort ankommen.

Allerdings ist dies nicht gut, wenn Sie Inhalte über mehrere Websites in `<iframe>`s hinweg einbetten und auf Drittanbieter-Cookies für Funktionalität angewiesen sind, wie im oben erwähnten Anmeldebeispiel. In solchen Fällen müssen Sie `SameSite=None` explizit festlegen, um dem Browser zu erlauben, diese Cookies weiterzugeben:

```http
Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
```

Beachten Sie, dass wenn `SameSite=None` gesetzt ist, das `Secure`-Attribut auch gesetzt werden muss – `SameSite=None` erfordert einen _sicheren Kontext_. Im obigen Beispiel haben wir auch das `HttpOnly`-Attribut gesetzt, um den Zugriff auf das Cookie durch JavaScript (z.B. über [`Document.cookie`](/de/docs/Web/API/Document/cookie)) zu deaktivieren. Cookies, die sensible Informationen enthalten, sollten immer das `HttpOnly`-Attribut gesetzt haben – es wäre wirklich unsicher, sie JavaScript zugänglich zu machen. Diese Vorsichtsmaßnahme hilft, Cross-Site-Scripting ([XSS](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss))-Angriffe zu mildern.

> [!NOTE]
> Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](/de/docs/Web/HTTP/Cookies#removal_defining_the_lifetime_of_a_cookie) haben.

### Übergang von Drittanbieter-Cookies

Es gibt mehrere Strategien, um Websites zu helfen, Schäden in Browsern zu minimieren, in denen Drittanbieter-Cookies blockiert werden:

1. Überprüfen Sie Ihre Drittanbieter-Cookie-Nutzung. Cookies müssen das `SameSite=None`-Attribut gesetzt haben, um in einem Cross-Site-Kontext verwendet zu werden. Sie können daher Drittanbieter-Cookies identifizieren, indem Sie nach `SameSite=None` in Ihrem Code suchen oder gespeicherte `SameSite=None`-Cookies in Ihren Browser-Entwicklertools überprüfen, z. B. im [Firefox-Speicherinspektor](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/). Auch das [Issues-Panel von Chrome](https://developer.chrome.com/docs/devtools/issues/) [meldet Probleme mit der Blockierung von Drittanbieter-Cookies](https://developers.google.com/privacy-sandbox/cookies/prepare/audit-cookies#chrome-dev-tools) zusammen mit einer Liste der betroffenen Cookies.
2. Testen Sie Ihre Funktionalität mit blockierten Drittanbieter-Cookies, um zu sehen, was ausfällt. Möglicherweise stellen Sie fest, dass einige Cookies nicht mehr benötigt werden.
3. Zu Beginn könnten Sie Ihren Code widerstandsfähiger machen, sodass er eine weniger personalisierte Erfahrung bietet, wenn Daten von Drittanbieter-Cookies nicht verfügbar sind, anstatt vollständig zu versagen. Folgen Sie den Prinzipien der {{Glossary("Graceful_degradation", "graceful degradation")}}.
4. Sammeln Sie Daten über alternative Methoden wie Benutzerumfragen oder Quiz, oder schauen Sie sich die bereits vorhandenen Daten an, um Trends abzuleiten (z.B. Produktbestellungsverläufe).
5. Verwenden Sie einen alternativen clientseitigen Speichermechanismus wie [Web Storage](/de/docs/Web/API/Web_Storage_API), um Daten zu speichern, oder erwägen Sie eine serverseitige Lösung.
6. Wenn Ihre Drittanbieter-Cookies nur über eine kleine Anzahl von verwandten, bekannten Websites verwendet werden, könnten Sie die [Storage Access API](/de/docs/Web/API/Storage_Access_API) und/oder die [Verwandte Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) verwenden, um den Zugriff auf Drittanbieter-Cookies nur für diese spezifischen Websites zu ermöglichen. Die Storage Access API fordert den Benutzer auf, die Erlaubnis zu geben, dass eine Website Drittanbieter-Cookies pro Rahmenbasis verwenden darf.
   - Wenn Sie bereits eine Lösung unter Verwendung der Storage Access API für Firefox oder Safari implementiert haben, ist dies eine gute Gelegenheit, Ihre Implementierung mit dem Verhalten von Chrome abzugleichen, das in Version 119 aktualisiert wurde, um volle Unterstützung zu bieten.
   - Verwandte Website-Sets können als progressive Enhancement der Storage Access API betrachtet werden: Die API kann auf die gleiche Weise verwendet werden, aber Websites im Set werden die Benutzer nicht um Erlaubnis bitten, auf Drittanbieter-Cookies zuzugreifen.
7. Wenn Ihre Drittanbieter-Cookies auf einer 1:1-Basis mit den obersten Websites verwendet werden, auf denen sie generiert werden, könnten Sie [Cookies mit unabhängigen partitionierten Zuständen](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) (CHIPS, auch als partitionierte Cookies bekannt) verwenden, um Ihre Cookies in partitionierten Speicher mit einem separaten Cookie-Glas pro oberster Website zu optieren. Dies erfordert nur das Hinzufügen des `partitioned`-Attributes zu Ihren bestehenden Cross-Site-Cookies. Sie können dann uneingeschränkt verwendet werden, aber sie können nicht mit anderen Websites geteilt werden. Beachten Sie, dass CHIPS derzeit nur für Chromium verfügbar ist.

## Ersetzen von Drittanbieter-Cookies

Es stehen Entwicklern mehrere Funktionen zur Verfügung, die Drittanbieter-Cookies nicht verwenden möchten, um die Privatsphäre der Benutzer zu respektieren und das Tracking zu minimieren, während sie weiterhin verwandte Anwendungsfälle umsetzen. Einige dieser Funktionen befinden sich im frühen experimentellen Stadium, sie sind jedoch eine Überlegung wert, wenn Sie beginnen, sich auf die Zukunft vorzubereiten.

Sie können damit beginnen, die verschiedenen in Googles [Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox) Projekt verfügbaren Funktionen zu erkunden, um zu sehen ob sie zu Ihrem Anwendungsfall passen (diese sind derzeit experimentell und nur für Chromium):

- [Federated Credential Management](/de/docs/Web/API/FedCM_API) (FedCM) API: Ermöglicht föderierte Identitätsdienste, die es Benutzern gestatten, sich bei mehreren Websites und Diensten anzumelden.
- [Private State Tokens](https://developers.google.com/privacy-sandbox/protections/private-state-tokens): Ermöglicht Betrugs- und Spam-Verhinderung durch den Austausch von begrenzten, nicht identifizierenden Informationen über Websites hinweg.
- [Topics API](/de/docs/Web/API/Topics_API): Ermöglicht interessenbasierte Werbung und Inhaltsanpassung.
- [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience): Nutzt Daten von einer App oder Website, um bei einem Besuch einer anderen App oder Website eine Anzeige auszuwählen.
- [Attribution Reporting API](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting): Ermöglicht die Messung von Anzeigenimpressionen und -umwandlungen.

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Cookies)
- [Datenschutz im Web](/de/docs/Web/Privacy)
