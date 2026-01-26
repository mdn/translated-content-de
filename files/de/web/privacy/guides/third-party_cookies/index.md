---
title: Drittanbieter-Cookies
slug: Web/Privacy/Guides/Third-party_cookies
l10n:
  sourceCommit: 4bfe0fea3d3f9f911f934cd511442e73b87db080
---

Dieser Artikel erklärt, was Drittanbieter-Cookies sind, beschreibt die damit verbundenen Probleme und erläutert, wie Sie diese Probleme umgehen können.

## Was sind Drittanbieter-Cookies?

Ein [Cookie](/de/docs/Web/HTTP/Guides/Cookies) ist mit einer bestimmten Domain und einem Schema (gewöhnlich `https`) verknüpft und kann auch mit Subdomains verknüpft sein, wenn das {{HTTPHeader("Set-Cookie")}}-`Domain`-Attribut festgelegt ist.

- Wenn die Cookie-Domain und das Schema mit der aktuellen Seite übereinstimmen, die der Benutzer betrachtet (die im Adressfeld des Browsers angezeigte URL), wird das Cookie als vom gleichen Standort wie die Seite angesehen und als _Erstanbieter-Cookie_ bezeichnet.
- Wenn die Domain und das Schema unterschiedlich sind, wird das Cookie nicht als vom gleichen Standort stammend betrachtet und als _Drittanbieter-Cookie_ bezeichnet.

> [!NOTE]
> Drittanbieter-Cookies werden manchmal als _cross-site Cookies_ (Webseiten-übergreifende Cookies) bezeichnet. Dies ist möglicherweise ein treffenderer Name, da _Drittanbieter-Cookies_ die Eigentümerschaft durch ein Drittunternehmen oder eine Organisation implizieren. Das Verhalten und die potenziellen Probleme sind jedoch die gleichen, unabhängig davon, ob Sie alle beteiligten Seiten besitzen oder nicht. Zum Beispiel könnte eine Seite Ressourcen wie Bilder von einer anderen Domain abrufen, die sie besitzt.

Ein Erstanbieter-Cookie kann gesetzt werden, wenn ein Benutzer eine Seite erstmals besucht, einem internen Link zu einer anderen Seite auf derselben Website folgt oder eine Ressource abruft, die auf derselben Website liegt (zum Beispiel ein eingebettetes Bild, ein Webfont oder eine JavaScript-Datei).

Drittanbieter-Cookies werden in den folgenden häufigen Situationen gesendet:

- Wenn auf einer Seite ein Link angeklickt wird, um zu einer anderen Seite zu navigieren.
- Wenn eine Seite Komponenten von anderen Seiten einbindet, wie Bilder oder andere Dokumente, die in {{htmlelement("iframe")}}s eingebunden sind (häufig als _Drittanbieterinhalte_ bezeichnet). Neben der ursprünglichen Anfrage für die Komponente können diese Komponenten weitere Anfragen generieren, die weitere Drittanbieter-Cookies setzen.

## Wofür werden Drittanbieter-Cookies verwendet?

Drittanbieter-Cookies, die beim Klicken auf Links zu anderen Seiten gesetzt werden, werden für eine Vielzahl von Zwecken verwendet. Zum Beispiel könnten Sie einen Affiliate-Link zu einer Partnerseite haben und ein Cookie setzen, wenn der Benutzer dem Link folgt, sodass ein Belohnungs-Banner mit einem Rabatt angezeigt werden kann, wenn ein bestimmtes Produkt gekauft wird, oder eine Provision an den Empfehlungsgeber gezahlt werden kann.

Drittanbieterinhalte, die Cookies setzen, haben ebenfalls viele verschiedene Anwendungsfälle. Zum Beispiel könnten Sie ein Anmelde-Widget haben, das auf mehreren unterschiedlichen, aber verwandten Seiten eingebettet ist und ein Cookie über alle Seiten hinweg teilt, das bestätigt, dass der Benutzer angemeldet ist, sodass er sich nicht bei jeder Seite erneut anmelden muss.

Weitere Anwendungsfälle für Drittanbieter-Cookies umfassen:

- Teilen von Nutzerpräferenzen oder Themeninformationen über mehrere Seiten.
- Sammeln von Analysen über mehrere Seiten.
- Zählen von Anzeigenimpressionen und Aufzeichnen von Nutzerinteressen, um Adtech-Plattformen zu ermöglichen, relevantere Anzeigen zu schalten.

