import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as n,o as e}from"./app-DSxlsUKf.js";const l={};function h(t,s){return e(),a("div",null,s[0]||(s[0]=[n(`<h1 id="ubuntu-rsync自动同步" tabindex="-1"><a class="header-anchor" href="#ubuntu-rsync自动同步"><span>ubuntu rsync自动同步</span></a></h1><h1 id="服务器端设置" tabindex="-1"><a class="header-anchor" href="#服务器端设置"><span>服务器端设置：</span></a></h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装：</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rsync</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> xinetd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置：</span></a></h2><h3 id="_1-启动rsync作为使用xinetd的守护进程" tabindex="-1"><a class="header-anchor" href="#_1-启动rsync作为使用xinetd的守护进程"><span>1.启动rsync作为使用xinetd的守护进程:</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">RSYNC_ENABLE</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">inetd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-创建-etc-xinetd-d-rsync-通过xinetd使rsync开始工作" tabindex="-1"><a class="header-anchor" href="#_2-创建-etc-xinetd-d-rsync-通过xinetd使rsync开始工作"><span>2.创建/etc/xinetd.d/rsync，通过xinetd使rsync开始工作</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    disable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">         =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> no</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    socket_type</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">     =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stream</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    wait</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> no</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/bin/rsync</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    server_args</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">     =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --daemon</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    log_on_failure</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  +=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> USERID</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-创建-etc-rsyncd-conf-并填写配置信息" tabindex="-1"><a class="header-anchor" href="#_3-创建-etc-rsyncd-conf-并填写配置信息"><span>3.创建/etc/rsyncd.conf,并填写配置信息:</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 编辑配置信息</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">max</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> connections</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/log/rsync.log</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">timeout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 300</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[share] </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 模块名</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">comment</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Public</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Share</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># path为需要同步的文件夹路径</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">path</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home/share</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">read</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> only</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> no</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">list</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yes</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">uid</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">gid</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 必须和 rsyncd.secrets中的用户名对应</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">auth</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> users</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">secrets</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/rsyncd.secrets</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的users = user 是你自己设置的用户名，我设置的是：users = lucifer<br>这里的path = /home/share 是你自己设置的共享的文件夹，我设置的是：path = /home/lcf/share</p><h3 id="_4-创建-etc-rsyncd-secrets-配置用户名和密码" tabindex="-1"><a class="header-anchor" href="#_4-创建-etc-rsyncd-secrets-配置用户名和密码"><span>4.创建/etc/rsyncd.secrets，配置用户名和密码.</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 配置用户名和密码，密码可以任意设置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">user:password</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-修改rsyncd-secrets文件的权限" tabindex="-1"><a class="header-anchor" href="#_5-修改rsyncd-secrets文件的权限"><span>5.修改rsyncd.secrets文件的权限</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> chmod</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 600</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/rsyncd.secrets</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_6-启动-重启-xinetd" tabindex="-1"><a class="header-anchor" href="#_6-启动-重启-xinetd"><span>6.启动/重启 xinetd</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/init.d/xinetd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> restart</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="客户端配置" tabindex="-1"><a class="header-anchor" href="#客户端配置"><span>客户端配置：</span></a></h1><h2 id="测试将服务器文件同步至本地" tabindex="-1"><a class="header-anchor" href="#测试将服务器文件同步至本地"><span>测试将服务器文件同步至本地：</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rsync</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -cvazu</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --progress</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user@xx.xx.xx.xx::share</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /rsyn</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="自动输入密码和定时执行同步任务" tabindex="-1"><a class="header-anchor" href="#自动输入密码和定时执行同步任务"><span>自动输入密码和定时执行同步任务：</span></a></h2><h3 id="_1-安装expect" tabindex="-1"><a class="header-anchor" href="#_1-安装expect"><span>1. 安装expect：</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> expect</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-编写ex脚本" tabindex="-1"><a class="header-anchor" href="#_2-编写ex脚本"><span>2.编写ex脚本：</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> passwd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yourpassword</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> passwderror</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">spawn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rsync</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -cvazu</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --progress</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user@xx.xx.xx.xx::share</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /rsyn</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">expect</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    &quot;*assword:*&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$passwderror</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> }</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        puts</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;passwd is error&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">        exit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        } </span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">        set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> timeout</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">        set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> passwderror</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        send</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$passwd</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        exp_continue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    } </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    &quot;*es/no)?*&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        send</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;yes</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        exp_continue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    } </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    timeout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        puts</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;connect is timeout&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">        exit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-设置定时任务" tabindex="-1"><a class="header-anchor" href="#_3-设置定时任务"><span>3. 设置定时任务</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">crontab</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -e</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">*/5 * * * * root /tmp/rsync.ex</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28)]))}const r=i(l,[["render",h],["__file","rsync.html.vue"]]),p=JSON.parse('{"path":"/linux/rsync.html","title":"ubuntu rsync自动同步","lang":"zh-CN","frontmatter":{"description":"ubuntu rsync自动同步 服务器端设置： 安装： 配置： 1.启动rsync作为使用xinetd的守护进程: 2.创建/etc/xinetd.d/rsync，通过xinetd使rsync开始工作 3.创建/etc/rsyncd.conf,并填写配置信息: 这里的users = user 是你自己设置的用户名，我设置的是：users = luci...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/linux/rsync.html"}],["meta",{"property":"og:site_name","content":"李成成博客"}],["meta",{"property":"og:title","content":"ubuntu rsync自动同步"}],["meta",{"property":"og:description","content":"ubuntu rsync自动同步 服务器端设置： 安装： 配置： 1.启动rsync作为使用xinetd的守护进程: 2.创建/etc/xinetd.d/rsync，通过xinetd使rsync开始工作 3.创建/etc/rsyncd.conf,并填写配置信息: 这里的users = user 是你自己设置的用户名，我设置的是：users = luci..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ubuntu rsync自动同步\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李成成\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"安装：","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"配置：","slug":"配置","link":"#配置","children":[{"level":3,"title":"1.启动rsync作为使用xinetd的守护进程:","slug":"_1-启动rsync作为使用xinetd的守护进程","link":"#_1-启动rsync作为使用xinetd的守护进程","children":[]},{"level":3,"title":"2.创建/etc/xinetd.d/rsync，通过xinetd使rsync开始工作","slug":"_2-创建-etc-xinetd-d-rsync-通过xinetd使rsync开始工作","link":"#_2-创建-etc-xinetd-d-rsync-通过xinetd使rsync开始工作","children":[]},{"level":3,"title":"3.创建/etc/rsyncd.conf,并填写配置信息:","slug":"_3-创建-etc-rsyncd-conf-并填写配置信息","link":"#_3-创建-etc-rsyncd-conf-并填写配置信息","children":[]},{"level":3,"title":"4.创建/etc/rsyncd.secrets，配置用户名和密码.","slug":"_4-创建-etc-rsyncd-secrets-配置用户名和密码","link":"#_4-创建-etc-rsyncd-secrets-配置用户名和密码","children":[]},{"level":3,"title":"5.修改rsyncd.secrets文件的权限","slug":"_5-修改rsyncd-secrets文件的权限","link":"#_5-修改rsyncd-secrets文件的权限","children":[]},{"level":3,"title":"6.启动/重启 xinetd","slug":"_6-启动-重启-xinetd","link":"#_6-启动-重启-xinetd","children":[]}]},{"level":2,"title":"测试将服务器文件同步至本地：","slug":"测试将服务器文件同步至本地","link":"#测试将服务器文件同步至本地","children":[]},{"level":2,"title":"自动输入密码和定时执行同步任务：","slug":"自动输入密码和定时执行同步任务","link":"#自动输入密码和定时执行同步任务","children":[{"level":3,"title":"1. 安装expect：","slug":"_1-安装expect","link":"#_1-安装expect","children":[]},{"level":3,"title":"2.编写ex脚本：","slug":"_2-编写ex脚本","link":"#_2-编写ex脚本","children":[]},{"level":3,"title":"3. 设置定时任务","slug":"_3-设置定时任务","link":"#_3-设置定时任务","children":[]}]}],"readingTime":{"minutes":1.2,"words":359},"filePathRelative":"linux/rsync.md","excerpt":"\\n<h1>服务器端设置：</h1>\\n<h2>安装：</h2>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">sudo</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> apt</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> install</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> rsync</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> xinetd</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{r as comp,p as data};