Lassen Sie uns das oben genannte Beispiel mit dem Anmelde-Widget anhand eines fiktiven Unternehmens weiter veranschaulichen, das separate Domains für seinen Online-Shop (`shop.site`), Foren zur Gemeinschaftsdiskussion (`forum.site`) und Kundenservice und -rückgaben (`service.site`) hat.

Jede der drei Seiten hat ein eingebettetes Anmelde-Widget, das bei `auth.site` gehostet wird, um den Anmeldestatus über alle Seiten hinweg beizubehalten. Ein Benutzer kann sich auf einer dieser Seiten anmelden, wobei ein Cookie im Browser für `auth.site` erstellt wird, das eine Sitzungs-ID enthält. Wenn der Benutzer zu einer der anderen Seiten geht, wird die eingebettete Instanz von `auth.site` Zugriff auf das beim Anmelden auf der ersten Seite gesetzte Sitzungs-ID-Cookie haben. Sie kann dieses an den Server senden, überprüfen, ob es noch gültig ist, und sich sofort bei dieser Seite anmelden.

![visuelle Darstellung der oben beschriebenen Drittanbieter-Anmeldesystembeschreibung](https://mdn.github.io/shared-assets/images/diagrams/http/cookies/3pc-example.png)

## Was ist das Problem mit Drittanbieter-Cookies?

Die oben genannten Anwendungsfälle klingen harmlos genug. Drittanbieter-Cookies können jedoch auch ohne die Zustimmung des Nutzers für illegitime Zwecke verwendet werden, die technisch gesehen nicht von legitimen Anwendungsfällen zu unterscheiden sind.

Das Folgen eines Links zu einem Drittanbieter oder die Interaktion mit in einem `<iframe>` eingebetteten Drittanbieterinhalten (zum Beispiel das Ausfüllen eines Formulars oder das Klicken auf einen Button) kann dazu führen, dass Cookies gesetzt werden, die Informationen eines Nutzers in die Hände unerwarteter Personen legen. Diese Informationen könnten genutzt werden, um:

- Nutzern überall im Web gezielte Anzeigen anzuzeigen, wann immer sie nach Informationen zu einem bestimmten Produkt suchen.
- Nutzer mit Spam-E-Mails oder Telefonanrufen zu belästigen.
- Ihr Verhalten zu manipulieren, um bestimmte Optionen zu wählen, die den Affiliate-Umsatz steigern oder Statistiken manipulieren.

Einzeln betrachtet sind solche Fälle schon schlimm genug, aber es wird noch schlimmer. Drittanbieter-Server können Informationen aus mehreren Drittanbieter-Cookies kombinieren, die über verschiedene Seiten gesetzt werden, auf denen Drittanbieterinhalte eingebettet sind, um ein detailliertes Profil des Surfverhaltens, der Interessen, Gewohnheiten und persönlichen Informationen eines Nutzers zu erstellen. Dies kann dazu verwendet werden, unheimliche, invasive Benutzererfahrungen zu schaffen, Nutzer zu betrügen oder sogar Identitätsdiebstahl zu begehen.

In solchen Fällen werden Drittanbieter-Cookies als _Tracking-Cookies_ bezeichnet.

> [!NOTE]
> Durch illegale Mittel erlangte Nutzerinformationen werden oft auch an andere Dritte verkauft, wodurch das Problem weiter verschärft wird.

Gesetzgebungen wie die [Datenschutz-Grundverordnung](https://gdpr.eu/) (DSGVO) in der Europäischen Union und das [California Consumer Privacy Act](https://www.oag.ca.gov/privacy/ccpa) (CCPA) haben dazu beigetragen, indem sie Unternehmen gesetzlich dazu verpflichtet haben, transparent über die von ihnen gesetzten Cookies und die gesammelten Informationen zu sein. Beispiele umfassen, dass Kunden in eine solche Datenerhebung einwilligen müssen, sie sehen können, welche Daten ein Unternehmen über sie hat, und die Daten löschen können, wenn sie es wünschen. Trotzdem ist es für Kunden nicht immer klar, wie ihre Daten verwendet werden.

## Wie gehen Browser mit Drittanbieter-Cookies um?

Browseranbieter wissen, dass Nutzer das oben beschriebene Verhalten nicht mögen. Um die negativen Auswirkungen auf die Benutzererfahrung zu mildern, haben einige begonnen, Drittanbieter-Cookies standardmäßig zu blockieren, und alternative Mechanismen wurden implementiert, um legitime Anwendungsfälle für Drittanbieter-Cookies zu entwickeln (siehe [Übergang von Drittanbieter-Cookies](#übergang_von_drittanbieter-cookies)).

Die folgende Liste beschreibt den Stand der Drittanbieter-Cookie-Blockierung in einer Auswahl von Browsern:

- Firefox aktiviert [Total Cookie Protection](https://blog.mozilla.org/en/mozilla/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/), wenn [Enhanced Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) aktiviert ist, was standardmäßig der Fall ist. Dies gibt Drittanbieter-Cookies ein separates Cookie-Glas pro Seite und verhindert Website-übergreifendes Tracking.
- Safari hat eine [Tracking-Verhinderungspolitik](https://webkit.org/tracking-prevention-policy/), die zu einem ähnlichen Satz von Drittanbieter-Cookie-Schutzmaßnahmen führt, die standardmäßig aktiviert sind; siehe [Intelligent Tracking Prevention](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp) (ITP) für Details.
- Google Chrome blockiert Drittanbieter-Cookies standardmäßig nicht, sondern nur im Inkognito-Modus oder wenn Nutzer es explizit einstellen, um Drittanbieter-Cookies über `chrome://settings` zu blockieren.
- Edge blockiert Tracker von nicht besuchten Seiten und blockiert standardmäßig bekannte schädliche Tracker. Weitere Informationen finden Sie unter [Tracking-Verhinderung](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/tracking-prevention).
- Der [Brave Browser](https://brave.com/) blockiert standardmäßig Tracking-Cookies.

Es ist möglich, die Verwendung von Drittanbieter-Cookies im Einzelfall in Firefox, Chrome und Edge über Browsereinstellungen zuzulassen. In Safari jedoch ist die Kontrolle eingeschränkter — Sie können die Verhinderung des Webseiten-übergreifenden Trackings ausschalten, aber den Zugriff auf Drittanbieter-Cookies pro Frame nur auf Code-Ebene über die [Storage Access API](/de/docs/Web/API/Storage_Access_API) erlauben.

> [!NOTE]
> Drittanbieter-Cookies (oder einfach Tracking-Cookies) können auch durch Browsererweiterungen blockiert werden.

Das Blockieren von Cookies kann dazu führen, dass Website-Funktionalitäten und Drittanbieter-Komponenten (wie Social-Media-Widgets) nicht wie vorgesehen funktionieren. Infolgedessen enthalten Browser Ausnahmen und Heuristiken in ihrem Quellcode, um langjährige Probleme mit Drittanbieter-Cookies bei beliebten Websites zu umgehen.

Im Allgemeinen sollten Entwickler beginnen, nach Möglichkeiten zu suchen, um die Anzahl der Situationen, in denen Drittanbieter-Cookies gesendet werden, zu begrenzen, um ihr Potenzial für Datenschutzschäden zu vermindern und die Abhängigkeit von ihnen zu reduzieren.

## Begrenzung von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Attribut ermöglicht es Servern festzulegen, ob/wann Drittanbieter-Cookies gesendet werden. Wenn Sie `SameSite` nicht in Ihren `Set-Cookie`-Headern angeben, wird der Standardwert verwendet, welcher in Chromium-basierten Browsern `Lax` ist und bei anderen Browsern variiert. Daher wird empfohlen, `SameSite` explizit festzulegen, um ein konsistentes Verhalten sicherzustellen.

Sie sollten versuchen, `Lax` als vernünftigen Standard in Ihren Apps zu verwenden, wo immer möglich. Dies weist den Browser an, keine Drittanbieter-Cookies zu senden, außer wenn der Benutzer zur Ursprungsseite des Cookies von einer anderen Seite navigiert. Dies ist nützlich, wenn Sie Cookies direkt senden möchten, sobald ein Benutzer von einer anderen Seite zu Ihrer Seite navigiert, zum Beispiel um die Erfahrung sofort zu personalisieren, sobald er dort ankommt.

Dies ist jedoch nutzlos, wenn Sie über mehrere Seiten hinweg Inhalte in `<iframe>`s einbetten und auf Drittanbieter-Cookies für die Funktionalität angewiesen sind, zum Beispiel im Fall des oben betrachteten Anmeldebeispiels. In solchen Fällen müssen Sie `SameSite=None` explizit setzen, um dem Browser zu erlauben, diese Cookies weiterzugeben:

```http
Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
```

Beachten Sie, dass, wenn `SameSite=None` gesetzt ist, das `Secure`-Attribut ebenfalls gesetzt sein muss — `SameSite=None` erfordert einen _sicheren Kontext_. Im obigen Beispiel haben wir außerdem das `HttpOnly`-Attribut gesetzt, um den JavaScript-Zugriff auf das Cookie zu deaktivieren (z.B. über [`Document.cookie`](/de/docs/Web/API/Document/cookie)). Cookies, die sensible Informationen enthalten, sollten immer das `HttpOnly`-Attribut gesetzt haben — es wäre sehr unsicher, sie für JavaScript verfügbar zu machen. Diese Vorsichtsmaßnahme hilft dabei, Cross-Site-Scripting ([XSS](/de/docs/Web/Security/Attacks/XSS)) Angriffe zu mindern.

> [!NOTE]
> Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](/de/docs/Web/HTTP/Guides/Cookies#removal_defining_the_lifetime_of_a_cookie) haben.

> [!NOTE]
> Sie können einen `SameSite`-Attributwert von `Strict` auf Cookies setzen, wenn Sie möchten, dass sie nur mit Anfragen gesendet werden, die von derselben Seite stammen, die das Cookie gesetzt hat. Dies blockiert effektiv Drittanbieter-Cookies in allen Umständen.

## Übergang von Drittanbieter-Cookies

Es gibt mehrere Strategien, um Websites zu helfen, Brüche in Browsern zu minimieren, in denen Drittanbieter-Cookies blockiert werden:

1. Überprüfen Sie Ihre Verwendung von Drittanbieter-Cookies. Cookies müssen das `SameSite=None`-Attribut haben, um in einem Webseiten-übergreifenden Kontext verwendet zu werden. Sie können daher Drittanbieter-Cookies identifizieren, indem Sie in Ihrem Code nach `SameSite=None` suchen oder gespeicherte `SameSite=None`-Cookies in Ihren Browser-DevTools prüfen, zum Beispiel im [Firefox Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/). Chromes [Issue-Panel](https://developer.chrome.com/docs/devtools/issues/) berichtet auch über [Probleme mit der Drittanbieter-Cookie-Blockierung](https://privacysandbox.google.com/cookies/prepare/audit-cookies#chrome-dev-tools) zusammen mit einer Liste der betroffenen Cookies.
2. Testen Sie Ihre Funktionalität mit blockierten Drittanbieter-Cookies, um zu sehen, was nicht funktioniert. Möglicherweise stellen Sie fest, dass einige Cookies nicht mehr benötigt werden.
3. Zumindest anfangs könnten Sie Ihren Code anpassungsfähiger machen, sodass eine weniger personalisierte Erfahrung bereitgestellt wird, wenn Drittanbieter-Cookiedaten nicht verfügbar sind, anstatt sie vollständig zu brechen. Folgen Sie den Prinzipien der {{Glossary("Graceful_degradation", "degressiven Degradierung")}}.
4. Sammeln Sie Daten auf alternativen Wegen wie Benutzerumfragen oder Quizzen, oder schauen Sie sich Daten an, die Sie bereits haben, um Trends zu ermitteln (zum Beispiel Bestellhistorien von Produkten).
5. Verwenden Sie einen alternativen clientseitigen Speichermachanismus wie den [Web Storage](/de/docs/Web/API/Web_Storage_API), um Daten zu speichern, oder erwägen Sie eine serverseitige Lösung.
6. Wenn Ihre Drittanbieter-Cookies nur über eine kleine Anzahl verwandter, bekannter Websites verwendet werden, könnten Sie die [Storage Access API](/de/docs/Web/API/Storage_Access_API) verwenden, um Webseiten-übergreifenden Cookie-Zugriff nur für diese spezifischen Websites zu ermöglichen. Die Storage Access API fordert den Benutzer auf, einer Website die Erlaubnis zu geben, Drittanbieter-Cookies auf einer pro-Frame-Basis zu verwenden.
7. Wenn Ihre Drittanbieter-Cookies auf 1:1-Basis mit den Top-Level-Sites, auf denen sie generiert werden, verwendet werden, könnten Sie [Cookies Having Independent Partitioned State](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) (CHIPS, auch als opt-in partitioned cookies bekannt) verwenden, um Ihre Cookies in partitionierten Speicher mit einem separaten Cookie-Glas pro Top-Level-Site zu optieren. Dies erfordert lediglich das Hinzufügen des `partitioned` Attributs zu Ihren bestehenden Webseiten-übergreifenden Cookies. Diese können dann uneingeschränkt verwendet werden, aber sie können nicht mit anderen Websites geteilt werden.

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- [Datenschutz im Web](/de/docs/Web/Privacy)
